import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from '../Dashboard';


export default class Main extends Component {
state = { activePage: '' }
componentDidMount = () => {
    this.setState({
        activePage: 'dashboard'
    })
}
handleClickSidebar = (pages) => {
    this.setState({
        activePage: pages
    })
}


  render() {
    return (
      <div class="row">
         <div class="col-3 text-white bg-dark" style={{ height:'100vh'}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
     
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <Link to="/home" onClick={() => this.handleClickSidebar('home')} Link style={{textDecoration: 'none'}}>
            <div class={this.state.activePage === 'home' ? "nav-link active" : "nav-link"} aria-current="page">
            Home
            </div>
        </Link>
      </li>
      <li>
        <Link to="/dashboard" onClick={() => this.handleClickSidebar('dashboard')} Link style={{textDecoration: 'none'}}>
            <div class={this.state.activePage === 'dashboard' ? "nav-link active" : "nav-link"}>
            Dashboard
            </div>
        </Link>
      </li>
      <li>
        <Link to="/orders"  onClick={() => this.handleClickSidebar('orders')} Link style={{textDecoration: 'none'}}>
            <div class={this.state.activePage === 'orders' ? "nav-link active" : "nav-link"}>
            Orders
            </div>
        </Link>
      </li>
      <li>
        <Link to="/products"  onClick={() => this.handleClickSidebar('products')} Link style={{textDecoration: 'none'}}>
            <div class={this.state.activePage === 'products' ? "nav-link active" : "nav-link"}>
            Products
            </div>
        </Link>
      </li>
      <li>
        <Link to="/customers"  onClick={() => this.handleClickSidebar('customers')} Link style={{textDecoration: 'none'}}>
            <div class={this.state.activePage === 'customers' ? "nav-link active" : "nav-link"}>
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
  <div class="col-9">
    <Switch>
        <Route path="/dashboard" component = {Dashboard}/>
    </Switch>
  </div>
      </div>
    );
  }
}
