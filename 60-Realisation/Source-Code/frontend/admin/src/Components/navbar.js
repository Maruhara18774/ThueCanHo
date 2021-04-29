import React, { Component } from 'react'
import { Link, NavLink,Redirect } from 'react-router-dom'

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
        // const token = localStorage.getItem("token")

         let loggedIn = true
        // if( token == null){
        //     loggedIn = false
        // }

        this.state ={
             loggedIn
        }
    }
    render() {
        if( this.state.loggedIn === false){
             return <Redirect to='/login'/>
         }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <span className="navbar-brand">ADMIN MANAGER</span>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/account">Account</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/trending">Trending</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/report">Report</NavLink>
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn-outline-light mx-2" to="/login">Login</Link>
                        <Link className="btn btn-outline-light" to="/login">Logout</Link>
                        {/* <Link className="btn btn-outline-light" to="/users/add">Add Account</Link> */}
                    </div>
                </nav>
            </div>
        )
    }
}

// import React, { Component } from 'react'
// import {Link, NavLink } from 'react-router-dom'

// class Navbar extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {}
//     }
//     render() {
//         return (
//             <div clickLogout ={this.logout}>
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//                     <div className="container">
//                         <Link exact path="/admin"><span className="navbar-brand">ADMIN MANAGER</span></Link>

//                         <div className="collapse navbar-collapse">
//                             <ul className="navbar-nav mr-auto">/                                 
//                                 <li className="nav-item">
//                                      <NavLink className="nav-link" exact to="/admin/account">Account</NavLink>
//                                 </li>
//                                  <li className="nav-item">
//                                      <NavLink className="nav-link" exact to="/admin/trending">Trending</NavLink>
//                                  </li>
//                                  <li className="nav-item">
//                                      <NavLink className="nav-link" exact to="/admin/report">Report</NavLink>
//                                 </li>
//                              </ul>
//                          </div>
//                          <button onClick ={() => this.props.clickLogout()}>Logout</button>
//                     </div>
//                 </nav>
//             </div>
//         )
//     }
// }
//export default Navbar
