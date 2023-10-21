import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import logo from '../assets/images/AstralLogo.png';
import Dashboard from '../Dashboard';
import LightNovel from '../LightNovel';
import Home from '../Home';
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
              <Route path="/lightnovel" component = {LightNovel}/>
              <Route path="/home" component = {Home}/>
          </Switch>
        
      </div>
    );
  }
}
