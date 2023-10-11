import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div >
                <div class="container-fluid">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                        <div class="col-md-3 mb-2 mb-md-0">
                            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        
                            </a>
                        </div>

                        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/"><div class="nav-link px-2 link-secondary">Home</div></Link></li>
                            <li><Link to="/"><div class="nav-link px-2 link-secondary">Genre</div></Link></li>
                            <li><Link to="/"><div class="nav-link px-2 link-secondary">Country</div></Link></li>
                            <li><Link to="/"><div class="nav-link px-2 link-secondary">A-Z List</div></Link></li>
                            <li><Link to="/"><div class="nav-link px-2 link-secondary">Search</div></Link></li>
                        </ul>

                        <div class="col-md-3 text-end">
                            <button type="button" class="btn btn-outline-primary me-2">Login</button>
                            <button type="button" class="btn btn-primary">Sign-up</button>
                        </div>
                        
                    </div>
                </div>
                <div class="container-fluid">
                    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                        </div>
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                                <div class="container">
                                    <div class="carousel-caption">
                                        <h1>Movie Title</h1>
                                        <p>Movie description</p>
                                        <p><a class="btn btn-lg btn-primary" href="#">Watch Trailer</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item active">
                                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                                <div class="container">
                                    <div class="carousel-caption">
                                        <h1>Movie Title</h1>
                                        <p>Movie description</p>
                                        <p><a class="btn btn-lg btn-primary" href="#">Watch Trailer</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item active">
                                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                                <div class="container">
                                    <div class="carousel-caption">
                                        <h1>Movie Title</h1>
                                        <p>Movie description</p>
                                        <p><a class="btn btn-lg btn-primary" href="#">Watch Trailer</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Main;