import { Component } from "react";
import "../../style/pages/RegisterForm.scss";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
//import axios from "axios";

class RegisterForm extends Component {
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
                <span className="form-label">Your email address</span>
                <i class="fa fa-envelope icon"></i>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Enter your email address here"
                  ref={this.loginNameRef}
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                ></input>
                <button onClick={this.confirmLogin} id="btn-next">
                  Next
                </button>
              </div>
              <p>
                Already have an account? <Link to="/">Log in here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
