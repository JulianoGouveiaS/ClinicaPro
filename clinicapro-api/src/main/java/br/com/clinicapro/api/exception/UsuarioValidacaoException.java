package br.com.clinicapro.api.exception;

public class UsuarioException extends RuntimeException {

    public UsuarioException() {
        super();
    }

    public UsuarioException(String message) {
        super(message);
    }
}
