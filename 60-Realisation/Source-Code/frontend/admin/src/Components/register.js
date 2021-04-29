import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        fetch('http://localhost:33456/api/admin/signin', {
            method: 'POST',
            body: JSON.stringify({ signin: this.state }),
            header: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (res) => res.json()
        ).then(
            (data) => {
                this.props.setToken(data.sessionToken)
            })
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <h1>Đăng ký (test)</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input id="username" type="text" name="username" placeholder="Enter your Username" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input id="password" type="password" name="password" placeholder="Enter your Password" onChange={this.handleChange}></input>
                    </div>
                    <button type="submit">Đăng ký</button>
                </form>
            </div>
        )
    }
}

export default Register
