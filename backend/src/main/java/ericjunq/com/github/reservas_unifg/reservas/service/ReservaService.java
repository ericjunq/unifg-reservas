package ericjunq.com.github.reservas_unifg.reservas.service;

import ericjunq.com.github.reservas_unifg.alunos.entity.Aluno;
import ericjunq.com.github.reservas_unifg.alunos.repository.AlunoRepository;
import ericjunq.com.github.reservas_unifg.enums.StatusReserva;
import ericjunq.com.github.reservas_unifg.equipamentos.service.EquipamentosService;
import ericjunq.com.github.reservas_unifg.equipamentos_reservados.service.EquipamentosReservadosService;
import ericjunq.com.github.reservas_unifg.exceptions.EntityNotFoundException;
import ericjunq.com.github.reservas_unifg.exceptions.TimeSlotAlreadyTakenException;
import ericjunq.com.github.reservas_unifg.reservas.dto.ReservaDTO;
import ericjunq.com.github.reservas_unifg.reservas.entity.Reserva;
import ericjunq.com.github.reservas_unifg.reservas.repository.ReservaRepository;
import ericjunq.com.github.reservas_unifg.reservas.mapper.ReservaMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ReservaService {

    private final ReservaMapper reservaMapper;
    private final ReservaRepository reservaRepository;
    private final AlunoRepository alunoRepository;
    private final EquipamentosReservadosService equipamentoService;

    public Reserva criarReserva(ReservaDTO dto){

        Aluno aluno = alunoRepository.findByRa(dto.registroAcademico())
                .orElseThrow(()-> new EntityNotFoundException("Aluno não encontrado"));

        if (reservaRepository.existsByData(dto.data()) && reservaRepository.existsByHorario(dto.horario())){
            throw new TimeSlotAlreadyTakenException();
        }

        Reserva reserva = reservaMapper.toEntity(dto, aluno);
        reserva.setAluno(aluno);
        reserva.setStatus(StatusReserva.RESERVADO);

        equipamentoService.reservarEquipamento(reserva, dto.equipamentosReservados());

        return reservaRepository.save(reserva);

    }

    public List<Reserva> listarReservas(){
        return reservaRepository.findAll();
    }

    public Reserva buscarReservaPorId(Long id){

        return reservaRepository.findById(id)
                .orElseThrow(()-> new EntityNotFoundException("Reserva não encontrada"));
    }
}
