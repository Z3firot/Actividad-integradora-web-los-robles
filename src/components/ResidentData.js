// src/components/ResidentData.js
import React, { useState, useEffect } from 'react';

const ResidentData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/residentNeeds') // Cambia la URL si usas una base de datos diferente
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h2>Necesidades de los Residentes</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.need}</li>
                ))}
            </ul>
        </div>
    );
}

export default ResidentData;
