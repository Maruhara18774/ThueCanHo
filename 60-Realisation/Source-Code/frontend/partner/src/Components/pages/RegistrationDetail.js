/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import "../../RegistrationDetail.css";
import Navbar from "../paner-form/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainContact from "../pages/MainContact";
import GenerationInformation from "../pages/GenerationInformation";
import PropertyFacilities from "../pages/PropertyFacilities";
import Rooms from "../pages/Rooms";
import RoomFacilities from "../pages/RoomFacilities";
class RegistrationDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      accountID: 0,
    };
  }
  setLogged = (id) => {
    this.state.accountID = id;
    if (this.state.logged) {
      this.state.logged = false;
      this.setState(this);
    } else {
      this.state.logged = true;
      this.setState(this);
    }
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar isLogged={this.state.logged} id={this.state.accountID} />
          <Switch>
            <Route
              path="/registrationDetail/mainContact/:idTk"
              component={MainContact}
            />
            <Route
              path="/registrationDetail/generationInformation/:idMain"
              component={GenerationInformation}
            />
            <Route
              path="/registrationDetail/propertyFacilities/:idNha"
              component={PropertyFacilities}
            />
            <Route path="/registrationDetail/rooms/:idNha" component={Rooms} />
            <Route
              path="/registrationDetail/roomFacilities"
              component={RoomFacilities}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default RegistrationDetail;
