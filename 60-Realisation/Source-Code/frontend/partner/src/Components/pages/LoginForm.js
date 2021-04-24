import { Component, createRef } from "react";
import "../../style/pages/LoginForm.scss";
import { Link } from "react-router-dom";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.loginNameRef = createRef();
    this.loginPWRef = createRef();
  }
  confirmLogin = async () => {
    await axios
      .post("http://localhost:3000/api/user/signin", {
        username: this.loginNameRef.current.value,
        password: this.loginPWRef.current.value,
      })
      .then((result) => {
        alert(result.data);
      })
      .catch((error) => {
        alert(error.toJSON());
      });
  };
  render() {
    return (
      <div className="flexbox">
        <div className="container">
          <div className="card">
            <h3>Traveloka Tera</h3>
            <div className="card-body">
              <h4 className="card-title">Welcome back!</h4>

              <p className="card-text">
                Log in to manage your accommodation from checking reservations
                to managing room availability!
              </p>
              <div className="login-form">
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

                <span className="form-label">Your password</span>
                <i class="fa fa-lock fa-lg position-absolute icon"></i>
                <input
                  type="password"
                  placeholder="Enter your password here"
                  ref={this.loginPWRef}
                ></input>
                <a className="login-form-forgot" href="/#">
                  Forgot your password
                </a>
                <button onClick={this.confirmLogin} id="btn-login">Log in</button>
              </div>
              <div className="line-spacing"></div>

              <p>
                Not yet a partner? <Link to="/register">Register here</Link>
              </p>

              <div className="line-spacing"></div>

              <div className="icon">
                <a href="/#">
                  <img
                    src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.15752-9/171394894_279771510359855_1592770365183563183_n.png?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_ohc=2qpQhAHDsD4AX9LHDEz&_nc_ht=scontent.fsgn4-1.fna&oh=df97f886d8443fc908d106ccf9bded4a&oe=609A6CA1"
                    alt="logostore"
                  />
                </a>
                <a href="/#">
                  <img
                    src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/171809966_301492954709103_1844160620762849620_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=wCIGKhoA_IMAX-1UTVu&_nc_ht=scontent.fsgn3-1.fna&oh=e0b2b96897f7f31aa82040e5bde07d08&oe=6098B802"
                    alt="logostore"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
