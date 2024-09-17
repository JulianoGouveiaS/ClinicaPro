package br.com.clinicapro.api.service;

import br.com.clinicapro.api.domain.Permissao;
import br.com.clinicapro.api.domain.Pessoa;
import br.com.clinicapro.api.repository.PermissaoRepository;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PermissaoService {

    final PermissaoRepository permissaoRepository;

    public PermissaoService(PermissaoRepository permissaoRepository) {
        this.permissaoRepository = permissaoRepository;
    }

    public List<Permissao> filtrar(String descricao) {
        Permissao permissaoFiltro = new Permissao();
        permissaoFiltro.setDescricao(descricao);
        ExampleMatcher matcher = ExampleMatcher.matching()
                .withIgnoreNullValues()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
        return permissaoRepository.findAll(Example.of(permissaoFiltro, matcher));
    }
}
