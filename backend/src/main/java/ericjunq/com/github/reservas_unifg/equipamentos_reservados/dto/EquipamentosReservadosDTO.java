package ericjunq.com.github.reservas_unifg.equipamentos_reservados.dto;

import jakarta.validation.constraints.NotNull;

public record EquipamentosReservadosDTO(
        @NotNull Long equipamentoId,
        @NotNull Integer quantidade
) {
}
