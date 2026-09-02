package ericjunq.com.github.reservas_unifg.reservas.mapper;

import ericjunq.com.github.reservas_unifg.alunos.entity.Aluno;
import ericjunq.com.github.reservas_unifg.reservas.dto.ReservaDTO;
import ericjunq.com.github.reservas_unifg.reservas.entity.Reserva;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(
        componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE
)
public interface ReservaMapper {

    @Mapping(target = "aluno", source = "aluno")
    Reserva toEntity(ReservaDTO reservaDTO, Aluno aluno);
}
