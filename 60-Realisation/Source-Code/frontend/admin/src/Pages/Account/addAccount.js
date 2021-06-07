import Axios from 'axios'
import React, { Component } from "react";

import * as FaIcons from 'react-icons/fa'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class AddAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            role: [{id: 1, title: "Admin"}, {id: 2, title: "Customer"}, {id: 3, title: "Partner"}],
        }
    }

    handleChange =(e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    changeRole = (e) => {
        this.state.role.title = e.target.value
        this.setState(this)
    }
    onSubmit = (e) => {     
        const {history} = this.props
        e.preventDefault();
        Axios.post('http://localhost:33456/api/admin/addAccount', {
            "username": this.state.username,
            "password": this.state.password,
            "role": this.state.role.title
        }).then((res)=>{
            console.log(res.data)
            alert("Adding Success!")
        })
        history.push("/account")
    }
    render() {
        return (       
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Thêm Tài khoản</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên đăng nhập</label>
                            <input type="text" className="form-control form-control-lg" name="username" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <input type="text" className="form-control form-control-lg" name="password" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Loại Tài khoản</label>
                            <select className="form-control form-control-lg" value ={this.state.role.title} onChange={this.changeRole}>
                                {this.state.role.map((val, index) => 
                                    <option key={val.id} value={val.title}>{val.title}</option>
                                )}
                            </select>
                        </div>

                        <button className="btn btn-warning btn-block text-white">Thêm</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddAccount;


