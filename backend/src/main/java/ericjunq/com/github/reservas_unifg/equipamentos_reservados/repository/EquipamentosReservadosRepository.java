package ericjunq.com.github.reservas_unifg.equipamentos_reservados.repository;

import ericjunq.com.github.reservas_unifg.equipamentos_reservados.entity.EquipamentosReservados;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipamentosReservadosRepository extends JpaRepository<EquipamentosReservados, Long> {
}
