package br.com.clinicapro.api.domain;

import br.com.clinicapro.api.domain.enums.TipoFamiliarEnum;
import jakarta.persistence.*;

@Entity
@Table(name = "familiarpaciente")
public class FamiliarPaciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @JoinColumn(name = "tipo")
    private TipoFamiliarEnum tipo;
    @ManyToOne
    @JoinColumn(name = "id_familiar", referencedColumnName = "id")
    private Pessoa familiar;
    @ManyToOne
    @JoinColumn(name = "id_paciente", referencedColumnName = "id")
    private Pessoa paciente;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TipoFamiliarEnum getTipo() {
        return tipo;
    }

    public void setTipo(TipoFamiliarEnum tipo) {
        this.tipo = tipo;
    }

    public Pessoa getFamiliar() {
        return familiar;
    }

    public void setFamiliar(Pessoa familiar) {
        this.familiar = familiar;
    }

    public Pessoa getPaciente() {
        return paciente;
    }

    public void setPaciente(Pessoa paciente) {
        this.paciente = paciente;
    }
}
