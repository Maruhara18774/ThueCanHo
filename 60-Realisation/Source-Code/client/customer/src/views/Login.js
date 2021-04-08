import {Component, createRef, useState} from 'react';

//const [loginName, setLoginName] = useState("");
//const [loginPW, setLoginPW] = useState("");

class Login extends Component{
    
    constructor(props){
        super(props);
        this.loginNameRef = createRef();
        this.loginPWRef = createRef();
    }
    confirmLogin = () =>{
        alert(this.loginNameRef.current.value + " - "+ this.loginPWRef.current.value)
    }
    render(){
        return (
            <div>
                <label>Đăng nhập</label>
                <br/>
                <input type = "text" placeholder="Nhập tên đăng nhập ..." ref={this.loginNameRef} ></input>
                <br/>
                <input type = "text" placeholder="Nhập mật khẩu..." ref={this.loginPWRef} ></input>
                <br/>
                <button onClick={this.confirmLogin}>Đăng nhập</button>
            </div>
            
          );
    }
    
}

export default Login;