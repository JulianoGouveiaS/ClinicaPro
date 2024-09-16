package br.com.clinicapro.api.repository;

import br.com.clinicapro.api.domain.Profissional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfissionalRepository extends JpaRepository<Profissional, Long> {
    Profissional getProfissionalById(Long id);
}
