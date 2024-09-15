package br.com.clinicapro.api.controller;

import br.com.clinicapro.api.domain.Permissao;
import br.com.clinicapro.api.domain.Usuario;
import br.com.clinicapro.api.dto.UsuarioCadastroDTO;
import br.com.clinicapro.api.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("usuarios")
@CrossOrigin("*")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("novo")
    public ResponseEntity<?> cadastrarNovoUsuario(@RequestBody UsuarioCadastroDTO usuarioCadastroDTO) {
        return ResponseEntity.ok(null);
    }

    @GetMapping
    @PreAuthorize("hasAnyAuthority(" + Permissao.Authority.ADMIN + "," + Permissao.Authority.PROFISSIONAL + ")")
    public ResponseEntity<?> buscarTodos(JwtAuthenticationToken token) {
        Usuario usuarioLogado = usuarioService.getUsuarioToken(token);
        return ResponseEntity.ok(usuarioService.buscarPorUsuarioLogado(usuarioLogado));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyAuthority(" + Permissao.Authority.ADMIN + "," + Permissao.Authority.PROFISSIONAL + ")")
    public ResponseEntity<?> buscarPorId(JwtAuthenticationToken token, @PathVariable Long id) {
        Usuario usuarioLogado = usuarioService.getUsuarioToken(token);
        return ResponseEntity.ok(usuarioService.buscarPorId(usuarioLogado, id));
    }

}
