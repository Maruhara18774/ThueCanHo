import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/apaLst">Apartment List</Link>
            </li>
          </ul>
        </nav>
  );
}

export default Navbar;