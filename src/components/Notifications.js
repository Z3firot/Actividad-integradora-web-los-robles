import React, { useState, useEffect } from 'react';

const Notification = ({ message }) => {
    return (
        <div className="notification">{message}</div>
    );
};

const VotingPanel = () => {
    const [notifications, setNotifications] = useState([]);
    const [votingTopic, setVotingTopic] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const addNotification = (message) => {
        setNotifications(prevNotifications => [
            ...prevNotifications,
            message
        ]);
    };

    const publishVotingTopic = (topic, start, end) => {
        setVotingTopic(topic);
        setStartDate(start);
        setEndDate(end);
        
        // Agregar notificación con las fechas
        addNotification(`Nuevo tema de votación: "${topic}"\nInicio: ${start}\nCierre: ${end}`);
    };

    // Ejemplo de publicación automática al cargar el componente
    useEffect(() => {
        const topic = "Tema de Ejemplo";
        const start = new Date().toLocaleString(); // Fecha y hora actual
        const end = new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString(); // Cierre en 24 horas
        
        publishVotingTopic(topic, start, end);
    }, []); // Ejecutar solo al montar el componente

    return (
        <div>
            <h2>Panel de Votaciones</h2>
            <div>
                {notifications.map((note, index) => (
                    <Notification key={index} message={note} />
                ))}
            </div>
        </div>
    );
};

export default VotingPanel;
