import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Main from './pages/Main';


class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component = {Main}  />
                <Route path="/register" component = {Register}  />
                <Route path="/" component = {Main} />

            </Switch>
        );
    }
}

export default App;