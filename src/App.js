import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import description from './pages/Home/description';
import episodes from './pages/Home/episodes';

class App extends Component {
    render() {
        return (
            <Switch>
                 <Route path="/view/:id" component={description} />
                 <Route path="/view/:episodeId" component={episodes} />
                <Route path="/login" component = {Login}  />
                <Route path="/register" component = {Register}  />
                <Route path="/" component = {Main} />
            </Switch>
        );
    }
}

export default App;
