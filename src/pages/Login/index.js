import React, { Component } from 'react';
import './logincss.css';
import sao from './sao.jpg';
import vagabond from './vagabond.jpg';
import vinland from './vinlandsaga.jpg';

class Login extends Component {
    render() {
        const cardStyle = { width: '18rem' };
        const imageStyle = { maxWidth: '100%', maxHeight: '200px' };
        const roundedImage = 'rounded';
        const shadowEffect = 'shadow';
        return (
            <div className="container">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="form">
                            <i className="fa fa-search"></i>
                            <input type="text" className="form-control form-input" placeholder="Search anything..." />
                            <span className="left-pan"><i className="fa fa-microphone"></i></span>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className={`card ${roundedImage} ${shadowEffect}`} style={cardStyle}>
                                    <img className={`card-img-top ${roundedImage}`} src={sao} alt="Card cap" style={imageStyle} />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Sword Art Online</h5>
                                        <a href="#" className="btn btn-primary">Read</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className={`card ${roundedImage} ${shadowEffect}`} style={cardStyle}>
                                    <img className={`card-img-top ${roundedImage}`} src={vagabond} alt="Card cap" style={imageStyle} />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Vagabond</h5>
                                        <a href="#" className="btn btn-primary">Read</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className={`card ${roundedImage} ${shadowEffect}`} style={cardStyle}>
                                    <img className={`card-img-top ${roundedImage}`} src={vinland} alt="Card cap" style={imageStyle} />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Vinland Saga</h5>
                                        <a href="#" className="btn btn-primary">Read</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
