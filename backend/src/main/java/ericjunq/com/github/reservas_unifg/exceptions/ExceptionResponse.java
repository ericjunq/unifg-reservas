package ericjunq.com.github.reservas_unifg.exceptions;

import java.util.Date;

public record ExceptionResponse(
        Date timestamp,
        String message,
        String content
) {
}
