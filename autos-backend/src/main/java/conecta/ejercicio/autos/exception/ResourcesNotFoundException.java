package conecta.ejercicio.autos.exception;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
@AllArgsConstructor
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourcesNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public ResourcesNotFoundException(String mensaje) {
        super(mensaje);
    }


}
