package conecta.ejercicio.autos.controller;

import conecta.ejercicio.autos.exception.ResourcesNotFoundException;
import conecta.ejercicio.autos.modelo.Auto;
import conecta.ejercicio.autos.repositorio.AutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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



}
