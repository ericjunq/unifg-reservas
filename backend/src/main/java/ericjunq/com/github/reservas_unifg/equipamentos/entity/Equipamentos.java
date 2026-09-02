package ericjunq.com.github.reservas_unifg.equipamentos.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "equipamentos")
public class Equipamentos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "equipamento", nullable = false)
    private String equipamento;

    @Column(name = "quantidade")
    private Integer quantidade;
}
