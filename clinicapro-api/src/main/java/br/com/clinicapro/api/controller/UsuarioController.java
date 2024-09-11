package br.com.clinicapro.api.controller;

import br.com.clinicapro.api.dto.UsuarioCadastroDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("usuarios")
@CrossOrigin("*")
public class UsuarioController {

    @PostMapping("novo")
    public ResponseEntity<?> cadastrarNovoUsuario(@RequestBody UsuarioCadastroDTO usuarioCadastroDTO) {
        return ResponseEntity.ok(null);
    }

}
