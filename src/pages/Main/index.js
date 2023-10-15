import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import Home from '../Nav/Home';
import Genre from '../Nav/Genre';
import Country from '../Nav/Country';
import AZList from '../Nav/AZList';
import './custom.styl';


class Main extends Component {
    render() {
        return (
            <div >
                <div class="p-3 text-bg-dark">
                    <div class="container">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <div class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <Link to="/"></Link>
                            </div>

                            <h1 class="trajan-pro" style={{color: 'red'}}>CineHub &nbsp;&nbsp;</h1>
                    
                            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li><Link to="/home" className="nav-link px-2 link-secondary">Home</Link></li>
                                <li><Link to="/genre" className="nav-link px-2 link-secondary">Genre</Link></li>
                                <li><Link to="/country" className="nav-link px-2 link-secondary">Country</Link></li>
                                <li><Link to="/list" className="nav-link px-2 link-secondary">A-Z List</Link></li>
                            </ul>
                    
                            <h6>Search </h6>
                            <h5>&nbsp;</h5>
                            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
                            </form>
                    
                            <div class="text-end">
                            <button type="button" class="btn btn-outline-light me-2" style={{ background: 'red', border: 'white', color: 'white'}}>Sign-up</button>
                            <button type="button" class="btn btn-warning" style={{ background: 'black', border: 'white', color: 'white'}}>Login</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/genre" component={Genre} />
                    <Route path="/country" component={Country} />
                    <Route path="/list" component={AZList} />
                </Switch>
            </div>

        );
    }
}

export default Main;