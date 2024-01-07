import React, { useState, navigate } from 'react'
import AutoService from '../services/AutoService';
import { Link } from 'react-router-dom';

export const AddAutoComponent = () => {
    const [modelo, setModelo] = useState('');
    const [color, setColor] = useState('');
    const [placa, setPlaca] = useState('');
    const [chasis, setChasis] = useState('');
    const [informacion, setInformacion] = useState('');

    const saveAuto = (e) => {
        e.preventDefault();
        if (!modelo || !color || !placa || !chasis) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }
        const auto = { modelo, color, placa, chasis, informacion }
        AutoService.createAuto(auto).then((response) => {
            console.log(response.data);
            navigate('/autos')
            
        })
        .catch((error) => {

            if (error.response && error.response.status === 400) {
                
                alert(error.response.data);
            } else {
               
                alert('GUARDADO CON EXITO!!!');
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
                                <label className='form-label'>Placa</label>
                                <input
                                    type='text'
                                    placeholder='Placa del auto'
                                    name='placa'
                                    className='form-control'
                                    value={placa}
                                    onChange={(e) => setPlaca(e.target.value)}
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
                    </div>
                </div>
                <div className='row'></div>

            </div>

        </div>
    )

}

export default AddAutoComponent;