import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import main from "./pages/main";
import "./styles/main.css";
class App extends Component {
    render() {
        return (
            <Switch>
               
                <Route path="/login" component = {Login}  />
                <Route path="/register" component = {Register}  />
                <Route path="/main" component = {main} />
   
            </Switch>
        );
    }
}

export default App;