package br.com.clinicapro.api.controller;

import br.com.clinicapro.api.domain.Permissao;
import br.com.clinicapro.api.dto.LoginRequest;
import br.com.clinicapro.api.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
@CrossOrigin("*")
public class LoginController {

    private final UsuarioService usuarioService;

    public LoginController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(usuarioService.login(loginRequest));
    }

    @GetMapping
    @PreAuthorize("hasAnyAuthority(" + Permissao.Authority.ADMIN + ")")
    public ResponseEntity<?> teste(JwtAuthenticationToken token) {
        return ResponseEntity.ok(token.getTokenAttributes());
    }

    @GetMapping("/checkJwt")
    public ResponseEntity<Boolean> checkJwt() {
        return ResponseEntity.ok(Boolean.TRUE);
    }

}
