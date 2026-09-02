package ericjunq.com.github.reservas_unifg.alunos.controller;

import ericjunq.com.github.reservas_unifg.alunos.dto.AlunoDTO;
import ericjunq.com.github.reservas_unifg.alunos.entity.Aluno;
import ericjunq.com.github.reservas_unifg.alunos.service.AlunoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/alunos")
public class AlunoController {

    private final AlunoService service;

    @PostMapping
    public ResponseEntity<Aluno> criarAluno(@RequestBody AlunoDTO dto){
        Aluno aluno = service.criarAluno(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(aluno);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Aluno> buscarAlunoPorId(@PathVariable("id") Long id){
        Aluno aluno = service.buscarAlunoPorID(id);

        return ResponseEntity.ok(aluno);
    }

    @GetMapping
    public ResponseEntity<List<Aluno>> listarAlunos(){
        List<Aluno> listarAlunos = service.buscarAlunos();

        return ResponseEntity.ok(listarAlunos);
    }
}
