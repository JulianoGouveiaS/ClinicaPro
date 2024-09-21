package br.com.clinicapro.api.service;

import br.com.clinicapro.api.domain.Pessoa;
import br.com.clinicapro.api.domain.Usuario;
import br.com.clinicapro.api.dto.LoginRequest;
import br.com.clinicapro.api.exception.*;
import br.com.clinicapro.api.repository.UsuarioRepository;
import br.com.clinicapro.api.util.JwtUtil;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final JwtEncoder jwtEncoder;

    public UsuarioService(UsuarioRepository usuarioRepository, BCryptPasswordEncoder bCryptPasswordEncoder, JwtEncoder jwtEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.jwtEncoder = jwtEncoder;
    }

    public String login(LoginRequest loginRequest) {
        if (!StringUtils.hasText(loginRequest.login())) {
            throw new LoginException("Usuário não encontrado");
        }
        if (!StringUtils.hasText(loginRequest.senha())) {
            throw new LoginException("Senha não informada");
        }

        Usuario usuario = usuarioRepository.findByLogin(loginRequest.login());

        if (usuario == null) {
            throw new LoginException("Usuário não encontrado");
        }
        if (Boolean.FALSE.equals(usuario.getAtivo())) {
            throw new UsuarioInativoException(usuario.getLogin());
        }
        boolean senhaCorreta = bCryptPasswordEncoder.matches(loginRequest.senha(), usuario.getSenha());
        if (senhaCorreta) {
            usuario.setUltimoLogin(LocalDateTime.now());
            usuarioRepository.save(usuario);
            return JwtUtil.gerarToken(this.jwtEncoder, usuario);
        } else {
            throw new LoginException("Usuário e/ou senha inválido");
        }
    }

    public Usuario getUsuarioToken(JwtAuthenticationToken token) {
        if (token == null || !StringUtils.hasText(token.getName())) {
            throw new JwtAuthenticationTokenException("Token inválido. Faça login novamente.");
        }
        return usuarioRepository.findByLogin(token.getName());
    }

    public List<Usuario> buscarPorUsuarioLogado(Usuario usuarioLogado)  {
        if (usuarioLogado.isAdmin()) {
            return this.usuarioRepository.findAll();
        }
        if (usuarioLogado.isProfissional()) {
            return this.usuarioRepository.buscarUsuariosTemporariosPorProfissional(usuarioLogado.getId());
        }
        throw new AcessoNegadoException();
    }

    public Usuario buscarPorId(Usuario usuarioLogado, Long id) {
        if (usuarioLogado.isAdmin()) {
            return this.usuarioRepository.findById(id).orElseThrow(() -> new UsuarioNaoEncontradoException(id));
        }
        if (usuarioLogado.isProfissional()) {
            Usuario usuarioEncontrado = this.usuarioRepository.findById(id)
                    .orElseThrow(() -> new UsuarioNaoEncontradoException(id));
            if (!usuarioEncontrado.isUsuarioTemporarioDoProfissional(usuarioLogado)) {
                throw new UsuarioTemporarioInvalido(id);
            }
            return usuarioEncontrado;
        }
        throw new AcessoNegadoException();
    }

    private void antesSalvar(Usuario usuario) {
        if (usuario == null) {
            throw new UsuarioValidacaoException("Objeto informado é inválido");
        }
        if (usuario.getPessoa() == null || usuario.getPessoa().getId() == null) {
            throw new UsuarioValidacaoException("Usuário informado não tem um cadastro de pessoa associado");
        }
        if (!StringUtils.hasText(usuario.getLogin())) {
            throw new UsuarioValidacaoException("O campo de login é obrigatório");
        }
        // Se for um cadastro novo, então o campo novaSenha é obrigatório
        if (usuario.getId() == null && (!StringUtils.hasText(usuario.getNovaSenha()) || usuario.getNovaSenha().trim().length() < 7)) {
            throw new UsuarioValidacaoException("Informe uma senha válida de no mínimo 7 caracteres");
        }
    }

    public Usuario salvar(Usuario usuario) {
        antesSalvar(usuario);
        boolean editando = usuario.getId() != null;
        if (StringUtils.hasText(usuario.getNovaSenha())) {
            usuario.setSenha(bCryptPasswordEncoder.encode(usuario.getNovaSenha()));
        } else if (editando && !StringUtils.hasText(usuario.getSenha())) {
            // Caso esteja editando e não está trocando a senha, então recupera a senha do banco para atualizar
            Usuario usuarioBancoDados = usuarioRepository.findById(usuario.getId()).orElseThrow(() -> new UsuarioNaoEncontradoException(usuario.getLogin()));
            usuario.setSenha(usuarioBancoDados.getSenha());
        }
        return usuarioRepository.save(usuario);
    }

    public Boolean ativarInativar(Long idUsuario) {
        if (idUsuario == null) {
            throw new UsuarioNaoEncontradoException();
        }
        Usuario usuarioEncontrado = usuarioRepository.findById(idUsuario).orElseThrow(UsuarioNaoEncontradoException::new);
        usuarioEncontrado.setAtivo(!usuarioEncontrado.getAtivo());
        usuarioRepository.save(usuarioEncontrado);
        return true;
    }
}
