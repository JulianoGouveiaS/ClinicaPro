package br.com.clinicapro.api.exception;

public class UsuarioInativoException extends RuntimeException {

    public UsuarioInativoException() {
        super("Usuário inativo.");
    }

    public UsuarioInativoException(String login) {
        super("Usuário " + login + " inativo.");
    }

    public UsuarioInativoException(Long idUsuario) {
        super("Usuário " + idUsuario + " inativo.");
    }

}
