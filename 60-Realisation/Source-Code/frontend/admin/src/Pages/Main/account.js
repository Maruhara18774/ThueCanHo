import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa'

import Navbar from '../../Components/navbar'
import Pagination from 'react-bootstrap/Pagination'

import EditAccount from '../Account/editAccount'
// import AddAccount from '../Account/addAccount'
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myList: [],
        };
        this.getList();
    }
    componentDidUpdate() {
        this.getList();
    }
    getList = (() => {
        Axios.get('http://localhost:33456/api/admin/getListAccount').then(
            (res) => {
                this.state.myList = res.data;
                this.setState(this);
            }
        );
    })
    editUser = (idEditTK) => {
        const { history } = this.props;
        Axios.post('http://localhost:33456/api/admin/getIdAccount', { id: idEditTK.toString() }).then(
            (res) => {
                this.state.accountById = res.data
                console.log(res.data);
                history.push(`/account/edit/${idEditTK}`)
            }
        )
    }
    deleteUser = (idTK) => {
        Axios.post('http://localhost:33456/api/admin/deleteAccount', { id: idTK.toString() }).then(
            (res) => {
                console.log(res.data);
                this.getList();
            }
        )
    };
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="py-4">
                        <h1>Account Management</h1>
                        <div className="row">
                            <div className="col">
                                {/* <AddAccount /> */}
                                <Link className="btn btn-primary" to={`/account/add`}><FaIcons.FaUserPlus /></Link>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button"><FaIcons.FaSearch /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table border shadow">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.myList.map((val, key) => (
                                    <tr>
                                        <th scope="row">{val.ID_TAIKHOAN}</th>
                                        <td>{val.TEN_TAIKHOAN}</td>
                                        <td>{val.MATKHAU}</td>
                                        <td>{val.ROLE_TAIKHOAN}</td>
                                        <td>
                                            <Link className="btn btn-primary mx-1" to={`/account/${val.ID_TAIKHOAN}`}>View</Link>
                                            <Link className="btn btn-outline-primary mx-1" onClick={() => this.editUser(val.ID_TAIKHOAN)}>Edit</Link>
                                            <Link className="btn btn-danger mx-1" onClick={() => this.deleteUser(val.ID_TAIKHOAN)}>Delete</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
        )
    }
}

export default Account


