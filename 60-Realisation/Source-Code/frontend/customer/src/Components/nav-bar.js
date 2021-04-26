import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css'

function Navbar() {
  return (
    <nav class="bg-main-nav navbar navbar-expand-lg navbar-light bg-white shadow">
      <Link to="/">
        <div class="navbar-brand">
        <h3>
          <span class="mrl10">
          <img src="https://www.flaticon.com/svg/vstatic/svg/201/201623.svg?token=exp=1619342866~hmac=e432d53791660245e83a80fbf2cc5a63" width="30" height="30" class="d-inline-block align-top" alt="logo" />
          </span>
                    Cabeanloka</h3>
                </div>
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/apaLst" className="gray-text mrl20"><span className="sea-text mrl5"><i class="fas fa-home"></i></span>Xem căn hộ</Link>
            </li>
            <li class="nav-item">
              <Link to="/apaLst" className="gray-text mrl20"><span className="sea-text mrl5"><i class="fas fa-chart-line"></i></span>Trending</Link>
            </li>
            <li class="nav-item">
              <Link to="/apaLst" className="gray-text mrl20"><span className="fire-text mrl5"><i class="fas fa-gift"></i></span>Khuyến mãi</Link>
            </li>
          </ul>
        <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
          <li class="nav-item active">
            <Link to="/login" className="gray-text mrl20"><span className="sea-text mrl5"><i class="far fa-user"></i></span>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;
