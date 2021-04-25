import Axios from 'axios'
import { Component, createRef } from 'react'
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.loginNameRef = createRef();
        this.loginPWRef = createRef();
    }
    confirmLogin = () => {
        Axios.post('http://localhost:33456/api/admin/signin', {
            "username": this.loginNameRef.current.value,
            "password": this.loginPWRef.current.value
        }).then((response) => {
            alert(response.data);
        });
    }
    render() {
        return (
            <div>
            <div className='box'>
                <h2>trAveloka</h2>
                <div className="box-login">
                    <span>Email</span>
                        <input type='email' placeholder="Enter your email here" ref={this.loginNameRef}></input>                         
                    <span>Password</span>
                        <input type='password' placeholder="Enter your password here" ref={this.loginPWRef}></input>                           
                    <span><a href="/">Forget your password</a></span>
                </div>
                <input type='submit' name='' value='Đăng nhập' onClick={this.confirmLogin}></input>
            </div>
        </div>
        )
    }
}
export default Login;