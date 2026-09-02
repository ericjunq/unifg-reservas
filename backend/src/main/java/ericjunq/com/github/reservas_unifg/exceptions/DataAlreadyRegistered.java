package ericjunq.com.github.reservas_unifg.exceptions;

public class DataAlreadyRegistered extends RuntimeException {
    public DataAlreadyRegistered(String message) {
        super(message);
    }
}
