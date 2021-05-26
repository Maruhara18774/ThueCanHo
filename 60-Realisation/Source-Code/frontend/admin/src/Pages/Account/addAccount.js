
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import React, { Component } from "react";

class AddAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameAcc: "",
            passwordAcc: "",
            roleAcc: "",
        }
    }

    handleChange =(e) => {
        const getName= e.target.name;
        const getValue = e.target.value;
        this.setState({[getName]: getValue});
    }
    onSubmit = (e) => {     
        const {history} =this.props
        
        e.preventDefault();
        Axios.post('http://localhost:33456/api/admin/addAccount', {
            "username": this.state.usernameAcc,
            "password": this.state.passwordAcc,
            "role": this.state.roleAcc
        }).then((res)=>{
            console.log(res.data)
        })
        history.push('/account')
    }
    render() {
        return (
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add Account</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Enter Username" name="usernameAcc" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Enter Password" name="passwordAcc" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Enter Role" name="roleAcc" onChange={this.handleChange} />
                        </div>

                        <button className="btn btn-primary btn-block">Add Account</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddAccount;
