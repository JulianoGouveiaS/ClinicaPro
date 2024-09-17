package br.com.clinicapro.api.service;

import br.com.clinicapro.api.domain.Pessoa;
import br.com.clinicapro.api.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    private void antesSalvar() {

    }

    public List<Pessoa> filtrar(String nome, String documento) {
        Pessoa pessoaFiltro = new Pessoa();
        pessoaFiltro.setNome(nome);
        pessoaFiltro.setDocumento(documento);
        ExampleMatcher matcher = ExampleMatcher.matching()
                .withIgnoreNullValues()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
        return pessoaRepository.findAll(Example.of(pessoaFiltro, matcher));
    }
}
