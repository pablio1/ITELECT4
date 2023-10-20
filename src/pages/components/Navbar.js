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
    <nav class="navbar navbar-expand-lg bg-grey">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home"><img src={Logo} alt="Logo" className='astralLogo' width={150} height={250}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/bookmarks">Bookmarks</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
          <a class="nav-link disabled text-white" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  );
}
 
export {Navbar};