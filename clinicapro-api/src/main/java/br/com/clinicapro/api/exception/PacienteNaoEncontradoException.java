package br.com.clinicapro.api.exception;

public class PacienteNaoEncontradoException extends RuntimeException {

    public PacienteNaoEncontradoException() {
        super("Paciente não encontrado.");
    }

    public PacienteNaoEncontradoException(Long idUsuario) {
        super("Paciente " + idUsuario + " não encontrado.");
    }

}
