package ericjunq.com.github.reservas_unifg.alunos.mapper;

import ericjunq.com.github.reservas_unifg.alunos.dto.AlunoDTO;
import ericjunq.com.github.reservas_unifg.alunos.entity.Aluno;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AlunoMapper {

    Aluno toEntity(AlunoDTO dto);
}
