package br.com.clinicapro.api.exception;

public class PacienteValidacaoException extends RuntimeException {

    public PacienteValidacaoException() {
        super();
    }

    public PacienteValidacaoException(String message) {
        super(message);
    }
}
