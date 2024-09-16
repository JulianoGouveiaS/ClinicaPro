package br.com.clinicapro.api.repository;

import br.com.clinicapro.api.domain.ProfissionalPaciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfissionalPacienteRepository extends JpaRepository<ProfissionalPaciente, Long> {


}
