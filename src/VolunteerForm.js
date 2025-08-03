import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react';

function App() {
    // Step 1: Create state to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'Intern',
        motivation: ''
    });

    // Style variables 🔥
    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0 20px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '16px'
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold'
    };

    // Step 2: Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

  // Step 3: Handle form submission
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await addDoc(collection(db, 'registrations'), {
        ...formData,
        submittedAt: Timestamp.now()
        });
        alert("Form submitted and saved to Firebase!");
        setFormData({
        name: '',
        email: '',
        phone: '',
        role: 'Intern',
        motivation: ''
        });
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to submit. Please try again.");
    }
    };


    return (
    <div style={{
        maxWidth: '500px',
        margin: '40px auto',
        padding: '20px',
        background: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
    }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Volunteer Registration</h2>
        <form onSubmit={handleSubmit}>

        <label>Name</label>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
        />

        <label>Email</label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
        />

        <label>Phone</label>
        <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
        />

        <label>Role</label>
        <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={inputStyle}
        >
            <option value="Intern">Intern</option>
            <option value="Volunteer">Volunteer</option>
        </select>

        <label>Why do you want to join?</label>
        <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            rows="4"
            style={{ ...inputStyle, resize: 'none' }}
        ></textarea>

        <button type="submit" style={buttonStyle}>Submit</button>
        </form>
    </div>
    );
}

export default App;
