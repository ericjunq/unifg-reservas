package ericjunq.com.github.reservas_unifg.exceptions;

public class RequestQuantityExceedsStockException extends RuntimeException {
    public RequestQuantityExceedsStockException() {
        super("A quantidade solicitada superior a do estoque");
    }
    public RequestQuantityExceedsStockException(String message) {
        super(message);
    }
}
