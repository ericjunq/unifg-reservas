package ericjunq.com.github.reservas_unifg.exceptions;

public class RequiredObjectIsNullException extends RuntimeException {
    public RequiredObjectIsNullException() {
        super("Não é permitido o envio de um objeto nulo");
    }
    public RequiredObjectIsNullException(String message) {
        super(message);
    }
}
