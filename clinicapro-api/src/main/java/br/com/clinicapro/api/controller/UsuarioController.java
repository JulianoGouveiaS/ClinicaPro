package br.com.clinicapro.api.controller;

import br.com.clinicapro.api.dto.UsuarioCadastroDTO;
import br.com.clinicapro.api.service.UsuarioService;
import org.springframework.http.ResponseEntity;
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

}
