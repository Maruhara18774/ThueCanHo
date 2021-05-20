
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Account = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3030/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3030/users/${id}`);
        loadUsers();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Account Management</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>                                  
                                    <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                    <Link className="btn btn-primary mr-2" to={`/users/add`}>Add</Link>
                                    <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                    <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Account;
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

    // deleteUser = async id => {
    //     await axios.delete(`http://localhost:3030/users/${id}`);
    //     loadUsers();
    // };
    render() {
        return (
            <div className="container">
                <div className="py-4">
                    <h1>Account Management</h1>
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Tìm kiếm"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button"><FaIcon.FaSearch/></button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <Link className="btn btn-primary mr-2" to={`/account/add`}>Add</Link>
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
                                        <Link className="btn btn-primary mr-2" to={`/account/${val.ID_TAIKHOAN}`}>View</Link>  
                                        <Link className="btn btn-outline-primary mr-2" to={`/account/edit/${val.ID_TAIKHOAN}`}>Edit</Link>
                                        {/* <Link className="btn btn-danger" onClick={() => deleteUser(val.id)}>Delete</Link> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Account


