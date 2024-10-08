package br.com.clinicapro.api.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "usuario")
public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_pessoa", referencedColumnName = "id")
    private Pessoa pessoa;

    @Column(name = "login")
    private String login;

    @JsonIgnore
    @Column(name = "senha")
    private String senha;

    @Transient
    private String novaSenha;

    @Column(name = "ativo")
    private Boolean ativo;

    @Column(name = "ultimo_login")
    private LocalDateTime ultimoLogin;

    @Column(name = "usuario_temporario")
    private Boolean indicadorUsuarioTemporario;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(
            name = "permissao_usuario",
            joinColumns = @JoinColumn(name = "id_usuario"),
            inverseJoinColumns = @JoinColumn(name = "id_permissao")
    )
    private Set<Permissao> permissoes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNovaSenha() {
        return novaSenha;
    }

    public void setNovaSenha(String novaSenha) {
        this.novaSenha = novaSenha;
    }

    public Boolean getAtivo() {
        return ativo;
    }

    public void setAtivo(Boolean ativo) {
        this.ativo = ativo;
    }

    public LocalDateTime getUltimoLogin() {
        return ultimoLogin;
    }

    public void setUltimoLogin(LocalDateTime ultimoLogin) {
        this.ultimoLogin = ultimoLogin;
    }

    public Boolean getIndicadorUsuarioTemporario() {
        return indicadorUsuarioTemporario;
    }

    public void setIndicadorUsuarioTemporario(Boolean indicadorUsuarioTemporario) {
        this.indicadorUsuarioTemporario = indicadorUsuarioTemporario;
    }

    public Set<Permissao> getPermissoes() {
        return permissoes;
    }

    public void setPermissoes(Set<Permissao> permissoes) {
        this.permissoes = permissoes;
    }

    public boolean isAdmin() {
        return getPermissoes() != null && getPermissoes().stream().anyMatch(Permissao::isAdmin);
    }

    public boolean isProfissional() {
        return getPermissoes() != null && getPermissoes().stream().anyMatch(Permissao::isProfissional);
    }

    /**
     * Se o usuário é temporário e a pessoa dele é a mesma pessoa do usuário passado via parametro
     * então é um usuário temporário do mesmo
     * @param usuarioProfissional
     * @return verdadeiro ou falso
     */
    public boolean isUsuarioTemporarioDoProfissional(Usuario usuarioProfissional) {
        return Boolean.TRUE.equals(this.getIndicadorUsuarioTemporario())
            && this.getPessoa().getId().equals(usuarioProfissional.getPessoa().getId());
    }
}
