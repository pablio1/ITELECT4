import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Main from './pages/Main';
import Home from './pages/Home';




class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component = {Main}  />
                <Route path="/register" component = {Register}  />
                <Route path="/" component = {Home} />

            </Switch>
        );
        
    }
}

export default App;