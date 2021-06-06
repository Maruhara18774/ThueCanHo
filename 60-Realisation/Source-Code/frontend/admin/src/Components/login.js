import Axios from 'axios'
import { Component, createRef } from 'react'
import { useHistory } from 'react-router';
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.loginNameRef = createRef();
        this.loginPWRef = createRef();
    }
    confirmLogin = () => {
        const {history} = this.props;
        Axios.post('http://localhost:33456/api/admin/signin', {
            "username": this.loginNameRef.current.value,
            "password": this.loginPWRef.current.value
        }).then((response) => {
            alert(response.data);
        });
        history.push("/")
    }
    render() {
        return (
            <div className="bg-login">
            {/* <div className='box'>
                <h2>trAveloka</h2>
                <div className="box-login">
                    <span>Email</span>
                        <input type='email' placeholder="Enter your email here" ref={this.loginNameRef}></input>                         
                    <span>Password</span>
                        <input type='password' placeholder="Enter your password here" ref={this.loginPWRef}></input>                           
                </div>
                <input type='submit' name='' value='Đăng nhập' onClick={this.confirmLogin}></input>
            </div> */}
            <div className="container form-login">               
                <div className='form-inner'>
                <p className="title">trAveloka</p>
                    <div className="form-content">
                        <label className="form-label">Username</label>
                        <input className="form-input" type="text" ref={this.loginNameRef}/> 
                    </div>                  
                    <div className="form-content">
                        <label className="form-label">Password</label>
                        <input className="form-input" type="password" ref={this.loginPWRef}/> 
                    </div>  
                    <button className="form-button" onClick={this.confirmLogin}>Login</button>
                </div>
            </div>
        </div>
        )
    }
}
export default Login;