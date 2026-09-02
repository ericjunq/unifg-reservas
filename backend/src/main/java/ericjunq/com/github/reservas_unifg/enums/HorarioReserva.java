package ericjunq.com.github.reservas_unifg.enums;

import lombok.Getter;

import java.time.LocalTime;

@Getter
public enum HorarioReserva {

    PRIMEIRO_HORARIO(LocalTime.of(19, 0), LocalTime.of(20,30)),
    SEGUNDO_HORARIO(LocalTime.of(20, 30), LocalTime.of(22, 0));

    private final LocalTime inicio;
    private final LocalTime fim;

    HorarioReserva(LocalTime inicio, LocalTime fim) {
        this.inicio = inicio;
        this.fim = fim;
    }
}
