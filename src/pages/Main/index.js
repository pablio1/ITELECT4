import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
// import logo from '../assets/images/AstralLogo.png';
import Dashboard from '../Dashboard';
import Read from '../Read';
import Home from '../Home';
import Manga from '../Manga';
// import Navbar from '../components/Navbar';
import { Navbar } from '../components/Navbar'

export default class Main extends Component {
state = { activePage: '' }
componentDidMount = (pages) => {
    this.setState({
        activePage: pages
    })
}
handleClickSidebar = (pages) => {
    this.setState({
        activePage: pages
    })
}


  render() {
    return (
      <div class="row" >
        <Navbar/>
         
        
          <Switch>
              <Route path="/dashboard" component = {Dashboard}/>
              <Route path="/manga" component = {Manga}/>
              <Route path="/read/:id" component = {Read}/>
              <Route path="/home" component = {Home}/>
          </Switch>
        
      </div>
    );
  }
}
