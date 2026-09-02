package ericjunq.com.github.reservas_unifg.equipamentos.controller;

import ericjunq.com.github.reservas_unifg.equipamentos.entity.Equipamentos;
import ericjunq.com.github.reservas_unifg.equipamentos.service.EquipamentosService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/equipamentos")
@RequiredArgsConstructor
public class EquipamentoController {

    private final EquipamentosService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<Equipamentos> buscarEquipamentoPorId(@PathVariable("id") Long id){
        Equipamentos equipamentos = service.buscarEquipamentoPorId(id);

        return ResponseEntity.ok(equipamentos);
    }

    @GetMapping
    public ResponseEntity<List<Equipamentos>> listarEquipamentos(){
        List<Equipamentos> equipamentos = service.listarEquipamentos();

        return ResponseEntity.ok(equipamentos);
    }
}
