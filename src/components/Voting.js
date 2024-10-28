import React, { useState, useEffect } from 'react';

const Notification = ({ message }) => {
    return (
        <div className="notification">{message}</div>
    );
};

const VotingPanel = ({ addNotification }) => {  // Recibir addNotification como prop
    const [votingHistory, setVotingHistory] = useState([]);
    const [newTopic, setNewTopic] = useState(''); // Estado para el nuevo tema
    const [startDate, setStartDate] = useState(''); // Estado para la fecha de inicio
    const [endDate, setEndDate] = useState(''); // Estado para la fecha de cierre

    const publishVotingTopic = (topic, start, end) => {
        setVotingHistory(prevHistory => [
            ...prevHistory,
            { topic, start, end }
        ]);
        // Usar la función addNotification de props
        addNotification(`Nuevo tema de votación: "${topic}"\nInicio: ${start}\nCierre: ${end}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTopic && startDate && endDate) {
            publishVotingTopic(newTopic, startDate, endDate);
            // Resetea los campos después de enviar
            setNewTopic('');
            setStartDate('');
            setEndDate('');
        }
    };

    // Ejemplo de publicación automática al cargar el componente
    useEffect(() => {
        const topic = "Tema de Ejemplo";
        const start = new Date().toLocaleDateString(); // Solo fecha
        const end = new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString(); // Cierre en 24 horas
        
        publishVotingTopic(topic, start, end);
    }, []);

    return (
        <div>
            <h2>Panel de Votaciones</h2>
            <h3>Historial de Publicaciones</h3>
            <ul>
                {votingHistory.map((item, index) => (
                    <li key={index}>
                        <strong>{item.topic}</strong>: Inicio: {item.start}, Cierre: {item.end}
                    </li>
                ))}
            </ul>

            <h3>Añadir nuevo tema</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Tema:
                        <input
                            type="text"
                            value={newTopic}
                            onChange={(e) => setNewTopic(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Fecha de Inicio:
                        <input
                            type="date"  // Cambiado a tipo date
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Fecha de Cierre:
                        <input
                            type="date"  // Cambiado a tipo date
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Publicar Tema</button>
            </form>
        </div>
    );
};

export default VotingPanel;
