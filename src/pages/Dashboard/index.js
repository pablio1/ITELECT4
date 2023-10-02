import React, { Component } from 'react';
import Ryo from './../../assets/ryo.jpg'
import Bocchi from './../../assets/bocchi.jpg'
import Kita from './../../assets/kita.jpg'
import Nijika from './../../assets/nijika.jpg'
import Lain from './../../assets/lain.jpg'
import Eiko from './../../assets/eiko.png'

class Dashboard extends Component {
    render() {
        return (
            <div class="m-3">
                {/* Search Bar */}
                <div>
                    <div class="d-flex flex-row">
                        <div class="col">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        </div>
                    <div class="col">
                        <button type="button" class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                            Search
                        </button>
                    </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="row mt-3">
                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Ryo} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Ryo Yamada</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Bocchi} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Hitori Gotoh</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Kita} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Ikuyo Kita</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Nijika} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Nijika Ijichi</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Lain} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Iwakura Lain</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Eiko} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Tsukimi Eiko</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read</a>
                            </div>
                        </div>
                    </div>



                </div>
                

            </div>
            

            

        );
    }
}

export default Dashboard;