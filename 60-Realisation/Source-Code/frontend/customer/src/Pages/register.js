import React, { Component, createRef } from 'react';
import Axios from 'axios';

export class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.loginNameRef = createRef();
        this.loginPWRef = createRef();
        this.rePasswordRef = createRef();
        this.state={
            id: -1,
            errorName: "",
            loginSuccess: false
        }
    }
    confirmLogin = () =>{
        if(this.loginNameRef.current.value==""||this.loginPWRef.current.value==""||this.rePasswordRef.current.value==""){
            this.state.errorName="Phải nhập đủ thông tin!";
            this.setState(this);
        }
        else if(this.loginPWRef.current.value!=this.rePasswordRef.current.value){
            this.state.errorName="Nhập lại mật khẩu không chính xác!";
            this.setState(this);
        }
        else{
            Axios.post('http://localhost:33456/api/customer/register',{
                "username": this.loginNameRef.current.value,
                "password": this.loginPWRef.current.value
            }).then((response)=>{
                if(response.data = "Trùng tên tài khoản"){
                    this.state.errorName="Tên tài khoản đã tồn tại!";
                    this.setState(this);
                }
                else{
                    this.state.id = parseInt(response.data);
                    this.state.errorName="";
                    this.state.loginSuccess = true;
                    this.setState(this);
                    this.props.callback(response.data)
                }
                
            });
        }
        
        
    }
    render(){
        if(this.state.loginSuccess){
            return (
                <div className="mainZone">
                    <div className="card">
                        <label className="titleText">Đăng ký thành công!</label>
                        </div>
                </div>
                
              );
        }
        else{
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
                            <input className="inputBox" type = "password" placeholder="Nhập lại mật khẩu..." ref={this.rePasswordRef} ></input>
                            <br/>
                            <div className="button" onClick={this.confirmLogin}>Đăng ký</div>
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
                            <input className="inputBox" type = "password" placeholder="Nhập lại mật khẩu..." ref={this.rePasswordRef} ></input>
                            <br/>
                            <div className="button" onClick={this.confirmLogin}>Đăng ký</div>
                        </div>
                    </div>
                    
                  );
            }
        }
    }
}

export default RegisterForm
