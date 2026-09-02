package ericjunq.com.github.reservas_unifg.equipamentos.service;

import ericjunq.com.github.reservas_unifg.equipamentos.entity.Equipamentos;
import ericjunq.com.github.reservas_unifg.equipamentos.repository.EquipamentosRepository;
import ericjunq.com.github.reservas_unifg.exceptions.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EquipamentosService {

    private final EquipamentosRepository repository;

    public List<Equipamentos> listarEquipamentos(){
        return repository.findAll();
    }

    public Equipamentos buscarEquipamentoPorId(Long id){
        return repository.findById(id)
                .orElseThrow(()-> new EntityNotFoundException("Equipamento não encontrado"));
    }
}
