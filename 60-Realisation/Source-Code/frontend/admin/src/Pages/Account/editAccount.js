import { Link, useParams } from "react-router-dom";
import Axios from "axios";

import React, { Component } from 'react'

class EditAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameAcc: "",
            passwordAcc: "",
            roleAcc: "",
        }
    }

    handleChange = (e) => {
        const getName = e.target.name;
        const getValue = e.target.value;
        this.setState({ [getName]: getValue });
    }
    onSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:33456/api/admin/updateAccount', {
            "username": this.state.usernameAcc,
            "password": this.state.passwordAcc,
            "role": this.state.roleAcc
        }).then((res) => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit Account</h2>
                    <form onSubmit={this.onSubmit}>             
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" name="usernameAcc" placeholder="Username" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" name="passwordAcc" placeholder="Password" onChange={this.handleChange} />
                        </div>        
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" name="roleAcc" placeholder="Role" onChange={this.handleChange} />
                        </div>                     
                        <button className="btn btn-warning btn-block">Update Account</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditAccount;
