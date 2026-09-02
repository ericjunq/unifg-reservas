package ericjunq.com.github.reservas_unifg.alunos.repository;

import ericjunq.com.github.reservas_unifg.alunos.entity.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    boolean existByRa(String ra);
    Optional<Aluno> findByRa(String ra);
}

