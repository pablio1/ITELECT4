import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import MovieDescription from './pages/Dashboard/MovieDescription';
class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/view/:id" component={MovieDescription} />
                <Route path="/login" component = {Login}  />
                <Route path="/register" component = {Register}  />
                <Route path="/" component = {Main} />
            </Switch>
        );
    }
}

export default App;