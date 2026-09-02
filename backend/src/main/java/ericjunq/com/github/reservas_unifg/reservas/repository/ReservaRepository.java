package ericjunq.com.github.reservas_unifg.reservas.repository;

import ericjunq.com.github.reservas_unifg.enums.HorarioReserva;
import ericjunq.com.github.reservas_unifg.reservas.entity.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {

    boolean existsByHorario(HorarioReserva horarioReserva);
    boolean existsByData(LocalDate date);
}
