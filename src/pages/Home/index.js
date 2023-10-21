import React, { Component } from 'react';
import BackG from './../../assets/bgfll.jpg';

class Home extends Component {
    render() {
        const containerStyle = {
            backgroundImage: `url(${BackG})`, // Use the imported image as the background
            backgroundSize: 'cover',
            padding: '20px',
            border: '2px solid #ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column', // Center content vertically
        };

        const textContainerStyle = {
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add a semi-transparent white background
            padding: '20px', // Add padding to the text container
            borderRadius: '60px', // Add rounded corners
        };

        return (
            <div style={containerStyle}>
                <div style={textContainerStyle}>
                    <div className="lead mb-4 display-5 fw-bold text-body-emphasis text-center">
                        Welcome To Aspire Scan
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
