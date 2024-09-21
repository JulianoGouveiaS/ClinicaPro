package br.com.clinicapro.api.service;

import br.com.clinicapro.api.domain.Paciente;
import br.com.clinicapro.api.domain.Pessoa;
import br.com.clinicapro.api.domain.ProfissionalPaciente;
import br.com.clinicapro.api.domain.Usuario;
import br.com.clinicapro.api.exception.AcessoNegadoException;
import br.com.clinicapro.api.exception.PacienteNaoEncontradoException;
import br.com.clinicapro.api.exception.PacienteValidacaoException;
import br.com.clinicapro.api.repository.PacienteRepository;
import br.com.clinicapro.api.repository.ProfissionalPacienteRepository;
import br.com.clinicapro.api.repository.ProfissionalRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

@Service
public class PacienteService {

    private final PacienteRepository pacienteRepository;
    private final ProfissionalPacienteRepository profissionalPacienteRepository;
    private final ProfissionalRepository profissionalRepository;

    public PacienteService(PacienteRepository pacienteRepository,
                           ProfissionalPacienteRepository profissionalPacienteRepository,
                           ProfissionalRepository profissionalRepository) {
        this.pacienteRepository = pacienteRepository;
        this.profissionalPacienteRepository = profissionalPacienteRepository;
        this.profissionalRepository = profissionalRepository;
    }

    public List<Paciente> buscarPorUsuarioLogado(Usuario usuarioLogado) {
        if (usuarioLogado.isAdmin()) {
            return this.pacienteRepository.findAll();
        }
        if (usuarioLogado.isProfissional()) {
            return this.pacienteRepository.findAllByProfissionalId(usuarioLogado.getId());
        }
        throw new AcessoNegadoException();
    }

    private void validarSave(Paciente paciente) {
        if (paciente == null) {
            throw new PacienteValidacaoException("Paciente nao informado.");
        }
        if (!StringUtils.hasText(paciente.getNome())) {
            throw new PacienteValidacaoException("Nome nao informado.");
        }
        //tirei para deixar apenas o minimo necessario como obrigatorio
//        if (!StringUtils.hasText(paciente.getDocumento())) {
//            throw new PacienteException("Documento nao informado.");
//        }
    }

    private void cadastrarReferenciaProfissionalPaciente(Paciente paciente, Pessoa pessoaUsuario) {
        ProfissionalPaciente profissionalPaciente = new ProfissionalPaciente();

        //todo comentado pois ainda nao temos estrutura de profissional
        //todo por enquanto esta passando apenas pelo findAll

//        Profissional profissional = profissionalRepository.getProfissionalById(pessoaUsuario.getId());

        profissionalPaciente.setPaciente(paciente);
//        profissionalPaciente.setProfissional(profissional);
        profissionalPacienteRepository.save(profissionalPaciente);
    }

    public Paciente cadastrarNovoUsuario(Paciente paciente, Usuario usuario) {
        this.validarSave(paciente);
        Paciente pacienteSalvo = pacienteRepository.save(paciente);
        this.cadastrarReferenciaProfissionalPaciente(pacienteSalvo, usuario.getPessoa());

        return pacienteSalvo;
    }


    public Paciente buscarPorId(Usuario usuarioLogado, Long id) {
        if (usuarioLogado.isAdmin()) {
            return pacienteRepository.findById(id).orElseThrow(PacienteNaoEncontradoException::new);
        }
        if (usuarioLogado.isProfissional()) {
            return pacienteRepository.buscarPorIdEProfissional(id, usuarioLogado.getId());
        }
        throw new PacienteNaoEncontradoException();
    }
}
