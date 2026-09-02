package ericjunq.com.github.reservas_unifg.alunos.service;

import ericjunq.com.github.reservas_unifg.alunos.dto.AlunoDTO;
import ericjunq.com.github.reservas_unifg.alunos.entity.Aluno;
import ericjunq.com.github.reservas_unifg.alunos.mapper.AlunoMapper;
import ericjunq.com.github.reservas_unifg.alunos.repository.AlunoRepository;
import ericjunq.com.github.reservas_unifg.exceptions.DataAlreadyRegistered;
import ericjunq.com.github.reservas_unifg.exceptions.EntityNotFoundException;
import ericjunq.com.github.reservas_unifg.exceptions.RequiredObjectIsNullException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AlunoService {

    private final AlunoRepository repository;
    private final AlunoMapper mapper;

    public Aluno criarAluno(AlunoDTO dto){

        if (dto == null){
            throw new RequiredObjectIsNullException();
        }
        if (repository.existByRa(dto.registroAcademico())){
            throw new DataAlreadyRegistered("O RA desse aluno já está cadastrado");
        }

        Aluno aluno = mapper.toEntity(dto);

        return repository.save(aluno);
    }

    public Aluno buscarAlunoPorID(Long id){
        return repository.findById(id)
                .orElseThrow(()-> new EntityNotFoundException("Aluno não encontrado"));
    }

    public List<Aluno> buscarAlunos(){
        return repository.findAll();
    }

}
