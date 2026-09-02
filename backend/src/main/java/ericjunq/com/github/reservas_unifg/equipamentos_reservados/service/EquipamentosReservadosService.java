package ericjunq.com.github.reservas_unifg.equipamentos_reservados.service;

import ericjunq.com.github.reservas_unifg.equipamentos_reservados.dto.EquipamentosReservadosDTO;
import ericjunq.com.github.reservas_unifg.equipamentos.entity.Equipamentos;
import ericjunq.com.github.reservas_unifg.equipamentos_reservados.entity.EquipamentosReservados;
import ericjunq.com.github.reservas_unifg.equipamentos.repository.EquipamentosRepository;
import ericjunq.com.github.reservas_unifg.equipamentos_reservados.repository.EquipamentosReservadosRepository;
import ericjunq.com.github.reservas_unifg.exceptions.EntityNotFoundException;
import ericjunq.com.github.reservas_unifg.exceptions.RequestQuantityExceedsStockException;
import ericjunq.com.github.reservas_unifg.reservas.entity.Reserva;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EquipamentosReservadosService {

    private final EquipamentosRepository equipamentosRepository;
    private final EquipamentosReservadosRepository equipamentosReservadosRepository;

    public void reservarEquipamento(Reserva reserva, List<EquipamentosReservadosDTO> list){

        for (EquipamentosReservadosDTO equipamentoReservado: list){

            Equipamentos equipamento = equipamentosRepository
                    .findById(equipamentoReservado.equipamentoId())
                    .orElseThrow(()-> new EntityNotFoundException("Equipamento não encontrado"));

            if (equipamentoReservado.quantidade() > equipamento.getQuantidade()){
                throw  new RequestQuantityExceedsStockException();
            }

            EquipamentosReservados reservado = new EquipamentosReservados();
            reservado.setReserva(reserva);
            reservado.setEquipamento(equipamento);
            reservado.setQuantidade(equipamentoReservado.quantidade());

            equipamentosReservadosRepository.save(reservado);
        }
    }

    public List<EquipamentosReservados> listarEquipamentosDasReserva(){
        return equipamentosReservadosRepository.findAll();
    }

    public EquipamentosReservados buscarEquipamentosReservadosPorId(Long id){

        return equipamentosReservadosRepository
                .findById(id).orElseThrow(()-> new EntityNotFoundException("Reserva de equipamentos não encontrada"));
    }
}
