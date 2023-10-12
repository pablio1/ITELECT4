import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component = {Main}  />
                <Route path="/dashboard" component = {Dashboard}  />
                <Route path="/home" component = {Home}  />
                <Route path="/" component = {Main} />
            </Switch>
        );
    }
}

export default App;