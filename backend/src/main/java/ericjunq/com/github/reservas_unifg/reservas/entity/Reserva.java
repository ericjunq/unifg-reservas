package ericjunq.com.github.reservas_unifg.reservas.entity;

import ericjunq.com.github.reservas_unifg.alunos.entity.Aluno;
import ericjunq.com.github.reservas_unifg.enums.HorarioReserva;
import ericjunq.com.github.reservas_unifg.enums.StatusReserva;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "alunos_id", nullable = false)
    private Aluno aluno;

    @Column(name = "horario", nullable = false)
    private HorarioReserva horario;

    @Column(name = "data", nullable = false)
    private LocalDate data;

    @Column(name = "status", nullable = false)
    private StatusReserva status;

    @CreationTimestamp
    @Column(name = "data_criacao_reserva")
    private LocalDateTime dataCriacaoReserva;
}
