import React from 'react'
import '../../RegistrationDetail.css';
import Navbar from '../paner-form/Navbar'
import MiniNavbar from '../paner-form/MiniNavbar'
import { BrowserRouter as Router} from 'react-router-dom';

function RegistrationDetail() {
  return (
    <div>
      <Router>
        <Navbar/>
        <MiniNavbar/>
      </Router>
    </div>
  )
}

export default RegistrationDetail
