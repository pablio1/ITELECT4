import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
//import Home from '.

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component = {Main}  />
                <Route path="/register" component = {Register}  />
                <Route path="/Main" component = {Main} />
            </Switch>
        );
    }
}

export default App;