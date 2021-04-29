/*
import './App.css'
import Login from './Components/login'
import Navbar from './Components/navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/home'
import Trending from './Pages/trending'
import Account from './Pages/account'

//-------------------------------Login-------------------------

function App() {
  return (
    <div className="bg">
      <Login/>   
    </div>
  );
}
*/

/*
//-------------------------------Navbar-------------------------
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/account' component={Account}/>
          <Route path='/trending' component={Trending}/>
        </Switch>
      </Router>
    </div >
  );
}
*/


/*------------------------------------------------------------------------------------------*/
import React, { Component } from "react"
//import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./Components/navbar"
import Login from "./Components/login"
import Auth from './Components/auth'

import Account from "./Pages/Main/account"
import Trending from "./Pages/Main/trending"
import Report from "./Pages/Main/report"
import NotFound from "./Pages/Main/notFound"

import AddReport from "./Pages/Report/addReport"
import EditReport from "./Pages/Report/editReport"
import ViewReport from './Pages/Report/viewReport'

import AddUser from "./Pages/User/addUser"
import EditUser from "./Pages/User/editUser"
import ViewUser from "./Pages/User/viewUser"

class App extends Component {

  //https://eleven-fifty-academy.gitbook.io/react-workoutlog/module-0-application-setup

  // constructor(){
  //   super()
  //   this.state= {
  //     sessionToken: ''
  //   }
  // }
  // /* componentWillMount lấy giá trị token nếu nó có tồn tại trong localStorgage */
  // componentWillMount(){ 
  //   const token = localStorage.getItem("token") /* Lấy token */
  //   if(token && !this.state.sessionToken){ /* Kiểm tra token và state -> Thay đổi giá trị sessionToken */
  //     this.setState({sessionToken: token})
  //   }
  // }
  // /* Khởi tạo Token */
  // setSessionState = (token) => {
  //   localStorage.setItem('token', token)
  //   this.setState({sessionToken: token})
  // }
  // logout = () => {
  //   this.setState({
  //     sessionToken: ''
  //   })
  //   localStorage.clear()
  // }

  render() {
    return (
      <div>
        {/* <Router>
          <Navbar/>
          <Auth setToken={this.setSessionState}/>
        </Router> */}



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
            <Route exact path="/users/add" component={AddUser} />
            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route exact path="/users/:id" component={ViewUser} />
            <Route component={NotFound} />
          </Switch>
        </Router>   
      </div>
    );
  }
}

export default App;

