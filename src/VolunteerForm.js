    import { db } from './firebase';
    import { collection, addDoc, Timestamp } from 'firebase/firestore';
    import React, { useState } from 'react';
    import './VolunteerForm.css'; 

    function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'Intern',
        motivation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        await addDoc(collection(db, 'registrations'), {
            ...formData,
            submittedAt: Timestamp.now()
        });
        alert("Form submitted successfully!");
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
        <div className="form-container">
        <h2 className="form-title">Volunteer Registration</h2>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

            <label>Role</label>
            <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Intern">Intern</option>
            <option value="Volunteer">Volunteer</option>
            </select>

            <label>Why do you want to join?</label>
            <textarea name="motivation" value={formData.motivation} onChange={handleChange} rows="4" />

            <button type="submit">Submit</button>
        </form>
        </div>
    );
    }

    export default App;
