import Axios from 'axios'
import { Component} from 'react'
import './login.css'
import { Link, Redirect } from 'react-router-dom'

export default class login extends Component {
    constructor(props){
        super(props)
        
        /*Thuộc tính (property) state, chứa trạng thái isLogin(Đã đăng nhập)*/ 
        this.state = {
            isLogin: false
        }  
    }

    confirmLogin = () => {
        /*Kiểm tra Thông tin tài khoản và thay đổi State nếu thỏa điều kiện*/
        if (this.loginNameRef != null && this.loginPWRef){
            this.setState({
                isLogin: true
            })
        }
        console.log(this.state)
        console.log(this.loginNameRef.value, this.loginPWRef.value)
        Axios.post('http://localhost:33456/api/admin/signin', {
            "username": this.loginNameRef.current.value,
            "password": this.loginPWRef.current.value
        }).then((res) => {
            alert(res.data)
        })
    }

    render() {
        /*Kiểm tra isLogin và chuyển trang đến Admin Management*/
        if(this.state.loggedIn === true){
            return <Redirect to='/account'/>
        }
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

// import React, { Component } from 'react'

// class Login extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             username: '',
//             passwor: ''
//         }
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         })
//     }

//     handleSubmit = (e) => {
//         fetch('http://localhost:33456/api/admin/signin', {
//             method: 'POST',
//             body: JSON.stringify({ signin: this.state }),
//             header: new Headers({
//                 'Content-Type': 'application/json'
//             })
//         }).then(
//             (res) => res.json()
//         ).then(
//             (data) => {
//                 this.props.setToken(data.sessionToken)
//             })
//         e.preventDefault()
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Đăng nhập (test)</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <div className="form-group">
//                         <label for="username">Username</label>
//                         <input id ="username" type="text" name="username" placeholder="Enter your Username" onChange={this.handleChange}></input>
//                     </div>
//                     <div className="form-group">
//                     <label for="password">Password</label>
//                         <input id ="password" type="password" name="password" placeholder="Enter your Password" onChange={this.handleChange}></input>
//                     </div>
//                     <button type="submit">Đăng nhập</button>
//                 </form>
//             </div>
//         )
//     }
// }
//export default Login







// import Axios from 'axios'
// import React, { Component } from 'react'
// import './login.css'
// import {Redirect} from 'react-router-dom'

// export default class Login extends Component {
//     constructor(props) {
//         super(props)
//         const token = localStorage.getItem("token")

//         let loggedIn = true
//         if( token == null){
//             loggedIn = false
//         }

//         this.state = {
//             email: '',
//             password: '',
//             loggedIn
//         }

//         this.onChange = this.onChange.bind(this)
//         this.submitForm = this.submitForm.bind(this)
//     }

//     onChange(e){
//         this.setState({
//             [e.target.email]: e.target.value
//         })
//     }

//     submitForm(e){
//         e.preventDefault()
//         const {email, password } = this.state
//         if( email != null && password != null)
//         {
//             localStorage.setItem("token","werhyweriuwhifuhweifuw")
//             this.setState({
//                 loggedIn: true
//             })
//         }
//     }
//     //Logout
//     // localStorage.removeItem("token")
//     render() {
//         if(this.state.loggedIn){
//             return <Redirect to='/admin/account'/>
//         }
//         return (
//             <div>
//                 <h2>Login</h2>
//                 <form onSubmit={this.submitForm}>
//                     <input type="email" placeholder="Enter your Email" name="email" value={this.state.email} onChange={this.onChange}/>
//                     <br/>
//                     <input type="password" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.onChange}/>
//                     <br/>
//                     <button type="button" onClick={this.}>Login</button>
//                 </form>
//             </div>
//         )
//     }
// }




