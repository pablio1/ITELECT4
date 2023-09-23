import React, { Component } from 'react';
import {Link , Switch , Route} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Orders from '../Orders';
import Products from '../Products';
import Login from '../Login';

class Main extends Component {
    state = { activePage: ''}
    componentDidMount = () => {
        this.setState ({
            activePage: 'dashboard'
        })
    }

    handleClickSidebar = (page) => {
        this.setState ({
            activePage: page
        })
    }

  render() {
    return (
        <div class = "row">
            <div class="col-3 text-white bg-dark" style={{height: '100vh'}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-4">Queennie Sidebar</span>
            </a>
            <hr/>
            <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <Link style ={{}} to = "/main" onClick = {() => this.handleClickSidebar} >
                <div class="nav-link active" aria-current="page">
                Home
                </div>
                </Link>
            </li>
            <li>
                <Link to = "/dashboard">
                <div  class="nav-link text-white">
                Dashboard
                </div>
                </Link>
            </li>
            <li>
                <Link to = "/orders">
                <div  class="nav-link text-white"> 
                Orders
                </div>
                </Link>
            </li>
            <li>
                <Link to = "/products">
                <div  class="nav-link text-white"> 
                Products
                </div>
                </Link>
            </li>
            </ul>
            <hr/>
            <div class="dropdown">
            <div class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://avatars.githubusercontent.com/u/114239031?v=4" alt="" width="32" height="32" class="rounded-circle me-2"/>
                <strong>Queenie Aro</strong>
            </div>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><div class="dropdown-item" href="#">New project...</div></li>
                <li><div class="dropdown-item" href="#">Settings</div></li>
                <li><div class="dropdown-item" href="#">Profile</div></li>
                <li><hr class="dropdown-divider"/></li>
                <Link to = "/login">
                <li><div class="dropdown-item" href="#">Sign out</div></li>
                </Link>
            </ul>
                </div>
            </div>
            <div class ="col-9">
                <Switch>
                    <Route path="/dashboard" component = {Dashboard} />
                    <Route path="/orders" component = {Orders} />
                    <Route path="/products" component = {Products} />
                    <Route path="/login" component = {Login} />
                </Switch>
            </div>
      </div>
    )
  }
}


export default Main;