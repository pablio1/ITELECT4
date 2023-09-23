import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <h1 className="mt-5">Welcome to My Home</h1>
                <p className="lead">This is a simple home page using Bootstrap.</p>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <h2>Features</h2>
                        <ul>
                            <li>Responsive design</li>
                            <li>Bootstrap styling</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h2>Contact Us</h2>
                        <p>If you have any questions, feel free to reach out!</p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;