package br.com.clinicapro.api.service;

import br.com.clinicapro.api.domain.Pessoa;
import br.com.clinicapro.api.exception.PessoaValidacaoException;
import br.com.clinicapro.api.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDate;
import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    private void antesSalvar(Pessoa pessoa) {
        if (pessoa == null) {
            throw new PessoaValidacaoException("Objeto não informado para salvar");
        }
        if (!StringUtils.hasText(pessoa.getNome())) {
            throw new PessoaValidacaoException("O campo de nome é obrigatório");
        }
        if (!StringUtils.hasText(pessoa.getDocumento())) {
            throw new PessoaValidacaoException(String.format("Documento da pessoa \"%s\" informado é inválido", pessoa.getNome()));
        }
        if (!StringUtils.hasText(pessoa.getTelefone())) {
            throw new PessoaValidacaoException(String.format("Telefone da pessoa \"%s\" informado é inválido", pessoa.getNome()));
        }
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

    public Pessoa salvar(Pessoa pessoa) {
        antesSalvar(pessoa);
        if (pessoa.getId() == null) {
            pessoa.setDataCadastro(LocalDate.now());
        }
        return this.pessoaRepository.save(pessoa);
    }
}
