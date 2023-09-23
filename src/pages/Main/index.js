import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Orders from '../Orders';
import Products from '../Products';
import Customers from '../Customers';

class Main extends Component {
    render() {
        return (
            <div class = "row">
                <div class="col-3 text-white bg-dark" style={{height: '100vh'}}>
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-4">Sidebar</span>
                    </a>
                    <hr/>
                    <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                    <Link to = "/home">
                        <div href="#" class="nav-link active" aria-current="page">
                        Home
                        </div>
                     </Link>
                    </li>
                    <li>
                    <Link to = "/dashboard">
                        <div href="#" class="nav-link text-white">
                        Dashboard 
                        </div>
                    </Link>
                    </li>
                    <li>
                    <Link to = "/orders">
                        <div href="#" class="nav-link text-white">
                        Orders
                        </div>
                    </Link>
                    </li>
                    <li>
                    <Link to = "/products">
                        <div href="#" class="nav-link text-white">
                        Products
                        </div>
                    </Link>
                    </li>
                    <li>
                    <Link to = "/customers">
                        <div href="#" class="nav-link text-white">
                        Customers
                        </div>
                    </Link>
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
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                    </div>
                </div>
                <div class = "col-9">
                    <Switch>
                      <Route path = "/dashboard" Component = {Dashboard}/>
                      <Route path = "/orders" Component = {Orders}/>
                      <Route path = "/products" Component = {Products}/>
                      <Route path = "/customers" Component = {Customers}/>


                    </Switch>
                
                

                </div>
            </div>
        );
    }
}

export default Main;