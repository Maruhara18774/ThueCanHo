/* eslint-disable react/no-direct-mutation-state */
import {Component, createRef} from 'react';
import '../../style/pages/RegisterForm.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idTk: 50,
      role: 'CHBT',
      errorCatch: {}
    };
    this.loginNameRef = createRef();
    this.loginPWRef = createRef();
    this.shortName = createRef();
  }
  confirmRegister = () => {
    axios
      .post('https://gift-api-v1.herokuapp.com/partner/register', {
        ten_doanh_nghiep: "",
        sdt: "",
        email: this.loginNameRef.current.value,
        mat_khau: this.loginPWRef.current.value,
        ten_viet_tat: this.shortName.current.value,
        nguoi_dai_dien: 'Apartment',
      })
      .then((result) => {
        //alert(result.data.code)
        if(result.data.code === "ER_DUP_ENTRY"){
          alert("Email or Short Name are already exits")
        } else {
          this.props.history.push('/');
        }
        
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  confirmRegister2 = () => {
    axios
      .post('https://oka1kh.azurewebsites.net/api/partner', {
        partnerUsername: this.loginNameRef.current.value,
        partnerPass: this.loginPWRef.current.value,
        partnerRole: this.state.role,
      })
      .then((result) => {
        alert(result.data);
        this.props.history.push('/');
      })
      .catch((error) => {
        alert(error.data);
      });
  };
  render() {
    return (
      <div className="flexbox">
        <div className="container">
          <div className="card">
            <h3>Traveloka Tera</h3>
            <div className="card-body">
              <h5 className="card-title">Create New Tera Account</h5>

              <p className="card-text">
                List your property at Traveloka and let us help you connect with
                millions of guests!
              </p>
              <div className="reg-form">
                <span className="form-label">Your Short Name</span>
                <i className="fa fa-lock fa-lg position-absolute icon"></i>
                <input
                  type="text"
                  placeholder="Enter your password here"
                  ref={this.shortName}
                  style={{width: '100%'}}
                ></input>
                <span className="form-label">Your email address</span>
                <i className="fa fa-envelope icon"></i>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Enter your email address here"
                  ref={this.loginNameRef}
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                ></input>
                <span className="form-label">Your password</span>
                <i className="fa fa-lock fa-lg position-absolute icon"></i>
                <input
                  type="password"
                  placeholder="Enter your password here"
                  ref={this.loginPWRef}
                ></input>

                <button onClick={() => this.confirmRegister()} id="btn-next">
                  Register
                </button>
              </div>
              <div className="line-spacing"></div>
              <p>
                Already have an account?{' '}
                <Link
                  to="/"
                  style={{color: 'rgb(88, 153, 214)', fontWeight: '600'}}
                >
                  Log in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
