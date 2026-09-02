package ericjunq.com.github.reservas_unifg.reservas.dto;

import ericjunq.com.github.reservas_unifg.enums.HorarioReserva;
import ericjunq.com.github.reservas_unifg.equipamentos_reservados.dto.EquipamentosReservadosDTO;
import jakarta.validation.constraints.*;

import java.time.LocalDate;
import java.util.List;

public record ReservaDTO(
        @NotBlank @Pattern(regexp = "\\d+", message = "O RA só deve conter números")
        @Size(min = 10, max = 10) String registroAcademico,

        @NotNull HorarioReserva horario,
        @NotNull LocalDate data,
        @NotNull List<EquipamentosReservadosDTO> equipamentosReservados
        ) {
}
