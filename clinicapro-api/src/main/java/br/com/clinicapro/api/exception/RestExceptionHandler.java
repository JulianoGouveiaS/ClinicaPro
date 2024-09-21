package br.com.clinicapro.api.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authorization.AuthorizationDeniedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(
            HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        String customMessage = "O corpo da requisição está ausente ou mal formatado.";
        return new ResponseEntity<>(customMessage, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({
            AccessDeniedException.class,
            AuthorizationDeniedException.class,
            AcessoNegadoException.class
    })
    public ResponseEntity<String> accessDeniedExceptionHandler() {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Você não tem permissão para acessar este recurso.");
    }

    @ExceptionHandler(PessoaValidacaoException.class)
    private ResponseEntity<String> exceptionHandler(RuntimeException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler(UsuarioValidacaoException.class)
    private ResponseEntity<String> exceptionHandler(UsuarioValidacaoException exception) {
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

    @ExceptionHandler(UsuarioNaoEncontradoException.class)
    private ResponseEntity<String> exceptionHandler(UsuarioNaoEncontradoException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler(UsuarioTemporarioInvalido.class)
    private ResponseEntity<String> exceptionHandler(UsuarioTemporarioInvalido exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler(UsuarioInativoException.class)
    private ResponseEntity<String> exceptionHandler(UsuarioInativoException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler(PacienteValidacaoException.class)
    private ResponseEntity<String> exceptionHandler(PacienteValidacaoException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler(PacienteNaoEncontradoException.class)
    private ResponseEntity<String> exceptionHandler(PacienteNaoEncontradoException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

}
