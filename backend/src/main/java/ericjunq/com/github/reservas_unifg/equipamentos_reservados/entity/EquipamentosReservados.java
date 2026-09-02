package ericjunq.com.github.reservas_unifg.equipamentos_reservados.entity;

import ericjunq.com.github.reservas_unifg.equipamentos.entity.Equipamentos;
import ericjunq.com.github.reservas_unifg.reservas.entity.Reserva;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "equipamentos_reservados")
public class EquipamentosReservados {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "reserva_id", nullable = false)
    private Reserva reserva;

    @ManyToOne
    @JoinColumn(name = "equipamento_id", nullable = false)
    private Equipamentos equipamento;

    @Column(name = "quantidade_equipamento")
    private Integer quantidade;
}
