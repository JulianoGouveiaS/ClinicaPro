package br.com.clinicapro.api.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "profissional_paciente")
public class ProfissionalPaciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @ManyToOne
    @JoinColumn(name = "id_paciente", referencedColumnName = "id")
    private Pessoa paciente;
    @ManyToOne
    @JoinColumn(name = "id_profissional", referencedColumnName = "id")
    private Pessoa profissional;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Pessoa getPaciente() {
        return paciente;
    }

    public void setPaciente(Pessoa paciente) {
        this.paciente = paciente;
    }

    public Pessoa getProfissional() {
        return profissional;
    }

    public void setProfissional(Pessoa profissional) {
        this.profissional = profissional;
    }
}
