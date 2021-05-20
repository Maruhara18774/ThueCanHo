import Axios from 'axios'
import { Component} from 'react'
import './login.css'
import { Link, Redirect } from 'react-router-dom'
import { createRef } from 'react'

export default class login extends Component {
    constructor(props){
        super(props)
        this.loginNameRef = createRef();
        this.loginPWRef = createRef();
        this.state = {
            isLogin: false
        }  
    }

    confirmLogin = () => {
            this.setState({
                isLogin: true
            })
        console.log(this.state.isLogin)
        Axios.post('http://localhost:33456/api/admin/signin', {
            "username": this.loginNameRef.current.value,
            "password": this.loginPWRef.current.value
        }).then((res) => {
            alert(res.data)
        })
    }

    render() {
        return (
            <div>
                 <div className='box'>
                    <h2>trAveloka</h2>
                    <div className="box-login">
                        <span>Username</span>
                        <input type='text' placeholder="Enter your username here" ref={this.loginNameRef}></input>
                        <span>Password</span>
                        <input type='password' placeholder="Enter your password here" ref={this.loginPWRef}></input>
                        <span><a href="/">Forget your password</a></span>
                    </div>
                   <input type='submit' value='Đăng nhập' onClick={this.confirmLogin}></input>
                </div>
            </div>
        )
    }
}


