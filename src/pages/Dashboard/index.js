import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <img
              src="/images/gojo.jpg"
              alt="Logo"
              style={{ width: '32px', height: '32px', marginRight: '10px' }}
            />
                Welcome User!
            </div>
        );
    }
}

export default Dashboard;