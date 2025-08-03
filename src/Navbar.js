// src/Navbar.js
import React from 'react';

function Navbar({ setPage }) {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <button onClick={() => setPage('home')} style={navButtonStyle}>Home</button>
      <button onClick={() => setPage('form')} style={navButtonStyle}>Volunteer Form</button>
      <button onClick={() => setPage('admin')} style={navButtonStyle}>Admin View</button>
    </nav>
  );
}

const navButtonStyle = {
  backgroundColor: '#fff',
  color: '#333',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default Navbar;
