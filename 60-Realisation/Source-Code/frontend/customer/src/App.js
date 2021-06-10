import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/nav-bar'
import {BrowserRouter as Router,Switch,Route, Link, BrowserRouter} from 'react-router-dom';
import Login from './Pages/login.js';
import ListApartment from './Pages/show-apartment';
import HomePage from './Pages/home'
import PromotionPage from './Pages/promotion'
import DetailApartment from './Pages/detail-apartment';
import BookingForm from './Pages/booking-infor';
import RegisterForm from './Pages/register';
import ChangePasswordPage from './Pages/change-password';
import CustomerInfoPage from './Pages/customer-info';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      logged: false,
      accountID: 0
    }
  }
  SetLogged = (id) =>{
    this.state.accountID = id;
    if(this.state.logged){
      this.state.logged = false;
      this.setState(this);
    }
    else{
      this.state.logged = true;
      this.setState(this);
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div class="fixed-top">
            <Navbar isLogged = {this.state.logged} id ={this.state.accountID}/>
        </div>
        <Switch>
          <Route path="/login" render={() => <Login callback={this.SetLogged}/>}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/apaLst" component={ListApartment}></Route>
          <Route path="/promotion" component={PromotionPage}></Route>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/listApartments/:apartmentId" exact component={DetailApartment}></Route>
          <Route path="/booking/:apartmentId" exact render={() => <BookingForm id ={this.state.accountID}/>}></Route>
          <Route path="/changePassword/:id" exact component={ChangePasswordPage}></Route>
          <Route path="/customerInfor/:id" exact component={CustomerInfoPage}></Route>
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}
export default App



