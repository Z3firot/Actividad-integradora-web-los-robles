// src/App.js
import React from 'react';
import './App.css';
import ResidentData from './components/ResidentData';
import PaymentForm from './components/PaymentForm';
import ErrorHandling from './components/ErrorHandling';
import Notifications from './components/Notifications';
import Voting from './components/Voting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a Residencial Los Robles</h1>
        <nav>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#gallery">Galería</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
