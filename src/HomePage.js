// src/HomePage.js
import React from 'react';

function HomePage() {
    return (
        <div style={containerStyle}>
        <h1 style={headingStyle}>Welcome to BKP Internship Portal</h1>
        <p style={paragraphStyle}>
            This platform is built to manage Intern and Volunteer applications for Basti Ki Pathshala Foundation.
        </p>
        <p style={paragraphStyle}>
            Click the navigation links above to register or view the list of applicants.
        </p>
        </div>
    );
    }

    const containerStyle = {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '30px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
    color: '#333'
    };

    const headingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#007bff'
    };

    const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '15px'
    };

export default HomePage;
