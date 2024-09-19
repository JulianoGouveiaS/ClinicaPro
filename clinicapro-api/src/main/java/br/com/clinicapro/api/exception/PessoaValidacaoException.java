package br.com.clinicapro.api.exception;

public class PessoaException extends RuntimeException {

    public PessoaException() {
        super();
    }

    public PessoaException(String message) {
        super(message);
    }
}
