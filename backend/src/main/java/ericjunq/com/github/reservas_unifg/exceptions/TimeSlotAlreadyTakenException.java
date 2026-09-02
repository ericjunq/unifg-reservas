package ericjunq.com.github.reservas_unifg.exceptions;

public class TimeSlotAlreadyTakenException extends RuntimeException {
    public TimeSlotAlreadyTakenException() {
        super("Esse horário já está reservado");
    }
    public TimeSlotAlreadyTakenException(String message) {
        super(message);
    }
}
