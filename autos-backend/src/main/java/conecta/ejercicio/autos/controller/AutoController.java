package conecta.ejercicio.autos.controller;

import conecta.ejercicio.autos.exception.ResourcesNotFoundException;
import conecta.ejercicio.autos.modelo.Auto;
import conecta.ejercicio.autos.modelo.ValidacionRequest;
import conecta.ejercicio.autos.repositorio.AutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.time.DayOfWeek;
import java.time.LocalDateTime;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")

public class AutoController {
    @Autowired
    private AutoRepository autoRepository;
    @GetMapping("/autos")
    public List<Auto> listarAutos(){return autoRepository.findAll();}
    @PostMapping("/autos")
    public Auto guardarAuto(@RequestBody Auto auto) {return autoRepository.save(auto);}

    @GetMapping("/autos/{id}")
    public ResponseEntity<Auto> ListarClientePorId(@PathVariable Long id){
        Auto auto = autoRepository.findById(id)
                .orElseThrow(()-> new ResourcesNotFoundException("El auto con ese ID no existe: " + id));

        return ResponseEntity.ok(auto);
    }

    @PutMapping("/autos/{id}")
    public ResponseEntity<Auto> actualizarAuto (@PathVariable Long id, @RequestBody Auto autoRequest){
        Auto auto = autoRepository.findById(id)
                .orElseThrow(()-> new ResourcesNotFoundException("El auto con ese ID no existe: " + id));

        auto.setPlaca(autoRequest.getPlaca());
        auto.setColor(autoRequest.getColor());
        auto.setModelo(autoRequest.getModelo());
        auto.setChasis(autoRequest.getChasis());
        auto.setInformacion(autoRequest.getInformacion());

        Auto AutoActualizado = autoRepository.save(auto);

        return ResponseEntity.ok(AutoActualizado);
    }

    @DeleteMapping("/autos/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarAuto(@PathVariable Long id){
        Auto auto = autoRepository.findById(id)
                .orElseThrow(()-> new ResourcesNotFoundException("El auto con ese ID no existe: " + id));

        autoRepository.delete(auto);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/autos/byPlaca/{placa}")
    public ResponseEntity<Auto> obtenerAutoPorPlaca(@PathVariable String placa) {
        Auto auto = autoRepository.findByPlaca(placa)
                .orElseThrow(() -> new ResourcesNotFoundException("No se encontró ningún auto con la placa: " + placa));

        return ResponseEntity.ok(auto);
    }
    @PostMapping("/autos/validarCirculacion")
    public ResponseEntity<String> validarCirculacion(@RequestBody ValidacionRequest request) {
        LocalDateTime fechaHora = request.getFechaHora();

        // Verificar si es lunes a viernes y en el rango de horarios
        if (esDiaLaboral(fechaHora) && esHoraPermitida(fechaHora)) {
            // Obtener el último dígito de la placa
            int ultimoDigitoPlaca = obtenerUltimoDigitoPlaca(request.getPlaca());

            // Verificar restricciones según el día de la semana
            if (cumpleRestriccion(fechaHora.getDayOfWeek(), ultimoDigitoPlaca)) {
                return ResponseEntity.ok("El auto no puede circular en este horario y día.");
            }
        }

        return ResponseEntity.ok("El auto puede circular en este horario y día.");
    }

    private boolean esDiaLaboral(LocalDateTime fechaHora) {
        DayOfWeek diaSemana = fechaHora.getDayOfWeek();
        return diaSemana != DayOfWeek.SATURDAY && diaSemana != DayOfWeek.SUNDAY;
    }

    private boolean esHoraPermitida(LocalDateTime fechaHora) {
        int hora = fechaHora.getHour();
        int minutos = fechaHora.getMinute();

        // Verificar si está en los horarios permitidos
        return (hora >= 6 && hora < 9 && minutos >= 0 && minutos <= 30) ||
                (hora >= 16 && hora < 20 && minutos >= 0);
    }

    private int obtenerUltimoDigitoPlaca(String placa) {
        // Obtener el último dígito de la placa
        char ultimoDigitoChar = placa.charAt(placa.length() - 1);
        return Character.getNumericValue(ultimoDigitoChar);
    }

    private boolean cumpleRestriccion(DayOfWeek diaSemana, int ultimoDigitoPlaca) {
        // Verificar restricciones según el día de la semana
        switch (diaSemana) {
            case MONDAY:
                return ultimoDigitoPlaca == 1 || ultimoDigitoPlaca == 2;
            case TUESDAY:
                return ultimoDigitoPlaca == 3 || ultimoDigitoPlaca == 4;
            case WEDNESDAY:
                return ultimoDigitoPlaca == 5 || ultimoDigitoPlaca == 6;
            case THURSDAY:
                return ultimoDigitoPlaca == 7 || ultimoDigitoPlaca == 8;
            case FRIDAY:
                return ultimoDigitoPlaca == 9 || ultimoDigitoPlaca == 0;
            default:
                return false;
        }
    }



}
