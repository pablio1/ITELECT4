import React, { Component } from 'react';
import HarryPotter1 from './../../images/harrypotter1.jpg'
import HarryPotter2 from './../../images/harrypotter2.jpg'
import HarryPotter3 from './../../images/harrypotter3.jpg'
import HarryPotter4 from './../../images/harrypotter4.jpg'
import HarryPotter5 from './../../images/harrypotter5.jpg'
import HarryPotter6 from './../../images/harrypotter6.jpg'
import HarryPotter7 from './../../images/harrypotter7.jpg'
import HarryPotter8 from './../../images/harrypotter8.jpg'

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
                        <img className="card-img-top" src={HarryPotter1} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Harry Potter and the Philosopher's Stone</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={HarryPotter2} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Harry Potter and the Chamber of Secrets</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={HarryPotter3} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Harry Potter and the Prisoner of Azkaban</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={HarryPotter4} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Harry Potter and the Goblet of Fire</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={HarryPotter5} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Harry Potter and the Order of the Phoenix</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={HarryPotter6} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Harry Potter and the Half-Blood Prince</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={HarryPotter7} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Harry Potter and the Deathly Hallows (Part 1)</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={HarryPotter8} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Harry Potter and the Deathly Hallows (Part 2)</h5></center> 
                            <center><a href="#" className="btn btn-primary">Watch</a></center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;