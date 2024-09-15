package br.com.clinicapro.api.exception;

public class JwtAuthenticationTokenException extends RuntimeException {

    public JwtAuthenticationTokenException() {
        super();
    }

    public JwtAuthenticationTokenException(String message) {
        super(message);
    }
}