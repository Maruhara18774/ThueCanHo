import React from "react";
import { Link } from "react-router-dom";
import "../../style/paner-form/Navbar.css";
import { Button, ButtonLogIn } from "../paner-form/Button";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idUser: localStorage.getItem("idTk"),
      email: localStorage.getItem("email"),
      click: false,
      logged: false,
    };
  }
  handleClick = () => {
      window.localStorage.clear()
  };
  render() {
    const { idUser, email } = this.state;
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo"  >
              OKA Tera <i className="fab fa-typo3" />
            </Link>
            <div className="menu-icon">
              <i
                className={this.state.click ? "fas fa-times" : "fas fa-bars"}
              />
            </div>
            <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-links"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/AddHomeBlock/" + localStorage.getItem("idTk")}
                  className="nav-links"
                >
                  Products
                </Link>
              </li>
            </ul>
            <div className="verticalLine"></div>
            {idUser !== null ? (
              <div className="nav-item dropdown">
                <a
                  href="/#"
                  data-toggle="dropdown"
                  className="nav-item nav-link dropdown-toggle user-action"
                >
                  <div style={{ display: "inline-block", fontSize: "15px" }}>
                    <p>You login as: </p>
                    <p>{email}</p>
                    <b className="caret"></b>
                  </div>
                </a>
                <div className="dropdown-menu">
                  <Link to="/detailAndEditProfile" className="dropdown-item">
                    <i className="fa fa-user-o"></i> Profile
                  </Link>
                  <div className="divider dropdown-divider"></div>
                  <Link to="/" onClick={this.handleClick} className="dropdown-item">
                    <i className="material-icons">&#xE8AC;</i> Logout
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <ButtonLogIn buttonStype="btn--secondary">Log In</ButtonLogIn>
                <Button buttonStype="btn--outline">
                  Register Your Accommodation
                </Button>
              </>
            )}
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
