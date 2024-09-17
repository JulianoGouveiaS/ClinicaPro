package br.com.clinicapro.api.controller;

import br.com.clinicapro.api.domain.Permissao;
import br.com.clinicapro.api.service.PermissaoService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/permissoes")
public class PermissaoController {

    final PermissaoService permissaoService;

    public PermissaoController(PermissaoService permissaoService) {
        this.permissaoService = permissaoService;
    }

    @GetMapping
    @PreAuthorize("hasAnyAuthority(" + Permissao.Authority.ADMIN + ")")
    public ResponseEntity<List<Permissao>> filtrar(
            @RequestParam(required = false) String descricao
    ) {
        return ResponseEntity.ok(permissaoService.filtrar(descricao));
    }
}
