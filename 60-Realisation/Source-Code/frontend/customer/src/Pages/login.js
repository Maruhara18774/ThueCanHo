import {Component,createRef} from 'react';
import Axios from 'axios';
import './login.css'


class Login extends Component{
    constructor(props){
        super(props);
        this.loginNameRef = createRef();
        this.loginPWRef = createRef();
    }
    confirmLogin = () =>{
        Axios.post('http://localhost:33456/api/customer/signin',{
            "username": this.loginNameRef.current.value,
            "password": this.loginPWRef.current.value
        }).then((response)=>{
            alert(response.data);
        });
    }
    render(){
        return (
            <div className="mainZone">
                <div className="card">
                    <label className="titleText">Đăng nhập</label>
                    <br/>
                    <input className="inputBox" type = "text" placeholder="Nhập tên đăng nhập ..." ref={this.loginNameRef} ></input>
                    <br/>
                    <input className="inputBox" type = "password" placeholder="Nhập mật khẩu..." ref={this.loginPWRef} ></input>
                    <br/>
                    <div className="button" onClick={this.confirmLogin}>Đăng nhập</div>
                </div>
            </div>
            
          );
    }

}

export default Login;