package br.com.clinicapro.api.controller;

import br.com.clinicapro.api.domain.Permissao;
import br.com.clinicapro.api.domain.Pessoa;
import br.com.clinicapro.api.service.PessoaService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/pessoas")
public class PessoaController {

    final PessoaService pessoaService;

    public PessoaController(PessoaService pessoaService) {
        this.pessoaService = pessoaService;
    }

    @GetMapping
    @PreAuthorize("hasAnyAuthority(" + Permissao.Authority.ADMIN + ")")
    public ResponseEntity<List<Pessoa>> filtrar(
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) String documento
    ) {
        return ResponseEntity.ok(pessoaService.filtrar(nome, documento));
    }

    @PostMapping
    @PreAuthorize("hasAnyAuthority(" + Permissao.Authority.ADMIN + ")")
    public ResponseEntity<Pessoa> salvar(@RequestBody Pessoa pessoa) {
        return ResponseEntity.ok(pessoaService.salvar(pessoa));
    }
}
