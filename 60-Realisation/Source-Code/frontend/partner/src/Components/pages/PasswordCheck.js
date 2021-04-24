import { Component } from "react";
import "../../style/pages/PasswordCheck.scss";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
//import axios from "axios";

class PasswordCheck extends Component {
  state = {
    value: 1,
  };
  render() {
    return (
      <div className="flexbox">
        <div className="container">
          <div className="card">
            <div className="title">
              <Link to="/register" className="register-link">
                <i class="fas fa-lg fa-arrow-left icon" />
              </Link>
              <h3>Traveloka Tera</h3>
            </div>

            <div className="card-body">
              <h5 className="card-title">Now—let's set up your password!</h5>
              <div className="password-form">
                <div className="radio-group">
                  <div className="radio-line">
                    <div class="radio-button">
                      <div class="checkList checkList-unchecked"></div>
                    </div>
                    <div class="radio-text">
                      <span>
                        <p>use at least 8 characters (A–Z, 0–9)</p>
                      </span>
                    </div>
                  </div>

                  <div className="radio-line">
                    <div class="radio-button">
                      <div class="checkList checkList-unchecked"></div>
                    </div>
                    <div class="radio-text">
                      <span>
                        <p>include lower case letters (a,b, and so on)</p>
                      </span>
                    </div>
                  </div>

                  <div className="radio-line">
                    <div class="radio-button">
                      <div class="checkList checkList-unchecked"></div>
                    </div>
                    <div class="radio-text">
                      <span>
                        <p>include upper case letters (A, B, and so on)</p>
                      </span>
                    </div>
                  </div>

                  <div className="radio-line">
                    <div class="radio-button">
                      <div class="checkList checkList-unchecked"></div>
                    </div>
                    <div class="radio-text">
                      <span>
                        <p>include numbers (1,2, and so on)</p>
                      </span>
                    </div>
                  </div>

                  <div className="radio-line">
                    <div class="radio-button">
                      <div class="checkList checkList-unchecked"></div>
                    </div>
                    <div class="radio-text">
                      <span>
                        <p>avoid including your username</p>
                      </span>
                    </div>
                  </div>
                </div>

                <span className="form-label">Your password</span>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordCheck;
