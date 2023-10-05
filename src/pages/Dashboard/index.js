import React, { Component } from 'react';
import Gangsta from './../../assets/gangsta.jpg'
import Ghoul from './../../assets/ghoul.jpg'
import Hitman from './../../assets/hitman.jpg'
import Hellsing from './../../assets/Hsing.jpg'
import Kurapika from './../../assets/kurapika.jpg'
import Monster from './../../assets/mons.jpg'
import Sololeveling from './../../assets/sl.jpg'
import Returnmaddemon from './../../assets/ReturnMadDemon.jpg'

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Gangsta} alt="Card cap" />
                            <div className="card-body">
                               <center><h5 className="card-title">The Way Of Husband</h5></center> 
                                
                                <center><a href="#" className="btn btn-primary">Read</a></center>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Ghoul} alt="Card cap" />
                            <div className="card-body">
                            <center><h5 className="card-title">Tokyo Ghoul</h5></center>
                                
                                <center><a href="#" className="btn btn-primary">Read</a></center>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Hellsing} alt="Card cap" />
                            <div className="card-body">
                            <center><h5 className="card-title">Hellsing</h5></center>
                                
                                <center><a href="#" className="btn btn-primary">Read</a></center>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Hitman} alt="Card cap" />
                            <div className="card-body">
                            <center><h5 className="card-title">Hitman Reborn</h5></center>
                                
                                <center><a href="#" className="btn btn-primary">Read</a></center>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Kurapika} alt="Card cap" />
                            <div className="card-body">
                            <center><h5 className="card-title">Hunter x Hunter</h5></center>
                                
                                <center><a href="#" className="btn btn-primary">Read</a></center>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Monster} alt="Card cap" />
                            <div className="card-body">
                            <center><h5 className="card-title">Monster</h5></center>
                                
                                <center><a href="#" className="btn btn-primary">Read</a></center>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Sololeveling} alt="Card cap" />
                            <div className="card-body">
                            <center><h5 className="card-title">Solo Leveling</h5></center>
                                
                                <center><a href="#" className="btn btn-primary">Read</a></center>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Returnmaddemon} alt="Card cap" />
                            <div className="card-body">
                                <center><h5 className="card-title">Return Of The Mad Demon</h5></center>
                                
                                <center><a href="#" className="btn btn-primary">Read</a></center>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Dashboard;