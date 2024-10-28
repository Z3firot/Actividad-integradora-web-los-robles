import React, { useState } from 'react';
import './App.css';
import ResidentData from './components/ResidentData';
import PaymentForm from './components/PaymentForm';
import Notifications from './components/Notifications';
import Voting from './components/Voting';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import losRoblesLogo from './los_robles_logo.gif';

function App() {
  const [notifications, setNotifications] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para añadir notificaciones
  const addNotification = (message) => {
    setNotifications(prevNotifications => [
      ...prevNotifications,
      message
    ]);
  };

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bienvenido a Residencial Los Robles</h1>
          <span className="menu-icon" onClick={toggleMenu}>&#9776;</span>
          <nav>
            <ul className={isMenuOpen ? 'show-menu' : ''}>
              <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
              <li><Link to="/resident-data" onClick={toggleMenu}>Datos de Residentes</Link></li>
              <li><Link to="/payment-form" onClick={toggleMenu}>Formulario de Pago</Link></li>
              <li><Link to="/notifications" onClick={toggleMenu}>Notificaciones</Link></li>
              <li><Link to="/voting" onClick={toggleMenu}>Votaciones</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
                <img src={losRoblesLogo} alt="Logo de Los Robles" style={{ maxWidth: '80%', maxHeight: '80%', marginBottom: '20px' }} />
                <h2>Bienvenido al portal de Los Robles</h2>
              </div>
            } />
            <Route path="/resident-data" element={<ResidentData />} />
            <Route path="/payment-form" element={<PaymentForm />} />
            <Route path="/notifications" element={<Notifications notifications={notifications} />} />
            <Route path="/voting" element={<Voting addNotification={addNotification} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
