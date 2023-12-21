import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import MangaDescription from './pages/Dashboard/MangaDescription';
import ChapterDetails from './pages/Dashboard/ChapterDetails';

class App extends Component {
    render() {
        return (
            <Switch>
                
                <Route exact path="/view/:mangaId" component={MangaDescription} />
                <Route path="/chapter/:chapterId" component={ChapterDetails} />

                
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                
                
                <Route path="/" component={Main} />
            </Switch>
        );
    }
}

export default App;