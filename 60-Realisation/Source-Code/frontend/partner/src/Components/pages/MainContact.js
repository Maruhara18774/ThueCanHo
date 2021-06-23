/* eslint-disable react/no-direct-mutation-state */
import React, { createRef } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../../RegistrationDetail.css";

class MainContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idTT: 0,
      idTk: document.location.pathname.substring(32),
    };
    this.fullName = createRef();
    this.email = createRef();
    this.phoneNumber = createRef();
    this.idenCode = createRef();
    this.idenType = createRef();
    this.country = createRef();
    this.gender = createRef();
    this.address = createRef();
    this.taxCode = createRef();
    this.idTK = createRef();
  }
  createContact = () => {
    Axios.post(
      "https://rental-apartment-huflit.herokuapp.com/api/partner/registrationDetail/contactRegistration",
      {
        fullName: this.fullName.current.value,
        email: this.email.current.value,
        phoneNumber: this.phoneNumber.current.value,
        idenCode: this.idenCode.current.value,
        idenType: this.idenType.current.value,
        country: this.country.current.value,
        gender: this.gender.current.value,
        address: this.address.current.value,
        taxCode: this.taxCode.current.value,
        idTK: this.state.idTk.toString(),
      }
    ).then((response) => {
      this.state.idTT = response.data;
      this.setState(this);
      console.log(this.state.idTT);
      this.props.history.push("/registrationDetail/generationInformation/" + this.state.idTT);
    }).catch(err => console.log(err.response));
  };
  setName = (e) => {
    this.state.fullName = e.target.value;
    this.setState(this);
  }
  render() {
    return (
      <div className="oka-page">
        <div className="container css-theme">
          <div className="table-row css-row">
            <div
              className="table__column css-column"
              style={{ marginTop: "58px" }}
            >
              <div className="table__detail css-detail">
                <span>
                  <div className="slidebar css-sidebar">
                    <Link
                      key="1"
                      to="/registrationDetail/mainContact"
                      className="slidebar-item slidebar-item--is-active css-check"
                    >
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">Main Contact</span>
                        
                      </div>
                    </Link>
                    <Link
                      key="2"
                      to="/registrationDetail/generationInformation"
                      className="slidebar-item css-check"
                    >
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">
                          General Information
                        </span>
                        
                      </div>
                    </Link>
                    <Link
                      key="4"
                      to="/registrationDetail/rooms"
                      className="slidebar-item css-check"
                    >
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">Rooms</span>
                        
                      </div>
                    </Link>
                  </div>
                </span>
              </div>
            </div>

            <div className="table__column__2 css-column-2">
              <div
                className="table-row css-row"
                style={{ marginBottom: "16px" }}
              >
                <div className="column2 css-col">
                  <div className="text2 css-text-2">
                    <h2>Main Contact</h2>
                  </div>
                </div>
              </div>
              <div className="table__title css-row">
                <div className="detail__column css-col">
                  <div
                    className="box__detail css-bx-dtl"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="box__detail__section header clearfix css-section">
                      <span>Main Contact</span>
                    </div>
                    <div className="box__detail__section clearfix css-section">
                      {/* Full name*/}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{ marginTop: "8px" }}
                        >
                          <label className="box-label css-label">
                            <span>Full Name</span>
                            <span className="label-required">*</span>
                          </label>
                        </div>
                        {this.state.fullName == null || this.state.fullName === "" ? <div className="box-column css-bxcol2">
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="input control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <input
                                    pattern="[^\s]+"
                                      onChange={this.setName}
                                      ref={this.fullName}
                                      touched="true"
                                      type="text"
                                      className="css-txt -control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul className="css-error --simple">
                              <li>
                                <span>This section must be filled.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        :
                        <div className="box-column css-bxcol2">
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="input control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <input
                                    onChange={this.setName}
                                      ref={this.fullName}
                                      touched="true"
                                      type="text"
                                      className="css-txt -control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                      }
                        </div>
                      <div
                        className="line css-line"
                        style={{ marginTop: "0px" }}
                      ></div>
                      {/* Email */}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{ marginTop: "8px" }}
                        >
                          <label className="box-label css-label">
                            <span>Email</span>
                            <span className="label-required">*</span>
                          </label>
                        </div>
                        <div className="box-column css-bxcol2">
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="input control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <input
                                      ref={this.email}
                                      touched="true"
                                      type="text"
                                      className="css-txt -control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul className="css-error --simple">
                              <li>
                                <span>This section must be filled.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="line css-line"
                        style={{ marginTop: "0px" }}
                      ></div>
                      {/* phone number*/}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{ marginTop: "8px" }}
                        >
                          <label className="box-label css-label">
                            <span>Phone Number</span>
                            <span className="label-required">*</span>
                          </label>
                        </div>
                        <div className="box-column css-bxcol2">
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="input control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <input
                                      ref={this.phoneNumber}
                                      touched="true"
                                      type="text"
                                      className="css-txt -control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul className="css-error --simple">
                              <li>
                                <span>This section must be filled.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="line css-line"
                        style={{ marginTop: "0px" }}
                      ></div>
                      {/* Identification Code */}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{ marginTop: "8px" }}
                        >
                          <label className="box-label css-label">
                            <span>Identification Code</span>
                            <span className="label-required">*</span>
                          </label>
                        </div>
                        <div className="box-column css-bxcol2">
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="input control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <input
                                      ref={this.idenCode}
                                      touched="true"
                                      type="text"
                                      className="css-txt -control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul className="css-error --simple">
                              <li>
                                <span>This section must be filled.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="line css-line"
                        style={{ marginTop: "0px" }}
                      ></div>
                      {/* Identification Type */}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{ marginTop: "8px" }}
                        >
                          <label className="box-label css-label">
                            <span>Identification Type</span>
                            <span className="label-required">*</span>
                          </label>
                        </div>
                        <div className="box-column css-bxcol2">
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="input control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <input
                                      ref={this.idenType}
                                      touched="true"
                                      type="text"
                                      className="css-txt -control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul className="css-error --simple">
                              <li>
                                <span>This section must be filled.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="line css-line"
                        style={{ marginTop: "0px" }}
                      ></div>
                      {/* Country */}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{ marginTop: "8px" }}
                        >
                          <label className="box-label css-label">
                            <span>Country</span>
                            <span className="label-required">*</span>
                          </label>
                        </div>
                        <div className="box-column css-bxcol2">
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="input control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <input
                                      ref={this.country}
                                      touched="true"
                                      type="text"
                                      className="css-txt -control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul className="css-error --simple">
                              <li>
                                <span>This section must be filled.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="line css-line"
                        style={{ marginTop: "0px" }}
                      ></div>
                      {/* Gender */}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{ marginTop: "8px" }}
                        >
                          <label className="box-label css-label">
                            <span>Gender</span>
                            <span className="label-required">*</span>
                          </label>
                        </div>
                        <div
                          className="c-column css-bxcol2"
                          style={{ marginTop: "-4px" }}
                        >
                          <div
                            touched="true"
                            value="NO_PAST_NAME"
                            className="radio-group control-container css-radio css-radio-gr"
                          >
                            <div className="radio c-radio--is-inline css-btn-radio">
                              <input
                                name="mainContact,previousNameBoolean"
                                ref={this.gender}
                                type="radio"
                                value="1"
                                id="radio-9"
                              />
                              <label className="" htmlFor="radio-9">
                                <span>Female</span>
                              </label>
                            </div>
                            <div
                              className="radio c-radio--is-inline css-btn-radio"
                              style={{ marginTop: "16px" }}
                            >
                              <input
                                name="mainContact,previousNameBoolean"
                                ref={this.gender}
                                type="radio"
                                value="0"
                                id="radio-10"
                              />
                              <label className="" htmlFor="radio-10">
                                <span>Male</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="line css-line"
                        style={{ marginTop: "0px" }}
                      ></div>
                       {/* Address */}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{ marginTop: "8px" }}
                        >
                          <label className="box-label css-label">
                            <span>Address</span>
                            <span className="label-required">*</span>
                          </label>
                        </div>
                        <div className="box-column css-bxcol2">
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="input control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <input
                                      ref={this.address}
                                      touched="true"
                                      type="text"
                                      className="css-txt -control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul className="css-error --simple">
                              <li>
                                <span>This section must be filled.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="line css-line"
                        style={{ marginTop: "0px" }}
                      ></div>
                      {/* Tax Code */}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{ marginTop: "8px" }}
                        >
                          <label className="box-label css-label">
                            <span>Tax Code</span>
                            <span className="label-required">*</span>
                          </label>
                        </div>
                        <div className="box-column css-bxcol2">
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="input control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <input
                                      ref={this.taxCode}
                                      touched="true"
                                      type="text"
                                      className="css-txt -control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul className="css-error --simple">
                              <li>
                                <span>This section must be filled.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block css-contact">
                
                <button
                  className="btn-contact"
                  onClick={this.createContact}
                >
                  Save and Continues
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContact;
