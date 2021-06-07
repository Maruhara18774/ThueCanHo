import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
import * as FaIcon from 'react-icons/fa'

import TitleBrand from './titleBrand'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <TitleBrand title="ADMIN"/>
                        <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/account"><FaIcon.FaUserAlt className="mx-1" />Tài khoản</Link>
                                </li>             
                                <li className="nav-item">
                                    <Link className="nav-link" to="/trending"><FaIcon.FaSortAmountUp className="mx-1" />Trending</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/review"><FaIcon.FaStarHalfAlt className="mx-1" />Đánh giá</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/report"><FaIcon.FaFileAlt className="mx-1" />Báo cáo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/location"><FaIcon.FaCity className="mx-1" />Vị trí</Link>
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn-warning text-white" to="/login">Đăng xuất</Link>
                    </div>
                </nav>
            </div>
        )
    }
}