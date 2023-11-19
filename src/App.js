import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main/Index';
import desc from './pages/Dashboard/desc';


class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/view/:mal_id" component={desc} />
                <Route path="/login" component = {Login}  />
                <Route path="/register" component = {Register}  />
                <Route path="/" component = {Main} />
            </Switch>
        );
    }
}

export default App;