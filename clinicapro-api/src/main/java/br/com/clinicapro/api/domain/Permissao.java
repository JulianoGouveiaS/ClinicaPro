package br.com.clinicapro.api.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "permissao")
public class Permissao implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "permissao_publica")
    private Boolean indicadorPermissaoPublica;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Boolean getIndicadorPermissaoPublica() {
        return indicadorPermissaoPublica;
    }

    public void setIndicadorPermissaoPublica(Boolean indicadorPermissaoPublica) {
        this.indicadorPermissaoPublica = indicadorPermissaoPublica;
    }

    @JsonIgnore
    public boolean isAdmin() {
        return "ADMIN".equals(this.getDescricao());
    }

    @JsonIgnore
    public boolean isProfissional() {
        return "PROFISSIONAL".equals(this.getDescricao());
    }

    public final static class Authority {
        public static final String ADMIN = "'SCOPE_ADMIN'";
        public static final String PROFISSIONAL = "'SCOPE_PROFISSIONAL'";
    }

}
