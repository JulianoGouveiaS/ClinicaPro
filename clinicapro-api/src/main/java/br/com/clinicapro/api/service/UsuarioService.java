package br.com.clinicapro.api.service;

import br.com.clinicapro.api.domain.Usuario;
import br.com.clinicapro.api.dto.LoginRequest;
import br.com.clinicapro.api.exception.AcessoNegadoException;
import br.com.clinicapro.api.exception.JwtAuthenticationTokenException;
import br.com.clinicapro.api.exception.LoginException;
import br.com.clinicapro.api.repository.UsuarioRepository;
import br.com.clinicapro.api.util.JwtUtil;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

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
        boolean senhaCorreta = bCryptPasswordEncoder.matches(loginRequest.senha(), usuario.getSenha());
        if (senhaCorreta) {
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
}
