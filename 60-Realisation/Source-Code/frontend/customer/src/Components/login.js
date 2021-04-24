import {Component,createRef} from 'react';
import Axios from 'axios';


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