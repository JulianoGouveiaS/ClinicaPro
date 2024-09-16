package br.com.clinicapro.api.controller;

import br.com.clinicapro.api.domain.Paciente;
import br.com.clinicapro.api.domain.Permissao;
import br.com.clinicapro.api.domain.Usuario;
import br.com.clinicapro.api.service.PacienteService;
import br.com.clinicapro.api.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("pacientes")
@CrossOrigin("*")
public class PacienteController {

    private final PacienteService pacienteService;
    private final UsuarioService usuarioService;

    public PacienteController(PacienteService pacienteService, UsuarioService usuarioService) {
        this.pacienteService = pacienteService;
        this.usuarioService = usuarioService;
    }

    @PostMapping("novo")
    public ResponseEntity<?> cadastrarNovoUsuario(JwtAuthenticationToken token, @RequestBody Paciente paciente) {
        Usuario usuarioLogado = usuarioService.getUsuarioToken(token);
        return ResponseEntity.ok(pacienteService.cadastrarNovoUsuario(paciente, usuarioLogado));
    }

    @GetMapping("/")
    @PreAuthorize("hasAnyAuthority(" + Permissao.Authority.ADMIN + "," + Permissao.Authority.PROFISSIONAL + ")")
    public ResponseEntity<?> buscarTodos(JwtAuthenticationToken token) {
        Usuario usuarioLogado = usuarioService.getUsuarioToken(token);
        return ResponseEntity.ok(pacienteService.buscarPorUsuarioLogado(usuarioLogado));
    }

}
