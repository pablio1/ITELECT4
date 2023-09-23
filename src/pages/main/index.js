import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Home from '../Home';
import Orders from '../Orders';
import Products from '../Products'

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
            <div class="row">
                <div class="col-3 text-white bg-dark" style={{ height: '100vh'}}>
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    
                    <span class="fs-4">Sidebar</span>
                    </a>
                    <hr/>
                    <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <Link to="/home" onClick={() => this.handleClickSidebar('Home')}Link style={{color:'inherit',textDecoration:'inherit'}}>
                            <div class={this.state.activePage === 'Home' ? "nav-link active" : "text-white nav-link" } aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16" style={{marginRight: '5px', marginBottom:'5px'}}>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg>Home
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard"  onClick={() => this.handleClickSidebar('dashboard')}Link style={{color:'inherit',textDecoration:'inherit'}}>
                            <div class={this.state.activePage === 'dashboard' ? "nav-link active" : "text-white nav-link" } >
                            Dashboard
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders"onClick={() => this.handleClickSidebar('Orders')} Link style={{color:'inherit',textDecoration:'inherit'}}>
                        <div class={this.state.activePage === 'Orders' ? "nav-link active" : "text-white nav-link" } >
                            Orders
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products"onClick={() => this.handleClickSidebar('Products')}Link style={{color:'inherit',textDecoration:'inherit'}}>
                        <div class={this.state.activePage === 'Products' ? "nav-link active" : "text-white nav-link" } >
                            Products
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
                        <Route path="/home" component={Home} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/products" component={Products} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;