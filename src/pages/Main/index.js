import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Home from '../Home';
import Orders from '../Orders';
import Products from '../Products';
import Customer from '../Customer';

export default class Main extends Component {
  state = { activePage: ''}
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
            <div class="col-3 text-white bg-dark" style={{height : '100vh'}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
      <Link to="/home" onClick={() => this.handleClickSidebar('home')} Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div class={this.state.activePage === 'home' ? "nav-link active" : "nav-link" } style={{color:'yellow'}} aria-current="page">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16" style={{marginRight: '5px', marginBottom: '5px'}}>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg>Home
        </div>
      </Link>
      </li>
      <li>
      <Link to="/dashboard" onClick={() => this.handleClickSidebar('dashboard')} Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div class={this.state.activePage === 'dashboard' ? "nav-link active" : "nav-link"} style={{color:'pink'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16" style={{marginRight: '5px', marginBottom: '5px'}}>
  <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
  <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
</svg>Dashboard
        </div>
      </Link>
      </li>
      <li>
      <Link to="/orders" onClick={() => this.handleClickSidebar('orders')} Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div class={this.state.activePage === 'orders' ? "nav-link active" : "nav-link" }style={{color:'violet'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16" style={{marginRight: '5px', marginBottom: '5px'}}>
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
</svg>Orders
        </div>
      </Link>
      </li>
      <li>
      <Link to="/products" onClick={() => this.handleClickSidebar('products')} Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div class={this.state.activePage === 'products' ? "nav-link active" : "nav-link"} style={{color:'cyan'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16" style={{marginRight: '5px', marginBottom: '5px'}}>
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
</svg>Products
        </div>
      </Link>
      </li>
      <li>
      <Link to="/customer" onClick={() => this.handleClickSidebar('customer')} Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div class={this.state.activePage === 'customer' ? "nav-link active" : "nav-link"} style={{color:'orange'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" style={{marginRight: '5px', marginBottom: '5px'}}>
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>Customer
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
        <Route path="/Dashboard" component = {Dashboard}/>
        <Route path="/Home" component = {Home}/>
        <Route path="/Orders" component = {Orders}/>
        <Route path="/Products" component = {Products}/>
        <Route path="/Customer" component = {Customer}/>
      </Switch>
    </div>
  </div>
        );
    }
}