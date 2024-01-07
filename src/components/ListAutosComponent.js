import React, { useEffect, useState } from 'react'
import AutoService from '../services/AutoService';
import { Link } from 'react-router-dom';

export const ListAutosComponent = () => {
    const [autos, setAutos] = useState([]);

    useEffect(() => {
        AutoService.getAllAutos().then(response => {
            setAutos(response.data);
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center'> Lista de autos </h2>
            <Link to= '/add-auto' className='btn btn-primary mb-2'> Agregar auto </Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>ID</th>
                    <th>Modelo</th>
                    <th>Color</th>
                    <th>Placa</th>
                    <th>Chasis</th>
                    <th>Informacion adicional</th>
                </thead>
                <tbody>
                    {
                        autos.map(
                            auto =>
                                <tr key={auto.id}>
                                    <td>{auto.id}</td>
                                    <td>{auto.modelo}</td>
                                    <td>{auto.color}</td>
                                    <td>{auto.placa}</td>
                                    <td>{auto.chasis}</td>
                                    <td>{auto.informacion}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}

export default ListAutosComponent;