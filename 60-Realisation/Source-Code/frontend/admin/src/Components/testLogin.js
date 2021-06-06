import React from 'react'
import {useRef} from 'react'
import Axios from 'axios'
import './login.css'
function TestLogin() {

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    const confirmLogin = () => {
        Axios.post('http://localhost:33456/api/admin/signin', {
                "username": usernameRef.current.value,
                "password": passwordRef.current.value
            }).then((response) => {
                alert(response.data);
            });
    }
    return (
        <div>
            <div className='box'>
                <h2>trAveloka</h2>
                <div className="box-login">
                    <span>Email</span>
                        <input type='email' placeholder="Enter your email here" ref={usernameRef}></input>                         
                    <span>Password</span>
                        <input type='password' placeholder="Enter your password here" ref={passwordRef}></input>                           
                    <span><a href="/">Forget your password</a></span>
                </div>
                <input type='submit' name='' value='Đăng nhập' onClick={confirmLogin}></input>
            </div>
        </div>
    )
}
export default TestLogin
