import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Orders from '../Orders';
import Products from '../Products';
import Search from '../Search';
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
        <Link to="Search"  onClick={() => this.handleClickSidebar('Search')} Link style={{textDecoration: 'none'}}>
            <div class={this.state.activePage === 'Search' ? "nav-link active" : "text-white nav-link"}>
            Search
            </div>
        </Link>
      </li>
                    <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16" style={{marginRight:'5px'}}>
                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                </svg>
                                Titles
                            </button>
                            <div class="collapse" id="dashboard-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><Link to="/advanced-search"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Advanced Search</div></Link></li>
                                <li><Link to="/recently-added"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Recently Added</div></Link></li>
                                <li><Link to="/latest-updates"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Latest Updates</div></Link></li>
                                <li><Link to="/"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Random</div></Link></li>
                            </ul>
                            </div>
                        </li>
                    <li>
                        <Link to="/orders">
                            <div href="#" class="nav-link text-white">
                            Orders
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <div href="#" class="nav-link text-white">
                            Products
                            </div>
                        </Link>
                    </li>
                    </ul>
                    <hr/>
                    <div class="dropdown">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                        <strong>MARY ANN INOC</strong>
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
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;