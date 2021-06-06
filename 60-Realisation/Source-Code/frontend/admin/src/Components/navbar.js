import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
import * as FaIcon from 'react-icons/fa'

import 'bootstrap/dist/css/bootstrap.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <Link to ="/" className="navbar-brand">ADMIN MANAGER</Link>
                        <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/account"><FaIcon.FaUserAlt className="mx-1" />Account</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/trending"><FaIcon.FaSortAmountUp className="mx-1" />Trending</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/review"><FaIcon.FaStarHalfAlt className="mx-1" />Rating</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/report"><FaIcon.FaFileAlt className="mx-1" />Report</Link>
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn-outline-light" to="/login">Logout</Link>
                    </div>
                </nav>
            </div>
        )
    }
}