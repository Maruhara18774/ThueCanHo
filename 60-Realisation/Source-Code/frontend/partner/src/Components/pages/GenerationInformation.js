/* eslint-disable react/no-direct-mutation-state */
import React, { Component ,createRef} from "react";
import "../../RegistrationDetail.css";
import { PropertyData } from "../data/PropertyType";
import Axios from "axios";
class GenerationInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idCountry: 0,
      idCity: 0,
      idDistrict: 0,
      lstCountry: [],
      lstCity: [],
      lstDistrict: [],
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
    this.getListCountry();
  }
  createContact =() =>{
    Axios.post("http://localhost:3000/api/partner/registrationDetail/contactRegistration",{
      "fullName": this.fullName.current.value,
      "email" : this.email.current.value,
      "phoneNumber" : this.phoneNumber.current.value,
      "idenCode" : this.idenCode.current.value,
      "idenType" : this.idenType.current.value,
      "country" : this.country.current.value,
      "gender" : this.gender.current.value,
      "address" : this.address.current.value,
      "taxCode" : this.taxCode.current.value,
    }).then((response) => {console.log(response.data)})
  };
  getListCountry = () => {
    Axios.post(
      "http://localhost:3000/api/partner/registrationDetail/getListCountry",
      {}
    ).then((response) => {
      this.state.lstCountry = response.data;
      this.setState(this);
    });
  };
  getListCity = () => {
    Axios.post(
      "http://localhost:3000/api/partner/registrationDetail/getListCity",
      { countryId: this.state.idCountry }
    ).then((response) => {
      this.state.lstCity = response.data;
      this.setState(this);
    });
  };
  getListDistrict = () => {
    Axios.post(
      "http://localhost:3000/api/partner/registrationDetail/getListDistrict",
      { cityId: this.state.idCity }
    ).then((response) => {
      this.state.lstDistrict = response.data;
      this.setState(this);
    });
  };
  changeCountry = (event) => {
    this.state.idCountry = event.target.value;
    this.setState(this);
    this.getListCity();
  };
  changeCity = (event) => {
    this.state.idCity = event.target.value;
    this.setState(this);
    this.getListDistrict();
  };
  changeDistrict = (event) => {
    this.state.idDistrict = event.target.value;
    this.setState(this);
  };
  render() {
    return (
      <>
        <div className="table__column__2 css-column-2">
          <div className="table-row css-row" style={{ marginBottom: "16px" }}>
            <div className="column2 css-col">
              <div className="text2 css-text-2">
                <h2>Generation Information</h2>
              </div>
            </div>
          </div>
          <div className="table__title css-row">
            <div className="detail__column css-col">
              <div
                className="box__detail css-bx-dtl"
                style={{ marginBottom: "16px" }}
              >
                <div className="box__detail__section header clearfix css-section">
                  <span>Property Detail</span>
                </div>
                <div className="box__detail__section clearfix css-section">
                  <div className="box-row css-row">
                    <div
                      className="box-column css-box-col"
                      style={{ marginTop: "8px" }}
                    >
                      <label className="box-label css-label">
                        <span>Property Name</span>
                        <span
                          className="label-required"
                          style={{
                            marginLeft: "3px",
                            color: "rgb(87, 167, 237)",
                          }}
                        >
                          *
                        </span>
                      </label>
                    </div>
                    <div className="box-column css-bxcol2">
                      <div className="input-group css-inp">
                        <div className="input-group__inner">
                          <div className="input control-container css-radio-gr">
                            <div className="__inner">
                              <div className="__padder">
                                <input
                                  name="generalInformation,propertyDetails,propertyName"
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
                  <div className="box-row css-row">
                    <div
                      className="box-column css-box-col"
                      style={{ marginTop: "8px" }}
                    >
                      <label className="box-label css-label">
                        <span>Legal Entity Name</span>
                      </label>
                    </div>
                    <div className="box-column css-bxcol2">
                      <div className="input-group css-inp">
                        <div className="input-group__inner">
                          <div className="input control-container css-radio-gr">
                            <div className="__inner">
                              <div className="__padder">
                                <input
                                  name="generalInformation,propertyDetails,propertyName"
                                  touched="true"
                                  type="text"
                                  className="css-txt -control"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="line css-line"
                    style={{ marginTop: "0px" }}
                  ></div>
                  <div className="box-row css-row">
                    <div
                      className="box-column css-box-col"
                      style={{ marginTop: "8px" }}
                    >
                      <label className="box-label css-label">
                        <span>
                          Does This Property Have Different Name Previously?
                        </span>
                      </label>
                    </div>
                    <div
                      className="c-column css-bxcol2"
                      style={{ marginTop: "8px" }}
                    >
                      <div
                        touched="true"
                        value="NO_PAST_NAME"
                        className="radio-group control-container css-radio css-radio-gr"
                      >
                        <div className="radio c-radio--is-inline css-btn-radio">
                          <input
                            name="generalInformation,propertyDetails,previousNameBoolean"
                            type="radio"
                            value="YES_PAST_NAME"
                            id="radio-9"
                          />
                          <label className="" for="radio-9">
                            <span>Yes</span>
                          </label>
                        </div>
                        <div
                          className="radio c-radio--is-inline css-btn-radio"
                          style={{ marginLeft: "16px" }}
                        >
                          <input
                            name="generalInformation,propertyDetails,previousNameBoolean"
                            type="radio"
                            value="NO_PAST_NAME"
                            id="radio-10"
                          />
                          <label className="" for="radio-10">
                            <span>No</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="line css-line"
                    style={{ marginTop: "0px" }}
                  ></div>
                  <div className="box-row css-row">
                    <div
                      className="box-column css-box-col"
                      style={{ marginTop: "8px" }}
                    >
                      <label className="box-label css-label">
                        <span>
                          Does This Property Belong to Particular Hotel Chain?
                        </span>
                      </label>
                    </div>
                    <div
                      className="c-column css-bxcol2"
                      style={{ marginTop: "-4px" }}
                    >
                      <div
                        touched="true"
                        value="NO_PAST_NAME"
                        class="radio-group control-container css-radio css-radio-gr"
                      >
                        <div className="radio c-radio--is-inline css-btn-radio">
                          <input
                            name="generalInformation,propertyDetails,previousNameBoolean"
                            type="radio"
                            value="YES_PAST_NAME"
                            id="radio-9"
                          />
                          <label className="" for="radio-9">
                            <span>Yes</span>
                          </label>
                        </div>
                        <div
                          className="radio c-radio--is-inline css-btn-radio"
                          style={{ marginTop: "16px" }}
                        >
                          <input
                            name="generalInformation,propertyDetails,previousNameBoolean"
                            type="radio"
                            value="NO_PAST_NAME"
                            id="radio-10"
                          />
                          <label className="" for="radio-10">
                            <span>No</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="line css-line"
                    style={{ marginTop: "0px" }}
                  ></div>
                  <div className="box-row css-row">
                    <div
                      className="box-column css-box-col"
                      style={{ marginTop: "8px" }}
                    >
                      <label className="box-label css-label">
                        <span>Property Type</span>
                      </label>
                    </div>
                    <div className="box-column css-col">
                      <div className="radio-group control-container css-radio css-radio-gr">
                        {PropertyData.map((item, index) => {
                          return (
                            <div key={index} className={item.cRadio}>
                              <input
                                name={item.inputName}
                                type={item.type}
                                value={item.value}
                                id={item.idInput}
                              />
                              <label htmlFor={item.labelName}>
                                <div className={item.styleSpan}>
                                  <b>
                                    <span>{item.nameSpan}</span>
                                  </b>
                                  <span>{item.detailSpan}</span>
                                </div>
                              </label>
                            </div>
                          );
                        })}
                        <div
                          className="c-flexbox css-flexbox"
                          style={{ marginTop: "16px", marginBottom: "-15px" }}
                        >
                          <div
                            className="radio css-btn-radio"
                            style={{ marginTop: "8px" }}
                          >
                            <input
                              name="generalInformation,propertyDetails,propertyType"
                              type="radio"
                              value="HOTEL"
                              id="radio-31"
                              className="radio-31"
                            />
                            <label htmlFor="radio-31">
                              <div className="css-span">
                                <b>
                                  <span>Other</span>
                                </b>
                              </div>
                            </label>
                          </div>
                          <div
                            className="c-block"
                            style={{ marginLeft: "16px" }}
                          >
                            <div
                              className="block-select control-container css-select css-radio-gr"
                              style={{ width: "250px" }}
                            >
                              <div className="select control-container css-select css-radio-gr">
                                <div className="select has-value">
                                  <select className="select-control">
                                    <option className="select-option">
                                      {" "}
                                      1
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="line css-line"
                    style={{ marginTop: "0px" }}
                  ></div>
                  <div className="box-row css-row">
                    <div
                      className="box-column css-box-col"
                      style={{ marginTop: "8px" }}
                    >
                      <label className="box-label css-label">
                        <span>Property Address</span>
                      </label>
                    </div>
                    <div className="c-column css-col">
                      <div className="c-block" style={{ marginTop: "16px" }}>
                        <label className="c-label css-label">
                          <span>Street Address</span>
                          <span className="label-required">*</span>
                        </label>
                        <div className="input-group css-inp">
                          <div className="input-group__inner">
                            <div className="input control-container --is-error css-radio-gr c-textarea">
                              <div className="__inner">
                                <div className="__padder --enter-active">
                                  <textarea
                                    name="generalInformation,propertyDetails,propertyAddress,streetAddress"
                                    touched="true"
                                    type="text"
                                    className="-control css-textarea"
                                    rows="3"
                                    style={{ resize: "vertical" }}
                                  />
                                </div>
                                <span>
                                  <div className="css-icons -error-icon">
                                    <div
                                      id="tooltip-41"
                                      className="__inner c-tooltip---target c-tooltip---enabled c-tooltip---out-of-bounds c-tooltip---out-of-bounds-bottom c-tooltip---element-attached-top c-tooltip---element-attached-right c-tooltip---target-attached-bottom c-tooltip---target-attached-right"
                                    >
                                      <svg
                                        className="c-icon css-svg"
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        style={{
                                          height: "20.02px",
                                          width: "20.02px",
                                        }}
                                      >
                                        <g id="info-circle-outline">
                                          <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="c-block" style={{ marginTop: "16px" }}>
                        <label className="c-label css-label">
                          <span>Country</span>
                          <span className="label-required">*</span>
                        </label>
                        <div
                          className="select control-container css-select css-radio-gr"
                          style={{ width: "250px" }}
                        >
                          <div className="select has-value">
                            <select
                              className="select-control"
                              value={this.state.idCountry}
                              onChange={this.changeCountry}
                            >
                              <option className="select-option">
                                Select Country...
                              </option>
                              {this.state.lstCountry.map((item, index) => (
                                <option value={item.ID_QUOCGIA}>
                                  {item.TEN_QUOCGIA}
                                </option>
                              ))}
                            </select>
                          </div>
                          <ul className="css-error --simple">
                            <li>This section must be fill</li>
                          </ul>
                        </div>
                      </div>
                      <div className="c-block" style={{ marginTop: "16px" }}>
                        <label className="c-label css-label">
                          <span>City</span>
                          <span className="label-required">*</span>
                        </label>
                        <div
                          className="select control-container css-select css-radio-gr"
                          style={{ width: "250px" }}
                        >
                          <div className="select has-value">
                            <select
                              className="select-control"
                              value={this.state.idCity}
                              onChange={this.changeCity}
                            >
                              <option className="select-option">
                                Select City...
                              </option>
                              {this.state.lstCity.map((item, index) => (
                                <option value={item.ID_THANHPHO}>
                                  {item.TEN_THANHPHO}
                                </option>
                              ))}
                            </select>
                          </div>
                          <ul className="css-error --simple">
                            <li>This section must be fill</li>
                          </ul>
                        </div>
                      </div>
                      <div className="c-block" style={{ marginTop: "16px" }}>
                        <label className="c-label css-label">
                          <span>District</span>
                          <span className="label-required">*</span>
                        </label>
                        <div
                          className="select control-container css-select css-radio-gr"
                          style={{ width: "250px" }}
                        >
                          <div className="select has-value">
                            <select
                              className="select-control"
                              value={this.state.idDistrict}
                              onChange={this.changeDistrict}
                            >
                              <option className="select-option">
                                Select District...
                              </option>
                              {this.state.lstDistrict.map((item, index) => (
                                <option value={item.ID_QUAN}>
                                  {item.TEN_QUAN}
                                </option>
                              ))}
                            </select>
                          </div>
                          <ul className="css-error --simple">
                            <li>This section must be fill</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="line css-line"
                    style={{ marginTop: "0px" }}
                  ></div>
                  <div className="box-row css-row">
                    <div
                      className="box-column css-box-col"
                      style={{ marginTop: "8px" }}
                    >
                      <label className="box-label css-label">
                        <span>Phone Number</span>
                        <span
                          className="label-required"
                          style={{
                            marginLeft: "3px",
                            color: "rgb(87, 167, 237)",
                          }}
                        >
                          *
                        </span>
                      </label>
                    </div>
                    <div className="box-column css-bxcol2">
                      <div className="input-group css-inp">
                        <div className="input-group__inner">
                          <div className="input control-container css-radio-gr">
                            <div className="__inner">
                              <div className="__padder">
                                <input
                                  name="generalInformation,propertyDetails,propertyName"
                                  touched="true"
                                  type="text"
                                  className="css-txt -control"
                                  value=""
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
                  <div className="box-row css-row">
                    <div
                      className="box-column css-box-col"
                      style={{ marginTop: "8px" }}
                    >
                      <label className="box-label css-label">
                        <span>Number Of Rooms</span>
                        <span
                          className="label-required"
                          style={{
                            marginLeft: "3px",
                            color: "rgb(87, 167, 237)",
                          }}
                        >
                          *
                        </span>
                      </label>
                    </div>
                    <div className="box-column css-box-col">
                      <div
                        className="input-group css-number"
                        style={{ display: "inline-block" }}
                      >
                        <div className="input-group__inner">
                          <div className="input control-container --is-error css-radio-gr">
                            <div className="__inner">
                              <div className="__padder">
                                <input
                                  name="generalInformation,propertyDetails,numberOfRooms"
                                  touched="true"
                                  type="text"
                                  className="css-txt -control"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="input-group-addon css-number-2">
                            <span>rooms</span>
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
                  <div className="box-row css-row">
                    <div
                      className="box-column css-box-col"
                      style={{ marginTop: "8px" }}
                    >
                      <label className="box-label css-label">
                        <span>
                          Does This Property Use Channel Manager System?{" "}
                        </span>
                      </label>
                    </div>
                    <div
                      className="c-column css-bxcol2"
                      style={{ marginTop: "8px" }}
                    >
                      <div
                        touched="true"
                        value="NO_PAST_NAME"
                        className="radio-group control-container css-radio css-radio-gr"
                      >
                        <div className="radio c-radio--is-inline css-btn-radio">
                          <input
                            name="generalInformation,propertyDetails,previousNameBoolean"
                            type="radio"
                            value="YES_PAST_NAME"
                            id="radio-9"
                          />
                          <label className="" for="radio-9">
                            <span>Yes</span>
                          </label>
                        </div>
                        <div
                          className="radio c-radio--is-inline css-btn-radio"
                          style={{ marginTop: "16px" }}
                        >
                          <input
                            name="generalInformation,propertyDetails,previousNameBoolean"
                            type="radio"
                            value="NO_PAST_NAME"
                            id="radio-10"
                          />
                          <label className="" for="radio-10">
                            <span>No</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <div className="box-column css-bxcol2">
                      <div className="input-group css-inp">
                        <div className="input-group__inner">
                          <div className="input control-container css-radio-gr">
                            <div className="__inner">
                              <div className="__padder">
                                <input
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
                  </div>

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
                                  type="email"
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
                    <div className="box-column css-bxcol2">
                      <div className="input-group css-inp">
                        <div className="input-group__inner">
                          <div className="input control-container css-radio-gr">
                            <div className="__inner">
                              <div className="__padder">
                                <input
                                  ref={this.gender}
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

                  <div className="box-row css-row">
                    <div className="box-column css-box-col"style={{ marginTop: "8px" }}>
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
          <div
            className="block"
            style={{
              marginRight: "0px",
              marginBottom: "50px",
              backgroundColor: "red",
              width: "20px",
              height: "50px",
            }}
          ></div>
        </div>
      </>
    );
  }
}

export default GenerationInformation;
