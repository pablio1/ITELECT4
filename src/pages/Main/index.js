import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Anime from '../Anime';
import Categories from '../Categories';
import Comedy from '../Comedy';
import Home from '../Home';
import Horror from '../Horror';
import KDrama from '../Kdrama';

class Main extends Component {
    state = { activePage: '' }
    componentDidMount = () => {
        this.setState({
            activePage: 'home'
        })
    }

    handleClickSidebar = (page) => {
        this.setState({
            activePage: page
        })
    }

    render() {
        return (
            <div>
                <div class="p-3 text-bg-dark">
                    <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        </a>

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/home" class="nav-link px-2 text-secondary">Home</Link></li>
                        <li><Link to="/categories" class="nav-link px-2 text-secondary">Categories</Link></li>
                        <li><Link to="/k-Drama" class="nav-link px-2 text-secondary">K-Drama</Link></li>
                        <li><Link to="/anime" class="nav-link px-2 text-secondary">Anime</Link></li>
                        <li><Link to="/horror" class="nav-link px-2 text-secondary">Horror</Link></li>
                        <li><Link to="/comedy" class="nav-link px-2 text-secondary">Comedy</Link></li>
                    </ul>

                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
                        </form>

                        <div class="text-end">
                        <button type="button" class="btn btn-outline-light me-2">Login</button>
                        <button type="button" class="btn btn-warning">Sign-up</button>
                        </div>
                    </div>
                    </div>
                </div>

                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/k-drama" component={KDrama} />
                    <Route path="/anime" component={Anime} />
                    <Route path="/horror" component={Horror} />
                    <Route path="/comedy" component={Comedy} />
                </Switch>

            </div>

            
        



        );
    }
}

export default Main;