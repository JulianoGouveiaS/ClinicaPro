package br.com.clinicapro.api.exception;

public class PacienteException extends RuntimeException {

    public PacienteException() {
        super();
    }

    public PacienteException(String message) {
        super(message);
    }
}
