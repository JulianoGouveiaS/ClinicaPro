package br.com.clinicapro.api.repository;

import br.com.clinicapro.api.domain.Permissao;
import br.com.clinicapro.api.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PermissaoRepository extends JpaRepository<Permissao, Long> {
}
