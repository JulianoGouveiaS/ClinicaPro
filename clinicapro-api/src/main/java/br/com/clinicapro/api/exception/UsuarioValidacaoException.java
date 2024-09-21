package br.com.clinicapro.api.exception;

public class UsuarioValidacaoException extends RuntimeException {

    public UsuarioValidacaoException() {
        super();
    }

    public UsuarioValidacaoException(String message) {
        super(message);
    }
}
