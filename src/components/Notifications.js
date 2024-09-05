// src/components/Notifications.js
import React, { useState, useEffect } from 'react';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/notifications')
            .then(response => response.json())
            .then(data => setNotifications(data));
    }, []);

    return (
        <div>
            <h2>Notificaciones</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
