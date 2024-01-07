package conecta.ejercicio.autos.modelo;
import java.time.LocalDateTime;

public class ValidacionRequest {
    private String placa;
    private LocalDateTime fechaHora;

    // Constructor, getters y setters

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public LocalDateTime getFechaHora() {
        return fechaHora;
    }

    public void setFechaHora(LocalDateTime fechaHora) {
        this.fechaHora = fechaHora;
    }
}