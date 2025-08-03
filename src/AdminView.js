// src/AdminView.js
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function AdminView() {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, 'registrations'));
        const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setApplicants(data);
        };

        fetchData();
    }, []);

    return (
    <div style={{
        maxWidth: '1000px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#fefefe',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
    }}>
        <h2 style={{ textAlign: 'center', color: '#444' }}>Admin Panel – Submitted Applicants</h2>

        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px'
        }}>
        <thead>
            <tr style={{ backgroundColor: '#007bff', color: '#fff' }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}>Motivation</th>
            </tr>
        </thead>
        <tbody>
            {applicants.map(app => (
            <tr key={app.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td style={tdStyle}>{app.name}</td>
                <td style={tdStyle}>{app.email}</td>
                <td style={tdStyle}>{app.phone}</td>
                <td style={tdStyle}>{app.role}</td>
                <td style={tdStyle}>{app.motivation}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
    }

    // Styling vars
    const thStyle = {
    padding: '12px',
    textAlign: 'left'
    };

    const tdStyle = {
    padding: '12px',
    verticalAlign: 'top',
    color: '#333'
    };


export default AdminView;
