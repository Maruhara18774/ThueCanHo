import React, { Component } from "react"
//import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Login from "./Components/login"

import Home from "./Pages/Main/home"
import Account from "./Pages/Main/account"
import Trending from "./Pages/Main/trending"
import Report from "./Pages/Main/reports"
import NotFound from "./Pages/Main/notFound"
import Location from "./Pages/Main/location"

import AddCity from "./Pages/Location/City/addCity"
import EditCity from "./Pages/Location/City/editCity"

import AddDistrict from "./Pages/Location/District/addDistrict"
import EditDistrict from "./Pages/Location/District/editDistrict"

import EditCountry from './Pages/Location/Country/editCountry'


import AddReport from "./Pages/Report/addReport"
import EditReport from "./Pages/Report/editReport"
import ViewReport from './Pages/Report/viewReport'

import AddAccount from "./Pages/Account/addAccount"
import EditAccount from "./Pages/Account/editAccount"
import ViewAccount from "./Pages/Account/viewAccount"

class App extends Component {
  render() {
    return (
      <div>
         <Router>
          <Route exact path='/login' component={Login} />
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/account" component={Account} />
            <Route exact path="/trending" component={Trending} />
            <Route exact path="/report" component={Report} />
            <Route exact path="/location" component={Location} />

            <Route exact path="/location/country/edit/:id" component={EditCountry} /> 

            <Route exact path="/location/city/add" component={AddCity} />
            <Route exact path="/location/city/edit/:id" component={EditCity} />

            <Route exact path="/location/district/add" component={AddDistrict} />
             <Route exact path="/location/district/edit/:id" component={EditDistrict} />

            <Route exact path="/report/add" component={AddReport} />
            <Route exact path="/report/edit/:id" component={EditReport}/>
            <Route exact path="/report/:id" component={ViewReport} />

            <Route exact path="/account/add" component={AddAccount} />
            <Route exact path="/account/edit/:id" component={EditAccount} />
            <Route exact path="/account/:id" component={ViewAccount} />
          </Switch>
        </Router>   
      </div>
    );
  }
}

export default App;
