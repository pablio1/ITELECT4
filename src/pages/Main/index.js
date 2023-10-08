import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import AdvancedSearch from '../Titles/Advanced Search';
import RecentlyAdded from '../Titles/Recently Added';
import LatestUpdates from '../Titles/Latest Updates';
import Updates from '../Bookmarks/Updates';
import Library from '../Bookmarks/Library';
import History from '../Bookmarks/History';

import Test from '../Test';

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
                <div class="col-3 flex-shrink-0 p-3" style={{height: "100vh"}}>
                    <div href="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16" style={{marginLeft: "5px"}}>
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                        </svg>
                        <span class="fs-3 fw-bold" style={{marginLeft: "5px"}}>Light Novels</span>
                    </div>
                    <ul class="list-unstyled ps-0" style={{marginLeft: '12px'}}>
                        <li class="mb-1">
                            <Link to="/home" onClick={() => this.handleClickSidebar('home')}>
                                <button class={this.state.activePage === 'home' ? "nav-link active" : "nav-link"} data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-current="page">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16" style={{marginRight:'5px'}}>
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                                    </svg>
                                    Home
                                </button>
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
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16" style={{marginRight:'5px'}}>
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                </svg>
                                Bookmarks
                            </button>
                            <div class="collapse" id="orders-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><Link to="/updates"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</div></Link></li>
                                <li><Link to="/library"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Library</div></Link></li>
                                <li><Link to="/reading-history"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Reading History</div></Link></li>
                            </ul>
                            </div>
                        </li>
                        <li class="border-top my-3"></li> 
                    </ul>
                        <div class="flex-shrink-0 dropdown">
                            <div class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                                <strong>mdo</strong>
                            </div>
                            <ul class="dropdown-menu text-small shadow show" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(0px, -34px)'}} data-popper-placement="top-start">
                                <li><Link to="/" style={{textDecoration: 'none'}}><div class="dropdown-item">Settings</div></Link></li>
                                <li><Link to="/" style={{textDecoration: 'none'}}><div class="dropdown-item">Profile</div></Link></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><Link to="/sign-in" style={{textDecoration: 'none'}}><div class="dropdown-item">Sign out</div></Link></li>
                            </ul>
                        </div>
                </div>

                <div class="col-9">             
                    <div class="container" style={{paddingTop: '20px'}}>
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <span class="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16" style={{marginLeft: "5px"}}>
                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                </svg>
                                <span class="fs-3 fw-semibold" style={{marginLeft: "5px"}}>Light Novels</span>
                            </span>
                            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" style={{position: 'fixed', right: '0', paddingRight: '10px'}}>
                                <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
                            </form>            
                        </div>
                    </div>    
                    
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/advanced-search" component={AdvancedSearch} />
                        <Route path="/recently-added" component={RecentlyAdded} />
                        <Route path="/latest-updates" component={LatestUpdates} />
                        <Route path="/updates" component={Updates} />
                        <Route path="/library" component={Library} />
                        <Route path="/reading-history" component={History} />
                        <Route path="/test" component={Test} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;