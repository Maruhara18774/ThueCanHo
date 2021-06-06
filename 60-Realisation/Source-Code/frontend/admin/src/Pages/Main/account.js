import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import * as FaIcon from 'react-icons/fa'

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myList: []
        };
        this.getList();
        // this.deleteAccount();
    }

    // Lay Data tu Server
    getList = (() => {
        Axios.get('http://localhost:33456/api/admin/getListAccount').then(
            (res) => {
                this.state.myList = res.data; //Chen Data vao myList
                this.setState(this);
            }
        );
    })

    handleCallback = (newList) =>{
        this.state.myList = newList;
        this.setState(this);
    }

    deleteUser = (idTK) => {
        Axios.post('http://localhost:33456/api/admin/deleteAccount', { id: idTK.toString()}).then(
             (res) => {
                 console.log(res.data);
                 this.getList();
             }
         )
    };
    render() {
        return (
            <div className="container">
                <div className="py-4">
                    <h1>Account Management</h1>
                    <div className="row">
                    <div className="col">
                            <Link className="btn btn-primary mr-2" to={`/account/add`}>Add</Link>
                        </div>
                        <div className="col">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Tìm kiếm"/>
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
                                <th scope="col">Username</th>
                                <th scope="col">Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.myList.map((val, key) => (
                                <tr>
                                    <th scope="row">{val.ID_TAIKHOAN}</th>
                                    <td>{val.TEN_TAIKHOAN}</td>
                                    <td>{val.ROLE_TAIKHOAN}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-1" to={`/account/${val.ID_TAIKHOAN}`}>View</Link>  
                                        <Link className="btn btn-outline-primary mx-1" to={`/account/edit/${val.ID_TAIKHOAN}`}>Edit</Link>
                                        <Link className="btn btn-danger mx-1" onClick={() => this.deleteUser(val.ID_TAIKHOAN)}>Delete</Link>
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

export default Account


