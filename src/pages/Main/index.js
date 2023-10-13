import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Home from '../Home';

class Main extends Component {
    state = { activePage: '' }

    componentDidMount = () => {
        this.setState({
            activePage: 'home'
        })
    }

    handleClickNav = (page) => {
        this.setState({
            activePage: page
        })
    }

    render() {
        const navLinkStyle = {
            color: 'white',
            fontSize: '18px', // You can adjust the font size as needed
            textDecoration: 'none', // Remove underlines
        };

        const backgroundStyle = {
            backgroundImage: `url('https://img.redbull.com/images/w_1200/q_auto,f_auto/redbullcom/2014/10/09/1331683687434_2/dota-2-is-unlike-most-games-of-its-kind')`,
            backgroundSize: 'cover',
            minHeight: '100vh',
            backgroundRepeat: 'no-repeat',
            
        };

        return (
            <div style={backgroundStyle}>
                {/* Top Navigation Bar */}
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <Link to="/" className="navbar-brand" onClick={() => this.handleClickNav('home')}>
                            Dota Movie
                        </Link>
                        <Link to="/home" className={this.state.activePage === 'home' ? "nav-link active" : "nav-link"} style={{ ...navLinkStyle, marginRight: '10px' }} onClick={() => this.handleClickNav('home')}>
                            Home
                        </Link>
                        <Link to="/dashboard" className={this.state.activePage === 'dashboard' ? "nav-link active" : "nav-link"} style={{ ...navLinkStyle, marginRight: '10px' }} onClick={() => this.handleClickNav('dashboard')}>
                            Dashboard
                        </Link>
                    </div>
                </nav>

                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/home" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default Main;
