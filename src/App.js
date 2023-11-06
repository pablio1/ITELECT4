import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
class App extends Component {
    render() {
        return (
            <Switch>
                {/* <Route path="/" component = {Login} /> */}
                <Route path="/" component = {Main}  />
                <Route path="/dashboard" component = {Dashboard}  />
                <Route path="/home" component = {Home}  />
                <Route path="/register" component = {Register}  />
                <Route path="/main" component = {Main} />
                <Route path="/Orders" component = {Orders} />
            </Switch>
        );
    }
}

export default App;