// src/components/Voting.js
import React, { useState } from 'react';

const Voting = () => {
    const [vote, setVote] = useState('');
    const [message, setMessage] = useState('');

    const handleVote = () => {
        fetch('http://localhost:5000/api/vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ vote })
        })
        .then(response => response.json())
        .then(data => setMessage('Voto registrado con éxito.'))
        .catch(error => setMessage('Error en el registro del voto.'));
    }

    return (
        <div>
            <h2>Votaciones</h2>
            <input
                type="text"
                value={vote}
                onChange={e => setVote(e.target.value)}
                placeholder="Ingrese su voto"
            />
            <button onClick={handleVote}>Votar</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Voting;
