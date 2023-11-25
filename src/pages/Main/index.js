import React, { Component } from 'react';
import {Link , Switch , Route} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Orders from '../Orders';
import Products from '../Products';
import Login from '../Login';
import Home from '../Home';
import Customers from '../Customers';


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
               <Link to="/dashboard"  onClick={() => this.handleClickSidebar('dashboard')}>
               <div class={this.state.activePage === 'dashboard' ? "nav-link active" : "nav-link"} >
                Dashboard
                </div>
                </Link>
            </li>
            <li>
                <Link to="/orders"  onClick={() => this.handleClickSidebar('orders')}>
                <div class={this.state.activePage === 'orders' ? "nav-link active" : "nav-link"} > 
                Orders
                </div>
                </Link>
            </li>
            <li>
                <Link to="/products"  onClick={() => this.handleClickSidebar('products')}>
                <div class={this.state.activePage === 'products' ? "nav-link active" : "nav-link"} > 
                Products
                </div>
                </Link>
            </li>
            </ul>
            <hr/>
            <div class="dropdown">
            <div class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/391694909_2107739566235268_5016581444432289149_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFuOwCpIyDy8-ppOC8N02TDjhceG8ZVHaqOFx4bxlUdqrRUURAFZpRUTXYoWZGnWDpfYy1y04_6Fu6IGz5h4fl1&_nc_ohc=c5Pm1T3Pr9IAX_VeQVB&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&oh=00_AfDrhNEvRUbFHi_9Au-o-WTuOxdTqTevBDkVryZ4zjRb4Q&oe=65330C7B" alt="" width="32" height="32" class="rounded-circle me-2"/>
                <strong>Mjineer</strong>
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
                    <Route path="/home" component = {Home} />
                    <Route path="/login" component = {Login} />
                    <Route path="/customers" component = {Customers} />
                </Switch>
            </div>
      </div>
    )
  }
}


export default Main;