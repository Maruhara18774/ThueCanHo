import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/">
        <div class="navbar-brand">
          <img class="crb-logo" src="https://www.flaticon.com/svg/vstatic/svg/201/201623.svg?token=exp=1619342866~hmac=e432d53791660245e83a80fbf2cc5a63" width="30" height="30" class="d-inline-block align-top" alt="logo" />
                    Cabeanloka
                </div>
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/login">Login</Link>
          </li>
          <li class="nav-item">
            <Link to="/apaLst">Apartment List</Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;