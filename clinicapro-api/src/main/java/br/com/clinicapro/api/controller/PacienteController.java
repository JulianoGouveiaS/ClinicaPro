package br.com.clinicapro.api.controller;

import br.com.clinicapro.api.domain.Paciente;
import br.com.clinicapro.api.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("pacientes")
@CrossOrigin("*")
public class PacienteController {

    private final UsuarioService usuarioService;

    public PacienteController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("novo")
    public ResponseEntity<?> cadastrarNovoUsuario(@RequestBody Paciente paciente) {
        return ResponseEntity.ok(null);
    }

}
