import React, { useState } from 'react';
import './paymentForm.css';

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        amount: '',
        concept: 'cuota',
        date: '',
        notes: '',
    });

    const [confirmation, setConfirmation] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Configurar el mensaje de confirmación
        const { amount, concept, date } = formData;
        setConfirmation(`Pago registrado: ${amount} para ${concept} el ${date}.`);
        
        // Aquí puedes manejar el envío del formulario, como enviarlo a un servidor
        console.log('Datos de pago enviados:', formData);
        
        // Resetea el formulario después de enviar
        setFormData({
            amount: '',
            concept: 'cuota',
            date: '',
            notes: '',
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Formulario de Pagos</h2>
                <div>
                    <label>
                        Monto:
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Concepto:
                        <select
                            name="concept"
                            value={formData.concept}
                            onChange={handleChange}
                            required
                        >
                            <option value="cuota">Cuota</option>
                            <option value="multas">Multas</option>
                            <option value="donaciones">Donaciones</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Fecha:
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Notas:
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Registrar Pago</button>
            </form>
            {confirmation && <div className="confirmation">{confirmation}</div>}
        </div>
    );
};

export default PaymentForm;
