import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensajeExito, setMensajeExito] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Datos a enviar:', { nombre, correoElectronico, contrasena });

    try {
      const response = await axios.post('http://localhost:8080/api/usuarios', {
        nombre,
        correoElectronico,
        contrasena,
      });

      console.log('Respuesta del servidor:', response.data); // Mostrar el usuario creado en la consola
      setMensajeExito(`Registro exitoso. Bienvenido, ${response.data.nombre}!`);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      background: 'linear-gradient(135deg, #71b7e6, #9b59b6)'
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '40px', 
        borderRadius: '10px', 
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        width: '300px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Registro</h2>
        {mensajeExito && <div style={{ 
          color: 'green', 
          marginBottom: '20px', 
          fontWeight: 'bold' 
        }}>{mensajeExito}</div>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="nombre" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '5px', 
                border: '1px solid #ccc',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="correoElectronico" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Correo Electrónico:</label>
            <input
              type="email"
              id="correoElectronico"
              value={correoElectronico}
              onChange={(e) => setCorreoElectronico(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '5px', 
                border: '1px solid #ccc',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="contrasena" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '5px', 
                border: '1px solid #ccc',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <button type="submit" style={{ 
            width: '100%', 
            padding: '10px', 
            borderRadius: '5px', 
            border: 'none', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'} onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}>
            Registrarse
          </button>
        </form>
        <button onClick={handleLoginRedirect} style={{ 
          width: '100%', 
          padding: '10px', 
          borderRadius: '5px', 
          border: 'none', 
          backgroundColor: '#f44336', 
          color: 'white', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          marginTop: '10px',
          transition: 'background-color 0.3s'
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#d32f2f'} onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Registro;