import {Component,createRef} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './login.css'


class Login extends Component{
    constructor(props){
        super(props);
        this.loginNameRef = createRef();
        this.loginPWRef = createRef();
        this.state={
            id: -1,
            errorName: "",
            loginSuccess: false
        }
    }
    confirmLogin = () =>{
        if(this.loginNameRef.current.value==""||this.loginPWRef.current.value==""){
            this.state.errorName="Phải nhập tên đăng nhập và mật khẩu!";
            this.setState(this);
        }
        else{
            Axios.post('https://gift-api-v1.herokuapp.com/customer/login',{
                "email": this.loginNameRef.current.value,
                "mat_khau": this.loginPWRef.current.value
            }).then((response)=>{
                this.state.id = response.data.id;
                this.setState(this);
                if(this.state.id != 0){
                    this.state.errorName="";
                    this.state.loginSuccess = true;
                    this.setState(this);
                    this.props.callback(this.state.id)
                }
                else{
                    this.state.errorName="Nhập sai tên đăng nhập/ mật khẩu!";
                    this.setState(this);
                }
            });
        }
        
        
    }
    render(){
        if(this.state.loginSuccess){
            return (
                <div className="mainZone">
                    <div className="card">
                        <label className="titleText">Đăng nhập thành công!</label>
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

}

export default Login;