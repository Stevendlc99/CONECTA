import React, { useState, navigate} from 'react'
import AutoService from '../services/AutoService';
import { Link } from 'react-router-dom';

export const AddAutoComponent = () => {
    const [modelo, setModelo] = useState('');
    const [color, setColor] = useState('');
    const [placa, setPlaca] = useState('');
    const [chasis, setChasis] = useState('');
    const [informacion, setInformacion] = useState('');
    const [placaError, setPlacaError] = useState('');
    const [guardadoExitoso, setGuardadoExitoso] = useState(false);

    const validatePlaca = (inputPlaca) => {
        const placaRegex = /^[A-Z]{3}-\d{3,4}$/;

        if (!inputPlaca.match(placaRegex)) {
            return 'La placa debe tener el formato correcto, ejemplo (PBE-193) o (PAB-4875)';
        }

        return '';
    };

    const saveAuto = (e) => {
        e.preventDefault();
        setGuardadoExitoso(false);
        if (!modelo || !color || !placa || !chasis) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        const placaValidationResult = validatePlaca(placa);
        if (placaValidationResult) {
            setPlacaError(placaValidationResult);
            return;
        }
        const auto = { modelo, color, placa, chasis, informacion }
        AutoService.createAuto(auto).then((response) => {
            setGuardadoExitoso(true);
            console.log(response.data);
            setModelo('');
                setColor('');
                setPlaca('');
                setChasis('');
                setInformacion('');
            navigate('/autos')
            

        })
            .catch((error) => {

                if (error.response && error.response.status === 400) {

                    alert(error.response.data);
                } 
                
                
            });
    }
  

    return (
        <div>
            <div className='container'>
                <div className='row'></div>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center '>Registro de autos</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Placa</label>
                                <input
                                    type='text'
                                    placeholder='Placa del auto'
                                    name='placa' F
                                    className='form-control'
                                    value={placa}
                                    onChange={(e) => setPlaca(e.target.value)}
                                    required
                                />
                                {placaError && <div style={{ color: 'red' }}>{placaError}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Color</label>
                                <input
                                    type='text'
                                    placeholder='Color del auto'
                                    name='color'
                                    className='form-control'
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    required
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Modelo</label>
                                <input
                                    type='text'
                                    placeholder='Modelo del auto'
                                    name='modelo'
                                    className='form-control'
                                    value={modelo}
                                    onChange={(e) => setModelo(e.target.value)}
                                    required
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Chasis</label>
                                <input
                                    type='text'
                                    placeholder='Digite chasis del auto'
                                    name='chasis'
                                    className='form-control'
                                    value={chasis}
                                    onChange={(e) => setChasis(e.target.value)}
                                    required
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Informacion adicional</label>
                                <input
                                    type='text'
                                    placeholder='Otra informacion referente al vehiculo'
                                    name='informacion'
                                    className='form-control'
                                    value={informacion}
                                    onChange={(e) => setInformacion(e.target.value)}
                                />
                            </div>

                            <div className="button-container">
                                <button className='btn btn-success' onClick={(e) => saveAuto(e)}>Guardar</button>
                                <Link to='/consultar-autos' className='btn btn-primary mb-2'> Consultar HoyNoCircula </Link>
                            </div>
                        </form>
                        {guardadoExitoso && (
                            <div className="alert alert-success" role="alert">
                                GUARDADO EXITOSO!!!
                            </div>
                        )}
                    </div>
                </div>
                <div className='row'></div>

            </div>

        </div>
    )

}

export default AddAutoComponent;