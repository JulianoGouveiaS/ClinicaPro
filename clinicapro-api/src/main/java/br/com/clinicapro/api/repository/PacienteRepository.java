package br.com.clinicapro.api.repository;

import br.com.clinicapro.api.domain.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Long> {


    @Query(value = "SELECT p.* FROM Paciente p " +
            "JOIN profissional_paciente pp ON p.id = pp.id_paciente " +
            "WHERE pp.id_profissional = :idProfissional", nativeQuery = true)
    List<Paciente> findAllByProfissionalId(@Param("idProfissional") Long idProfissional);
}
