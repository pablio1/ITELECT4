import React, { Component } from 'react';
import MissionImpossible1 from './../../images/MissionImpossible1.jpg'
import MissionImpossible2 from './../../images/MissionImpossible2.jpg'
import MissionImpossible3 from './../../images/MissionImpossible3.jpg'
import MissionImpossible4 from './../../images/MissionImpossible4.jpg'
import MissionImpossible5 from './../../images/MissionImpossible5.jpg'
import MissionImpossible6 from './../../images/MissionImpossible6.jpg'
import MissionImpossible7 from './../../images/MissionImpossible7.jpg'
import MissionImpossible8 from './../../images/MissionImpossible8.jpg'

class Dashboard extends Component {
    render() {
        return (
            
            <div className="row">
                <div className="mb-4">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for a movie..." aria-label="Search for a movie..." />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Search</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={MissionImpossible1} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Mission Impossible 1</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={MissionImpossible2} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Mission Impossible 2</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={MissionImpossible3} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Mission Impossible 3</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={MissionImpossible4} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">MissionImpossible4</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={MissionImpossible5} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Harry Potter and the Order of the Phoenix</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={MissionImpossible6} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Harry Potter and the Half-Blood Prince</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={MissionImpossible7} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Mission Impossible 7(Part 1)</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={MissionImpossible8} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Mission Impossible 8(Part 2)</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
