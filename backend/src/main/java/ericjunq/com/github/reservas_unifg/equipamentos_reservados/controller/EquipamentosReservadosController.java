package ericjunq.com.github.reservas_unifg.equipamentos_reservados.controller;

import ericjunq.com.github.reservas_unifg.equipamentos_reservados.entity.EquipamentosReservados;
import ericjunq.com.github.reservas_unifg.equipamentos_reservados.service.EquipamentosReservadosService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/equipamentos_reservados")
public class EquipamentosReservadosController {

    private final EquipamentosReservadosService service;

    @GetMapping
    public ResponseEntity<List<EquipamentosReservados>> listarReservasDeEquipamentos(){
        List<EquipamentosReservados> reservasEquipamentos = service.listarEquipamentosDasReserva();

        return ResponseEntity.ok(reservasEquipamentos);
    }

    @GetMapping(value = "{/id}")
    public ResponseEntity<EquipamentosReservados> buscarReservasDeEquipamentoPorID(@PathVariable("id") Long id){
        EquipamentosReservados reservaEquipamentos = service.buscarEquipamentosReservadosPorId(id);

        return ResponseEntity.ok(reservaEquipamentos);
    }
}
