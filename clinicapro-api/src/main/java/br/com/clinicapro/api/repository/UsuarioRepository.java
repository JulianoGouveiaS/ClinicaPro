package br.com.clinicapro.api.repository;

import br.com.clinicapro.api.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Usuario findByLogin(String login);

    @Query("From Usuario u Where u.indicadorUsuarioTemporario = true And u.pessoa.id = :idPessoa")
    List<Usuario> buscarUsuariosTemporariosPorProfissional(Long idPessoa);

}
