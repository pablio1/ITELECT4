import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/User/Login';
import Register from './pages/User/Register';
import Main from './pages/Main';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route component={Main} />
            </Switch>
        );
    }
}

export default App;