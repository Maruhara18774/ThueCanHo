
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import React, { Component } from "react";
const AddAccount = () => {
    let history = useHistory();
    const [account, setAccount] = useState({
        username: "",
        password: "",
        role: "",
    });

    const { username, password, role} = account;
    const onInputChange = e => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:33456/api/admin/addAccount', {
            "username": account.username,
            "password": account.password,
            "role": account.role
        }).then((res) => {
            console.log(res.data)
        })
        history.push("/account");
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Username" name="username" value={username} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Password" name="password" value={password} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Role" name="role" value={role} onChange={e => onInputChange(e)} />
                    </div>

                    <button className="btn btn-primary btn-block">Add Account</button>
                </form>
            </div>
        </div>
    );
};

export default AddAccount;
