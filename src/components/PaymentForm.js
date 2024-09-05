// src/components/PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = () => {
    const [amount, setAmount] = useState('');

    const handlePayment = () => {
        fetch('/api/payments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount })
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    return (
        <div>
            <h2>Realizar un Pago</h2>
            <input
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                placeholder="Ingrese el monto"
            />
            <button onClick={handlePayment}>Pagar Ahora</button>
        </div>
    );
}

export default PaymentForm;
