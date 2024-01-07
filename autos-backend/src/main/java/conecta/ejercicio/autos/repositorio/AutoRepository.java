package conecta.ejercicio.autos.repositorio;

import conecta.ejercicio.autos.modelo.Auto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@Repository

public interface AutoRepository extends JpaRepository<Auto, Long> {
    Optional<Auto> findByPlaca(String placa);


}
