import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


class Main extends Component {
    render() {
        return (
            
      <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width:'180px', height:'100vh'}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <Link to="dashboard">

        <div class="nav-link active" aria-current="page">
          Home
        </div>
        </Link>
      </li>
      
      <li>
        <Link to="dashboard">

         <div class="nav-link text-white">
          Dashboard
        </div>
        </Link>

      </li>
      <li>
        <Link to="">
        <div class="nav-link text-white">
          Orders
        </div>
        </Link>

      </li>
      <li>
        <a href="#" class="nav-link text-white">
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><a class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>

       
        );
        
    }
}
export default Main;