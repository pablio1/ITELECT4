import React, { Component } from 'react';
import BackG from './../../assets/bgfll.jpg';

class Home extends Component {
    render() {
        const containerStyle = {
            backgroundImage: `url(${BackG})`,
            backgroundSize: 'cover',
            padding: '20px',
            border: '2px solid #ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
        };

        const textContainerStyle = {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: '20px',
            borderRadius: '60px',
        };

        const enjoyWatchingStyle = {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: '15px', // Smaller padding for Enjoy Watching
            borderRadius: '60px',
            marginTop: '20px',
            fontFamily: 'Bubblegum Sans, sans-serif', // Bubble font
        };

        return (
            <div style={containerStyle}>
                <div style={textContainerStyle}>
                    <div className="lead mb-2 display-5 fw-bold text-body-emphasis text-center">
                        Welcome To Aspire
                    </div>
                </div>
                <div style={enjoyWatchingStyle}>
                    <div className="lead mb-2 display-6 text-body-emphasis text-center">
                        Enjoy Watching
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
