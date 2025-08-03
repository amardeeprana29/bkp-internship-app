    import React, { useEffect, useState } from 'react';
    import { db } from './firebase';
    import {
    collection,
    getDocs,
    updateDoc,
    deleteDoc,
    doc
    } from 'firebase/firestore';
    import './AdminView.css'; // Keep your existing CSS or update if needed

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

    // Accept: Update status to "Accepted"
    const handleAccept = async (id) => {
        const docRef = doc(db, 'registrations', id);
        await updateDoc(docRef, { status: 'Accepted' });
        setApplicants(prev =>
        prev.map(app => (app.id === id ? { ...app, status: 'Accepted' } : app))
        );
    };

    // Delete: Remove applicant
    const handleDelete = async (id) => {
        const docRef = doc(db, 'registrations', id);
        await deleteDoc(docRef);
        setApplicants(prev => prev.filter(app => app.id !== id));
    };

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
                <th>Status</th>
                <th>Actions</th>
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
                    <td>
                    <span
                        style={{
                        padding: '4px 8px',
                        borderRadius: '6px',
                        backgroundColor:
                            app.status === 'Accepted' ? '#28a745' : '#ffc107',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '12px'
                        }}
                    >
                        {app.status || 'Pending'}
                    </span>
                    </td>
                    <td>
                    <button
                        onClick={() => handleAccept(app.id)}
                        disabled={app.status === 'Accepted'}
                        style={{
                        marginRight: '8px',
                        padding: '6px 10px',
                        fontSize: '12px',
                        cursor: app.status === 'Accepted' ? 'not-allowed' : 'pointer',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px'
                        }}
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => handleDelete(app.id)}
                        style={{
                        padding: '6px 10px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px'
                        }}
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
    }

    export default AdminView;
