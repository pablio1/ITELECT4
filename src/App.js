import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import AnimeDescription from './pages/Dashboard/AnimeDescription';

class App extends Component {
    render() {
        return (
            <Switch>
            {/* Add a route for AnimeDescription */}
            <Route exact path="/anime/:mal_id" component={AnimeDescription} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Main} />
            </Switch>

        );
    }
}

export default App;