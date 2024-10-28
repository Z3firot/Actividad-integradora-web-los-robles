import React, { useState } from 'react';

const ResidentesYMesaDirectiva = () => {
    const residentes = [
        {
            nombre: 'Juan Pérez',
            unidad: '101',
            telefono: '555-1234',
            correo: 'juan.perez@example.com',
        },
        {
            nombre: 'María Gómez',
            unidad: '202',
            telefono: '555-5678',
            correo: 'maria.gomez@example.com',
        },
        {
            nombre: 'Carlos López',
            unidad: '303',
            telefono: '555-8765',
            correo: 'carlos.lopez@example.com',
        },
        // Añadir más residentes según sea necesario
    ];

    const mesaDirectiva = [
        {
            nombre: 'Ana Martínez',
            cargo: 'Presidenta',
            telefono: '555-1111',
            correo: 'ana.martinez@example.com',
        },
        {
            nombre: 'Roberto Díaz',
            cargo: 'Vicepresidente',
            telefono: '555-2222',
            correo: 'roberto.diaz@example.com',
        },
        {
            nombre: 'Laura Torres',
            cargo: 'Secretaria',
            telefono: '555-3333',
            correo: 'laura.torres@example.com',
        },
        {
            nombre: 'Felipe Ramírez',
            cargo: 'Tesorero',
            telefono: '555-4444',
            correo: 'felipe.ramirez@example.com',
        },
        // Añadir más miembros según sea necesario
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2; // Cambiar según la cantidad de elementos por página

    // Lógica para paginación
    const indexOfLastResident = currentPage * itemsPerPage;
    const indexOfFirstResident = indexOfLastResident - itemsPerPage;
    const currentResidents = residentes.slice(indexOfFirstResident, indexOfLastResident);

    const totalPages = Math.ceil(residentes.length / itemsPerPage);

    return (
        <div>
            <h2>Residentes</h2>
            <ul>
                {currentResidents.map((residente, index) => (
                    <li key={index}>
                        <strong>Nombre:</strong> {residente.nombre} <br />
                        <strong>Número de Unidad:</strong> {residente.unidad} <br />
                        <strong>Teléfono:</strong> {residente.telefono} <br />
                        <strong>Correo Electrónico:</strong> {residente.correo}
                    </li>
                ))}
            </ul>

            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        style={{ margin: '0 5px', padding: '5px 10px' }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <h2>Mesa Directiva</h2>
            <ul>
                {mesaDirectiva.map((miembro, index) => (
                    <li key={index}>
                        <strong>Nombre:</strong> {miembro.nombre} <br />
                        <strong>Cargo:</strong> {miembro.cargo} <br />
                        <strong>Teléfono:</strong> {miembro.telefono} <br />
                        <strong>Correo Electrónico:</strong> {miembro.correo}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResidentesYMesaDirectiva;
