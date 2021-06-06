import {Component,createRef} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './login.css'
import {BrowserRouter as Router,Switch,Route, Link, BrowserRouter} from 'react-router-dom';
import NavbarLogged from '../Components/nav-bar-logged';


class Login extends Component{
    constructor(props){
        super(props);
        this.loginNameRef = createRef();
        this.loginPWRef = createRef();
        this.state={
            id: -1,
            errorName: ""
        }
    }
    confirmLogin = () =>{
        if(this.loginNameRef.current.value==""||this.loginPWRef.current.value==""){
            this.state.errorName="Phải nhập tên đăng nhập và mật khẩu!";
            this.setState(this);
        }
        else{
            Axios.post('http://localhost:33456/api/customer/signin',{
                "username": this.loginNameRef.current.value,
                "password": this.loginPWRef.current.value
            }).then((response)=>{
                this.state.id = parseInt(response.data);
                this.setState(this);
                if(this.state.id != 0){
                    this.state.errorName="";
                    this.setState(this);
                    ReactDOM.render(
                        <NavbarLogged id= {this.state.id.toString()} name={this.loginNameRef.current.value}/>
                        , document.getElementById('loginInfo'));
                    this.props.history.push('/apaLst');
                }
                else{
                    this.state.errorName="Nhập sai tên đăng nhập/ mật khẩu!";
                    this.setState(this);
                }
            });
        }
        
        
    }
    render(){
        if(this.state.errorName==""){
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
        else{
            return (
                <div className="mainZone">
                    <div className="card">
                        <label className="titleText">Đăng nhập</label>
                        <br/>
                        <p class="text-danger">{this.state.errorName}</p>
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

}

export default Login;