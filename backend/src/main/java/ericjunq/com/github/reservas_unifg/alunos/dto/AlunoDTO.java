package ericjunq.com.github.reservas_unifg.alunos.dto;

import ericjunq.com.github.reservas_unifg.enums.CursosEnum;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record AlunoDTO (
        @NotBlank @Size(max = 120) String nomeCompleto,

        @NotBlank @Pattern(regexp = "\\d+", message = "O RA só deve conter números")
        @Size(min = 10, max = 10) String registroAcademico,

        @NotBlank @Pattern(regexp = "\\d+", message = "O Telefone só deve conter números")
        @Size(min = 11, max = 11) String telefone,

        @NotNull CursosEnum cursos
        ){
}
