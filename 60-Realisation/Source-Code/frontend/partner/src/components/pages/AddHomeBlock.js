/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import "../../style/pages/AddHomeBlock.css";
import Navbar from "../paner-form/Navbar";
import axios from "axios";
//import { Link } from "axios";
class AddHomeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idTk: localStorage.getItem("idTk").toString(),
			idTT: 0,
    };
  } 
  handleSubmit = () => {
    axios.post("https://rental-apartment-huflit.herokuapp.com/api/partner/checkContactExist",{
			idTk: this.state.idTk,
		}).then((response) => {
			console.log(response.data);
			this.state.idTT = response.data;
			this.setState(this);
      if (this.state.idTT !== null) {
        this.props.history.push(
          "/registrationDetail/generationInformation/" + this.state.idTT
        );
      } 
    }).catch((error) => {
      if(error.response.status === 500){
        this.props.history.push(
          "/registrationDetail/mainContact/" + localStorage.getItem("idTk")
        );
      }
    });
  };
  showList = () => {
    this.setState(this);
    if (this.state.idtk !== "0") {
      this.props.history.push("/lstApartment/" + localStorage.getItem("idTk"));
    }
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="c-block responsiveContainer">
          <div className="c-block">
            <div className="c-flexbox css-19psm70">
              <div className="c-block card">
                <div className="c-block">
                  <p className="c-text css-n0mx2z">
                    <span>I already have accommodation listed in TERA</span>
                  </p>
                </div>
                <div className="c-block">
                  <span className="c-text css-1d279ga">
                    <span>
                      Ask your Market Manager to link your account to the
                      accommodation that you have listed
                    </span>
                  </span>
                </div>
                <div className="c-block css-btn-edit">
                  <div className="c-flexbox css-1bvc4cc">
                    <button
                      onClick={() => this.showList()}
                      type="button"
                      className="c-btn c-btn--theme-tera c-btn--variant-default c-btn--size-sm c-btn--has-icon css-7mp1uz btn btn--primary btn--small "
                    >
                      <span>
                        <span>Your Apartments</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="c-block card">
                <div className="c-block">
                  <p className="c-text css-n0mx2z">
                    <span>I want to list a new accommodation</span>
                  </p>
                </div>
                <div className="c-block">
                  <span className="c-text css-1d279ga">
                    <span>
                      We're happy to hear that! Click the button below to begin
                      listing your new accommodation. The registration process
                      may take up to 15 minutes.
                    </span>
                  </span>
                </div>
                <div className="c-block">
                  <div className="c-flexbox css-1bvc4cc">
                    <button
                      onClick={() => this.handleSubmit()}
                      type="button"
                      className="c-btn c-btn--theme-tera c-btn--variant-default c-btn--size-sm c-btn--has-icon css-7mp1uz btn btn--primary btn--small"
                    >
                      <i className="fa fa-plus fa-fw" aria-hidden="true"></i>
                      <span>
                        <span>List New Accommodation</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="c-block css-end"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AddHomeBlock;
