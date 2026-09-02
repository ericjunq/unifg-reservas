package ericjunq.com.github.reservas_unifg.reservas.controller;

import ericjunq.com.github.reservas_unifg.reservas.dto.ReservaDTO;
import ericjunq.com.github.reservas_unifg.reservas.entity.Reserva;
import ericjunq.com.github.reservas_unifg.reservas.service.ReservaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/reserva")
public class ReservaController {

    private final ReservaService reservaService;

    @PostMapping
    public ResponseEntity<Reserva> criarReserva(@RequestBody ReservaDTO dto){
        Reserva reserva = reservaService.criarReserva(dto);

        return ResponseEntity.status(HttpStatus.CREATED).body(reserva);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reserva> buscarReservaPorId(@PathVariable Long id){
        Reserva reserva = reservaService.buscarReservaPorId(id);

        return ResponseEntity.ok(reserva);
    }

    @GetMapping
    public ResponseEntity<List<Reserva>> listarReservas(){
        List<Reserva> reservas = reservaService.listarReservas();

        return ResponseEntity.ok(reservas);
    }
}
