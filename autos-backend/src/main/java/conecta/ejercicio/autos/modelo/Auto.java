package conecta.ejercicio.autos.modelo;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NotFound;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "autos",  uniqueConstraints = {@UniqueConstraint(columnNames = {"chasis" , "placa"})})

public class Auto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "placa" , unique = true)
    private  String placa;

    @Column(name = "color")
    private  String color;

    @Column(name = "modelo")
    private String modelo;

    @Column(name = "chasis", unique = true)
    private String chasis;

    @Column(name = "informacion adicional")
    private String informacion;

}
