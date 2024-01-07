import React, { Component } from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Dashboard from '../Dashboard'
import Home from '../Home'
import './style.css'; // Import the CSS file
const backgroundImageStyle = {
  background: 'url(https://img.redbull.com/images/w_1200/q_auto,f_auto/redbullcom/2014/10/09/1331683687434_2/dota-2-is-unlike-most-games-of-its-kind) no-repeat center center fixed',
  backgroundSize: 'cover',
};
export default class Main extends Component {
  state = { activePage: '' }
  componentDidMount = () => {
    this.setState({
      activePage: ''
    })
  }
  handleClickSidebar = (pages) => {
    this.setState({
      activePage: pages
    })
  }
  render() {
    return (
      <div class="row" style={backgroundImageStyle}>
      <div class="col-3 flex-shrink-0 p-3 text-white bg-dark" style={{width: '280px', height: '150vh'}}>
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span class="fs-4" style={{marginLeft: '40px'}}>Dota Movie</span>
        </a>
        <hr/>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link to="/home" onClick={() => this.handleClickSidebar('home')} Link style={{color: 'inherit', textDecoration: 'inherit'}}>
            <div class={this.state.activePage === 'home' ? "nav-link active" : "text-white nav-link"} aria-current="page">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 2 16 16" style={{marginRight: '5px'}}>
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg>  Home
            </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={() => this.handleClickSidebar('dashboard')} Link style={{color: 'inherit', textDecoration: 'inherit'}}>
            <div class={this.state.activePage === 'dashboard' ? "nav-link active" : "text-white nav-link"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 20" style={{marginRight: '5px'}}>
            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
            <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
</svg>    Dashboard
            </div>
            </Link>
          </li>
          <li>
          <Link to="/Orders" onClick={() => this.handleClickSidebar('Orders')} Link style={{color: 'inherit', textDecoration: 'inherit'}}>
            <div class={this.state.activePage === 'Orders' ? "nav-link active" : "text-white nav-link"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar-check" viewBox="0 3 16 20" style={{marginRight: '7px'}}>
            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>    Orders
            </div>
            </Link>
          </li>
          <li>
          <Link to="/Products" onClick={() => this.handleClickSidebar('Products')} Link style={{color: 'inherit', textDecoration: 'inherit'}}> 
            <div class={this.state.activePage === 'Products' ? "nav-link active" : "text-white nav-link"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 20" style={{marginRight: '9px'}}>
  <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
</svg>Products
            </div>
            </Link>
          </li>
          <li>
          <Link to="/Customer" onClick={() => this.handleClickSidebar('Customer')} Link style={{color: 'inherit', textDecoration: 'inherit'}}>
            <div class={this.state.activePage === 'Customer' ? "nav-link active" : "text-white nav-link"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 20" style={{marginRight: '4px'}}>
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg> Customer
            </div>
            </Link>
          </li>
        </ul>
        <hr/>
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://avatars.githubusercontent.com/u/113760187?s=400&u=c7ea063463c19e7fcf20536d1478941afc2c04e1&v=4" alt="" width="32" height="32" class="rounded-circle me-2" style={{marginLeft: '15px'}}/>
            <strong>Neil</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
      <div class="col-9">
          <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}