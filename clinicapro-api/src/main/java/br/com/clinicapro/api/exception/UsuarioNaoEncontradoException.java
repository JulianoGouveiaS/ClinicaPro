package br.com.clinicapro.api.exception;

public class UsuarioNaoEncontradoException extends RuntimeException {

    public UsuarioNaoEncontradoException() {
        super("Usuário não encontrado.");
    }

    public UsuarioNaoEncontradoException(String login) {
        super("Usuário " + login + " não encontrado.");
    }

    public UsuarioNaoEncontradoException(Long idUsuario) {
        super("Usuário " + idUsuario + " não encontrado.");
    }

}
