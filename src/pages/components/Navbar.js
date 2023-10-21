import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { SidebarData } from './NavbarData';
import './Navbars.css';
import Logo from '../assets/images/AstralLogo.png'
// import { IconContext } from 'react-icons';

function Navbar() {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav class="navbar navbar-expand-lg"style={{backgroundColor: 'bisque '}}>
  <div class="container-fluid">
    <div className='logo-container'> 
    <a class="navbar-brand" href="/home"><img src={Logo} alt="Logo" className='astralLogo'/></a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/bookmarks">Bookmarks</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Light Novels
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Latest Update</a></li>
            <li><a class="dropdown-item" href="/lightnovels">Novel List</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Random Novel</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled " aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <div class="dropdown">
                    <a href="#" class="d-flex align-items-center  text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                        <strong>mdo</strong>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                    </div>
    </div>
  </div>
</nav>
  );
}
 
export {Navbar};