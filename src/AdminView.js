// src/AdminView.js
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import './AdminView.css';  

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
        <div className="admin-container">
        <h2 className="admin-heading">Admin Panel – Submitted Applicants</h2>

        <div className="table-wrapper">
            <table className="admin-table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Motivation</th>
                </tr>
            </thead>
            <tbody>
                {applicants.map(app => (
                <tr key={app.id}>
                    <td>{app.name}</td>
                    <td>{app.email}</td>
                    <td>{app.phone}</td>
                    <td>{app.role}</td>
                    <td>{app.motivation}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
    }

export default AdminView;
