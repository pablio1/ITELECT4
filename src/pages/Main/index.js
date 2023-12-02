import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import AdvancedSearch from '../Titles/Advanced Search';
import UpcomingMovies from '../Titles/Upcoming Movies';
import LatestUpdates from '../Titles/Latest Updates';
import Updates from '../Bookmarks/Updates';
import Favorites from '../Bookmarks/Favorites';
import History from '../Bookmarks/History';
import Test from '../Test';

class Main extends Component {
    state = { activePage: 'dashboard' };

    handleClickSidebar = (page) => {
        this.setState({
            activePage: page,
        });
    };

    render() {
        const isPageActive = (page) => this.state.activePage === page;

        return (
            <div className="row">
                <div className="col-3 flex-shrink-0 p-3" style={{ height: "100vh" }}>
                    <div href="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16" style={{marginLeft: '5px'}}>
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
                        </svg>
                        <span class="fs-3 fw-bold" style={{marginLeft: "5px"}}>Movie Hub</span>
                    </div>
                    <ul className="list-unstyled ps-0" style={{ marginLeft: '12px' }}>
                        <li className="mb-1">
                            <Link to="/home" onClick={() => this.handleClickSidebar('home')}>
                                <button
                                    className={
                                        isPageActive('home')
                                            ? 'nav-link active btn btn-link text-left'
                                            : 'nav-link btn btn-link text-left'
                                    }
                                    data-bs-toggle="collapse"
                                    data-bs-target="#home-collapse"
                                    aria-current="page"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16" style={{marginRight:'5px'}}>
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                                    </svg>
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li className="mb-1">
                            <button
                                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#dashboard-collapse"
                                aria-expanded="false"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16" style={{marginRight:'5px'}}>
                                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
                                </svg>
                                Movies
                            </button>
                            <div className="collapse" id="dashboard-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="/advanced-search"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Advanced Search</div></Link></li>
                                    <li><Link to="/upcoming-movies"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Upcoming Movies</div></Link></li>
                                    <li><Link to="/latest-updates"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Latest Updates</div></Link></li>
                                    <li><Link to="/"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Random</div></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button
                                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#orders-collapse"
                                aria-expanded="false"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16" style={{marginRight:'5px'}}>
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                </svg>
                                Favorites
                            </button>
                            <div className="collapse" id="orders-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="/updates"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</div></Link></li>
                                    <li><Link to="/Favorites"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Favorites</div></Link></li>
                                    <li><Link to="/watch-history"><div class="link-body-emphasis d-inline-flex text-decoration-none rounded">Reading History</div></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="border-top my-3"></li>
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

                <div className="col-9">
                    <div className="container" style={{ paddingTop: '20px' }}>
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <span class="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16" style={{marginLeft: '5px'}}>
                                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
                            </svg>
                                <span class="fs-3 fw-semibold" style={{marginLeft: "5px"}}>Movie Hub</span>
                            </span>
                            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" style={{position: 'fixed', right: '0', paddingRight: '10px'}}>
                                <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
                            </form>  
                        </div>
                    </div>

                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/advanced-search" component={AdvancedSearch} />
                        <Route path="/upcoming-movies" component={UpcomingMovies} />
                        <Route path="/latest-updates" component={LatestUpdates} />
                        <Route path="/updates" component={Updates} />
                        <Route path="/favorites" component={Favorites} />
                        <Route path="/watch-history" component={History} />
                        <Route path="/test" component={Test} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;
