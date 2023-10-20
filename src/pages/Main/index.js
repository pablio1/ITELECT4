import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home';

class Main extends Component {
    state = { activePage: ''}
    componentDidMount = () => {
        this.setState({
            activePage: 'home'
        })
    }

    handleClickSidebar = (page) => {
        this.setState({
            activePage: page
        })
    }
    
    render() {
        return (
            <div class="row">
                <div class="p-3 text-bg-dark">
                <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <span class="fs-4">Movie Magic Hub</span>

                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                </a>
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search"  class="form-control form-control-dark text-bg-white" placeholder="Search..." aria-label="Search"/>
                        </form>
                        <div class="text-end">
                        <button type="button" class="btn btn-outline-light me-2">Login</button>
                        <button type="button" class="btn btn-warning">Sign-up</button>
                        </div>
                </div>
                </div>
                </div>
                <div class="col-3 text-white bg-dark" style= {{height: '100'}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
          <Link to="/home" onClick={() => this.handleClickSidebar('home')}>
              <div class={this.state.activePage === 'home' ? "nav-link active": "nav-link"} aria-current="page">
                  Home
              </div>
          </Link> 
      </li>
      <li>
          <Link to="/top" onClick={() => this.handleClickSidebar('top')}>
              <div class={this.state.activePage === 'top' ? "nav-link active" : "nav-link"} aria-current="page">
                  Top IMDB
              </div>
          </Link> 
      </li>
      <li>
          <Link to="/movies" onClick={() => this.handleClickSidebar('movies')}>
              <div class={this.state.activePage === 'movies' ? "nav-link active" : "nav-link"} aria-current="page">
                  Movies
              </div>
          </Link>
      </li>
      <li>
          <Link to="/tv" onClick={() => this.handleClickSidebar('tv')}>
              <div class={this.state.activePage === 'tv' ? "nav-link active" : "nav-link"} aria-current="page">
                  TV Shows
              </div>
          </Link>
      </li>
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <strong>Genre</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" >
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Comedy</a></li>
        <li><a class="dropdown-item" href="#">Drama</a></li>
        <li><a class="dropdown-item" href="#">Horror</a></li>
        <li><a class="dropdown-item" href="#">Romance</a></li>
        <li><a class="dropdown-item" href="#">Sci-Fi</a></li>

      </ul>
      <hr class="divider"/>
    </div>
    <div class="dropdown">
    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <strong>Country</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" >
        <li><a class="dropdown-item" href="#">Australia</a></li>
        <li><a class="dropdown-item" href="#">Brazil</a></li>
        <li><a class="dropdown-item" href="#">China</a></li>
        <li><a class="dropdown-item" href="#">France</a></li>
        <li><a class="dropdown-item" href="#">Philippines</a></li>
        <li><a class="dropdown-item" href="#">USA</a></li>
      </ul>
      <hr class="divider"/>
    </div>
    </div>
    <div class="col-9">
            <Switch>
                <Route path="/home" component={Home} />
            </Switch>
    
    </div>
    </div>
        );
    }
}

export default Main;