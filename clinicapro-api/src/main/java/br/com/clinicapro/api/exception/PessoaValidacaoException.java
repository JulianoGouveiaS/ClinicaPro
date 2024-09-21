package br.com.clinicapro.api.exception;

public class PessoaValidacaoException extends RuntimeException {

    public PessoaValidacaoException() {
        super();
    }

    public PessoaValidacaoException(String message) {
        super(message);
    }
}
