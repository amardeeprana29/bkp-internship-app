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

  // Step 2: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // For now, just log to console
    alert("Form submitted (data logged in console)");
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', fontFamily: 'sans-serif' }}>
      <h2>Volunteer/Intern Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="Intern">Intern</option>
          <option value="Volunteer">Volunteer</option>
        </select>

        <label>Why do you want to join?</label>
        <textarea name="motivation" value={formData.motivation} onChange={handleChange} rows="4" required />

        <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>Submit</button>
      </form>
    </div>
  );
}

export default App;
