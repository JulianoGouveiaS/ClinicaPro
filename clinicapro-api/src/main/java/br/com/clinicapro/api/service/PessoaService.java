package br.com.clinicapro.api.service;

import br.com.clinicapro.api.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    private void antesSalvar() {

    }

}
