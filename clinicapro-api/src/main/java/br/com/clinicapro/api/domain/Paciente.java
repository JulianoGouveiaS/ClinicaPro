package br.com.clinicapro.api.domain;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Paciente extends Pessoa {

    private String tipoCaptacao;

    @OneToMany(mappedBy = "paciente", cascade = CascadeType.ALL)
    private List<FamiliarPaciente> familiares;

    public String getTipoCaptacao() {
        return tipoCaptacao;
    }

    public void setTipoCaptacao(String tipoCaptacao) {
        this.tipoCaptacao = tipoCaptacao;
    }

    public List<FamiliarPaciente> getFamiliares() {
        return familiares;
    }

    public void setFamiliares(List<FamiliarPaciente> familiares) {
        this.familiares = familiares;
    }
}
