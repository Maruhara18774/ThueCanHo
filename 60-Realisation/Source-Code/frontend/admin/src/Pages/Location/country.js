import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import * as FaIcon from 'react-icons/fa'

import AddCountry from './addCountry'
export default class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myCountryList: []
        };   
        this.getCountryList()  
    }
    componentDidUpdate () {
        this.getCountryList()
    }
    getCountryList = (() => {
        Axios.get('http://localhost:33456/api/admin/getListCountry').then(
            (res) => {
                this.state.myCountryList = res.data;
                this.setState(this);
            }
        );
    })
    render() {
        return (
            <div className="container">
                <div className="py-4">
                    <div className="row">
                    <div className="col">
                            <AddCountry/>
                        </div>
                        <div className="col">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button"><FaIcon.FaSearch/></button>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <table className="table border shadow">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Country's Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.myCountryList.map((val, key) => (
                                <tr>
                                    <th scope="row">{val.ID_QUOCGIA}</th>
                                    <td>{val.TEN_QUOCGIA}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary mx-1" to={`/country/edit/${val.ID_QUOCGIA}`}>Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/*Phân trang*/}
            </div>
        )
    }
}
