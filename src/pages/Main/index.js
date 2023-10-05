import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"; // 1. Import BrowserRouter
import Dashboard from './../Dashboard'
import Orders from './../Orders'
import Products from './../Products';
import Customers from './../Customers';

class Main extends Component {
    state = { activePage: '' }
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
            <BrowserRouter>
                <div className="row"> 
                    <div className="col-3 text-white bg-dark" style={{ height: '100vh' }}>
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-4">Sidebar</span>
                        </a>
                        <div class="input-group">
                          <div class="form-outline">
                            <input type="search" id="form1" class="form-control" />
                            <label class="form-label" for="form1">Search</label>
                          </div>
                          <button type="button" class="btn btn-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                          </button>
                        </div>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <Link to='/' onClick={() => this.handleClickSidebar('home')}> 
                                    <div class={this.state.activePage === 'home' ? "nav-link active" : "nav-link"} aria-current="page">
                                        Home
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard' onClick={() => {this.handleClickSidebar('dashboard')}}> 
                                    <div class={this.state.activePage === 'dashboard' ? "nav-link active" : "nav-link"}>
                                        Dashboard
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to='/orders' onClick={() => {this.handleClickSidebar('orders')}}> 
                                    <div class={this.state.activePage === 'orders' ? "nav-link active" : "nav-link"}>
                                        Orders
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to='/products' onClick={() => {this.handleClickSidebar('products')}}> 
                                    <div class={this.state.activePage === 'products' ? "nav-link active" : "nav-link"}>
                                        Products
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to='/customers' onClick={() => {this.handleClickSidebar('customers')}}>
                                    <div class={this.state.activePage === 'customers' ? "nav-link active" : "nav-link"}>
                                        Customers
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                                <strong>mdo</strong>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-9">
                        <Switch>
                            <Route exact path="/" component={Dashboard} /> 
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/orders" component={Orders} />
                            <Route path="/products" component={Products} />
                            <Route path="/customers" component={Customers} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;
