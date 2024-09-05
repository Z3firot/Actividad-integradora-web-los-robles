import React, { useState, useEffect } from 'react';

const ErrorHandling = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/secure-data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => setError('Error al recuperar datos.'));
    }, []);

    return (
        <div>
            <h2>Datos Seguros</h2>
            {error && <p>{error}</p>}
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ErrorHandling;
