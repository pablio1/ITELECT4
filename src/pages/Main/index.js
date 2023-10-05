import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Movies from '../Movies';
import Home from '../Home';
import Examplemovie from '../Examplemovie';
class Main extends Component {
    state = {activePage: ''}
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
               <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style = {{width:"280px", height:"100vh"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">        
        <Link to="/home" onClick={() => this.handleClickSidebar('home')}>
        <div class={this.state.activePage === 'home' ? "nav-link active" : "nav-link"} aria-current="page">
        Home
        </div> 
        </Link>                    
      </li>
      <li>
      <Link to="/dashboard" onClick={() => this.handleClickSidebar('dashboard')}>
        <div class={this.state.activePage === 'dashboard' ? "nav-link active" : "nav-link"}>
        Dashboard
        </div>       
        </Link>
      </li>
      <li>
      <Link to="/orders">
        <div href="#" class= "nav-link text-white">
        Orders
        </div>        
        </Link>
      </li>
      <li>
      <Link to="/movies" onClick={() => this.handleClickSidebar('movies')}>
        <div class={this.state.activePage === 'movies' ? "nav-link active" : "nav-link"}>
        Movies
        </div>       
        </Link>      
      </li>  
      <li>
      <Link to="/examplemovie" onClick={() => this.handleClickSidebar('examplemovie')}>
        <div class={this.state.activePage === 'examplemovie' ? "nav-link active" : "nav-link"}>
        Examplemovie
        </div>       
        </Link>      
      </li>     
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        
        <strong>mdo</strong><img src="https://orangemagazine.ph/wp-content/uploads/2017/02/Mill-Muertes.jpg" alt="" width="32" height="32" class="rounded-circle me-2"/>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div> 
  <div class="col-9">
    <Switch>
      <Route path="/dashboard" component ={Dashboard} />
      <Route path="/movies" component ={Movies} />
      <Route path="/examplemovie" component ={Examplemovie} />
      <Route path="/home" component ={Home} />
    </Switch>
  </div>
            </div>
        );
    }
}

export default Main;