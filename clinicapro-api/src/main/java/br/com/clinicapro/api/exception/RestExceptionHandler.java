package br.com.clinicapro.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authorization.AuthorizationDeniedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({
            AccessDeniedException.class,
            AuthorizationDeniedException.class,
            AcessoNegadoException.class
    })
    public ResponseEntity<String> accessDeniedExceptionHandler() {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Você não tem permissão para acessar este recurso.");
    }

    @ExceptionHandler(PessoaException.class)
    private ResponseEntity<String> exceptionHandler(PessoaException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler(UsuarioException.class)
    private ResponseEntity<String> exceptionHandler(UsuarioException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler(LoginException.class)
    private ResponseEntity<String> exceptionHandler(LoginException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler(JwtAuthenticationTokenException.class)
    private ResponseEntity<String> exceptionHandler(JwtAuthenticationTokenException exception) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(exception.getMessage());
    }

}
