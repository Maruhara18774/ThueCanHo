import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import React, { Component } from 'react'

class EditAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idAccount: "",
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
        Axios.post(`http://localhost:33456/api/admin/updateAccount`, {
            "username": this.state.username,
            "password": this.state.password,
            "role": this.state.role.title
        }).then((res) => {
            console.log(res.data)
            alert("Editing Success!")
        })
        history.push("/account")
        
    }
    render() {
        return (
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit Account</h2>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                            <label>ID: {this.props.idAccount}</label>
                        </div>             
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control form-control-lg" name="username" onChange={this.handleChange} value={this.props.username}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="form-control form-control-lg" name="password" onChange={this.handleChange} value={this.props.password}/>
                        </div>        
                        <div className="form-group">
                            <label>Role</label>
                            <select className="form-control form-control-lg" value ={this.props.role} onChange={this.changeRole}>
                                {this.state.role.map((val, index) => 
                                    <option key={val.id} value={val.title}>{val.title}</option>
                                )}
                            </select>
                        </div>                   
                        <button className="btn btn-warning btn-block text-white">Update Account</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditAccount;






