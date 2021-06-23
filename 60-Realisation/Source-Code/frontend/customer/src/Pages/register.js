import React, { Component, createRef } from 'react';
import Axios from 'axios';

export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.loginNameRef = createRef();
        this.loginPWRef = createRef();
        this.rePasswordRef = createRef();
        this.state = {
            id: -1,
            errorName: "",
            loginSuccess: false
        }
    }
    confirmLogin = () => {
        if (this.loginNameRef.current.value == "" || this.loginPWRef.current.value == "" || this.rePasswordRef.current.value == "") {
            this.state.errorName = "Phải nhập đủ thông tin!";
            this.setState(this);
        }
        else if (this.loginPWRef.current.value != this.rePasswordRef.current.value) {
            this.state.errorName = "Nhập lại mật khẩu không chính xác!";
            this.setState(this);
        }
        else {
            var confirm = true;
            Axios.get('https://oka1kh.azurewebsites.net/api/users')
                .then(response => {
                    response.data.Users.forEach(element => {
                        if (element.email == this.loginNameRef.current.value) {
                            confirm = false;
                            this.state.errorName = "Email đã tồn tại trong hệ thống!";
                            this.setState(this);
                        }
                    });
                })
            if (confirm) {
                Axios.post('https://oka1kh.azurewebsites.net/api/user', {
                    "email": this.loginNameRef.current.value,
                    "pass": this.loginPWRef.current.value
                }).then((response) => {
                    console.log(response.data);
                    if (response.data.status == "SUCCES") {
                        this.state.id = parseInt(response.data.created[0].userId);
                        this.state.errorName = "";
                        this.state.loginSuccess = true;
                        this.setState(this, () => {
                            this.props.callback(this.state.id);
                        });
                    }
                    else {
                        this.state.errorName = "Lỗi kết nối ...";
                        this.setState(this);
                    }
                });
            }

        }


    }
    render() {
        if (this.state.loginSuccess) {
            return (
                <div className="mainZone">
                    <div className="card">
                        <label className="titleText">Đăng ký thành công!</label>
                    </div>
                </div>

            );
        }
        else {
            if (this.state.errorName == "") {
                return (
                    <div className="mainZone">
                        <div className="card">
                            <label className="titleText">Đăng ký</label>
                            <br />
                            <input className="inputBox" type="text" placeholder="Nhập tên đăng nhập ..." ref={this.loginNameRef} ></input>
                            <br />
                            <input className="inputBox" type="password" placeholder="Nhập mật khẩu..." ref={this.loginPWRef} ></input>
                            <br />
                            <input className="inputBox" type="password" placeholder="Nhập lại mật khẩu..." ref={this.rePasswordRef} ></input>
                            <br />
                            <div className="button" onClick={this.confirmLogin}>Đăng ký</div>
                        </div>
                    </div>

                );
            }
            else {
                return (
                    <div className="mainZone">
                        <div className="card">
                            <label className="titleText">Đăng ký</label>
                            <br />
                            <p class="text-danger">{this.state.errorName}</p>
                            <input className="inputBox" type="text" placeholder="Nhập tên đăng nhập ..." ref={this.loginNameRef} ></input>
                            <br />
                            <input className="inputBox" type="password" placeholder="Nhập mật khẩu..." ref={this.loginPWRef} ></input>
                            <br />
                            <input className="inputBox" type="password" placeholder="Nhập lại mật khẩu..." ref={this.rePasswordRef} ></input>
                            <br />
                            <div className="button" onClick={this.confirmLogin}>Đăng ký</div>
                        </div>
                    </div>

                );
            }
        }
    }
}

export default RegisterForm
