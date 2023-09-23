import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Orders from '../Orders/Orders';
import Products from '../Products/Products';
import Customers from '../Customers/Customers';

class Main extends Component {
    state = { activePage: ''}
    componentDidMount = () => {
        this.setState({
            activePage: 'dashboard'
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
                <div class="col-3 text-white bg-dark" style= {{height: '100vh'}}>
                    <div class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-4">Sidebar</span>
                    </div>
                    <hr/>
                    <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <Link to="/home" onClick={() =>this.handleClickSidebar('home')}>
                        <div class={this.state.activePage === 'home' ? "nav-link active" : "nav-link"} aria-current="page">
                             Home
                        </div>
                        </Link>
                    </li>
                    <li>
                    <Link to="/dashboard" onClick={() =>this.handleClickSidebar('dashboard')}>
                        <div class={this.state.activePage === 'dashboard' ? "nav-link active" : "nav-link"} aria-current="page">
                    
                        Dashboard
                        </div>
                    </Link>
                    </li>
                    <li>
                        <Link to="/orders">
                        <div class="nav-link text-white">
                        
                        Orders
                        </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                        <div class="nav-link text-white">
                        
                        Products
                        </div>
                        </Link>
                    </li>
                    <li>
                    <Link to="/customers">
                        <div class="nav-link text-white">
                        
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
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                    </div>
                </div>
                <div class="col-9">
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/products" component={Products} />
                        <Route path="/customers" component={Customers} />
                    </Switch>
                </div>
                            </div>
                );
            }
        }

        export default Main;