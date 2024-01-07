import React, { useState} from 'react';
import AutoService from '../services/AutoService';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const NoCirculaComponent = () => {
    const [placa, setPlaca] = useState('');
    const [fechaHora, setFecha] = useState('');
    const [auto, setAuto] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [validacionRespuesta, setValidacionRespuesta] = useState(null);

    const saveAuto = (e) => {
        e.preventDefault();
        AutoService.getAutoByPlaca(placa)
            .then((response) => {
                setAuto(response.data);
                validateCirculation();
                openModal();
            })
            .catch((error) => {
                console.log(error);
                if (error.response && error.response.status === 404) {
                    setAuto(null);
                    openModal();
                }
            });
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const validateCirculation = () => {
        // Realiza una segunda solicitud para validar la circulación
        const circulacionData = { placa, fechaHora };
        AutoService.validarCirculacion(circulacionData)
            .then((response) => {
                console.log(response.data);
                setValidacionRespuesta(response.data);
            })
            .catch((error) => {
                console.log(error);
                setValidacionRespuesta("Error al validar la circulación.");
            });
    };

    return (
        <div>
            <div className='container'>
                <div className='row'></div>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center '>Consulta HoyNoCircula</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Placa</label>
                                <input
                                    type='text'
                                    placeholder='Placa del auto'
                                    name='placa'
                                    className='form-control'
                                    value={placa}
                                    onChange={(e) => setPlaca(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Fecha y hora</label>
                                <input
                                    type='datetime-local'
                                    placeholder='Fecha y hora'
                                    name='fechaHora'
                                    className='form-control'
                                    value={fechaHora}
                                    onChange={(e) => setFecha(e.target.value)}
                                />
                            </div>

                            <div className='button-container2'>
                                <button className='btn btn-success' onClick={(e) => saveAuto(e)}>
                                    Consultar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row'></div>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Información del Auto">
                <h2>Información del Auto</h2>
                {auto ? (
                    <div className='modal-body'>

                        <p>Modelo: {auto.modelo}</p>
                        <p>Color: {auto.color}</p>
                        <p>Placa: {auto.placa}</p>
                        <p>Chasis: {auto.chasis}</p>
                        <p>Información Adicional: {auto.informacion}</p>
                    </div>
                    
                ) : (
                    <div>
                        <p>No se encontró ningún auto con la placa ingresada.</p>
                    </div>
                )}
                {auto && validacionRespuesta && (
                    <div>
                        <h3>Resultado de la validación:</h3>
                        <p>{validacionRespuesta}</p>
                    </div>
                )}
                
                <button onClick={closeModal} className='btn btn-primary mb-2'>Cerrar</button>
            </Modal>
        </div>
    );
};

export default NoCirculaComponent;