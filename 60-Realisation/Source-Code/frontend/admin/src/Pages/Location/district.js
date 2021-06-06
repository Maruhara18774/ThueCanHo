import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import * as FaIcon from 'react-icons/fa'

export default class District extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myDistrictList: []
        };
        this.getDistrictList()        
    }
    componentDidUpdate () {
        this.getDistrictList()
    }
    getDistrictList = (() => {
        Axios.get('http://localhost:33456/api/admin/getListDistrict').then(
            (res) => {
                this.state.myDistrictList = res.data;
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
                            <Link className="btn btn-primary mr-2" to={`location/district/add`}>Add</Link>
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
                                <th scope="col">District's Name</th>
                                <th scope="col">City's ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.myDistrictList.map((val, key) => (
                                <tr>
                                    <th scope="row">{val.ID_QUAN}</th>
                                    <td>{val.TEN_QUAN}</td>
                                    <td>{val.ID_THANHPHO}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary mx-1" to={`/district/edit/${val.ID_QUAN}`}>Edit</Link>
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




