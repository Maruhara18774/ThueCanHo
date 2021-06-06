import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route, Link, BrowserRouter} from 'react-router-dom';
import './nav-bar.css';
import ReactDOM from 'react-dom';

class NavbarLogged extends Component {
  constructor(props) {
    super(props);
  }
  logout = ()=>{
    ReactDOM.render(
      <BrowserRouter>
      <div id="loginInfo">
            <li class="nav-item active ">
              <Link to="/login" className="gray-text mrl20" ><span className="sea-text mrl5"><i class="far fa-user"></i></span>Đăng nhập</Link>
              <Link to="/register" className="register-btn">Đăng ký</Link>
            </li>
            </div>
      </BrowserRouter>
      
      , document.getElementById('loginInfo'));
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <div id="loginInfo">
          <li class="nav-item active">
                <Link to={'/customerInfor/'+this.props.id.toString()} className="gray-text mrl20">Xin chào <b>{this.props.name}</b>!</Link>            
                <button className="logout-btn" onClick={()=>this.logout()}>Đăng xuất</button>
          </li>
        </div>
              
        </BrowserRouter>
          
      </div>
    );
  }
}

export default NavbarLogged;