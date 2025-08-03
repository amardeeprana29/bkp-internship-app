    import React from 'react';

    const HomePage = () => {
    // Inline styles for cleaner structure
    const containerStyle = {
        maxWidth: '900px',
        margin: '40px auto',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
    };

    const headingStyle = {
        fontSize: '28px',
        color: '#333',
        marginBottom: '10px'
    };

    const paragraphStyle = {
        fontSize: '16px',
        color: '#555',
        marginBottom: '30px'
    };

    const galleryStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
    };

    const imageStyle = {
        width: '100%',
        maxWidth: '400px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    return (
        <div style={containerStyle}>
        <h1 style={headingStyle}>Welcome to BKP Registration App</h1>
        <p style={paragraphStyle}>
            Empowering youth through education, support, and community engagement. Join us in making a difference through volunteering and internships.
        </p>

        <div style={galleryStyle}>
            <img src="/ngo1.jpg" alt="Volunteers helping" style={imageStyle} />
            <img src="/ngo2.jpg" alt="childrens" style={imageStyle} />
        </div>
        </div>
    );
    };

    export default HomePage;
