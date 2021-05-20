
import React, { Component } from "react"
//import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./Components/navbar"
import Login from "./Components/login"

import Account from "./Pages/Main/account"
import Trending from "./Pages/Main/trending"
import Report from "./Pages/Main/report"
import NotFound from "./Pages/Main/notFound"

import AddReport from "./Pages/Report/addReport"
import EditReport from "./Pages/Report/editReport"
import ViewReport from './Pages/Report/viewReport'

import AddAccount from "./Pages/Account/addAccount"
import EditAccount from "./Pages/Account/editAccount"
import ViewAccount from "./Pages/Account/viewAccount"

class App extends Component {

  //https://eleven-fifty-academy.gitbook.io/react-workoutlog/module-0-application-setup
  render() {
    return (
      <div>
         <Router>
          <Navbar />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/trending" component={Trending} />
            <Route exact path="/report" component={Report} />
            <Route exact path="/report/add" component={AddReport} />
            <Route exact path="/report/edit/:id" component={EditReport}/>
            <Route exact path="/report/:id" component={ViewReport} />
            <Route exact path="/account/add" component={AddAccount} />
            <Route exact path="/account/edit/:id" component={EditAccount} />
            <Route exact path="/account/:id" component={ViewAccount} />
            <Route component={NotFound} />
          </Switch>
        </Router>   
      </div>
    );
  }
}

export default App;

