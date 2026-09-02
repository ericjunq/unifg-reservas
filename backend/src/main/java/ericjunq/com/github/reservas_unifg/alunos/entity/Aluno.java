package ericjunq.com.github.reservas_unifg.alunos.entity;

import ericjunq.com.github.reservas_unifg.enums.CursosEnum;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "alunos")
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_completo", nullable = false)
    private String nomeCompleto;

    @Column(unique = true, name = "registro_academico", length = 10, nullable = false)
    private String ra;

    @Column(name = "telefone", nullable = false, length = 11)
    private String telefone;

    @Column(name = "curso", nullable = false)
    private CursosEnum curso;
}
