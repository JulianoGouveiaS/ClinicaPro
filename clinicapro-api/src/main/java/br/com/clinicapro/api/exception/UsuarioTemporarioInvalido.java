package br.com.clinicapro.api.exception;

public class UsuarioTemporarioInvalido extends RuntimeException {

    public UsuarioTemporarioInvalido() {
        super("Usuário temporário não pertence a você.");
    }

    public UsuarioTemporarioInvalido(String login) {
        super("Usuário temporário " + login + " não pertence a você.");
    }

    public UsuarioTemporarioInvalido(Long idUsuarioTemporario) {
        super("Usuário temporário " + idUsuarioTemporario + " não pertence a você.");
    }

}
