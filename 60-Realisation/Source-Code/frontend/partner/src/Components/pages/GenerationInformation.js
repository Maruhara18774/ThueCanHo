/* eslint-disable react/no-direct-mutation-state */
import React, { Component, createRef } from "react";
import "../../RegistrationDetail.css";
import Axios from "axios";
import { Link } from "react-router-dom";
class GenerationInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idStyle: 0,
      idCountry: 0,
      idCity: 0,
      idDistrict: 0,
      lstStyle: [],
      lstCountry: [],
      lstCity: [],
      lstDistrict: [],
    };
    this.idNha = createRef();
    this.idChuHo = createRef();
    this.idLoaiNha = createRef();
    this.tenNha = createRef();
    this.huyPhong = createRef();
    this.checkIn = createRef();
    this.checkOut = createRef();
    this.khoangCachTT = createRef();
    this.soTang = createRef();
    this.buaSang = createRef();
    this.soNha = createRef();
    this.tenDuong = createRef();
    this.dienTich = createRef();
    this.idQuan = createRef();
    this.soNguoi = createRef();
    this.soGiuongPhu = createRef();
    this.idGia = createRef();
    this.trangThai = createRef();
    this.getListCountry();
    this.getListStyle();
  }
  createApartment =() => {
    Axios.post("http://localhost:33456/api/partner/registrationDetail/createApartment",{
      "idNha": this.idNha.current.value,
      "idChuHo": this.idChuHo.current.value,
      "idLoaiNha": this.state.idStyle,
      "tenNha": this.tenNha.current.value,
      "huyPhong": this.huyPhong.current.value,
      "checkIn": this.checkIn.current.value,
      "checkOut": this.checkOut.current.value,
      "khoangCachTT": this.khoangCachTT.current.value,
      "soTang": this.soTang.current.value,
      "buaSang": this.buaSang.current.value,
      "soNha": this.soNha.current.value,
      "tenDuong": this.tenDuong.current.value,
      "dienTich": this.dienTich.current.value,
      "idQuan": this.state.idDistrict,
      "soNguoi": this.soNguoi.current.value,
      "soGiuongPhu": this.soGiuongPhu.current.value,
      "idGia": this.idGia.current.value,
      "trangThai": this.trangThai.current.value,
    }).then((response) => {
      console.log(response.data);
    });
  }
  getListStyle = () => {
    Axios.post(
      "http://localhost:33456/api/partner/registrationDetail/getListStyle",
      {}
    ).then((response) => {
      this.state.lstStyle = response.data;
      this.setState(this);
    });
  };
  getListCountry = () => {
    Axios.post(
      "http://localhost:33456/api/partner/registrationDetail/getListCountry",
      {}
    ).then((response) => {
      this.state.lstCountry = response.data;
      this.setState(this);
    });
  };
  getListCity = () => {
    Axios.post(
      "http://localhost:33456/api/partner/registrationDetail/getListCity",
      { countryId: this.state.idCountry }
    ).then((response) => {
      this.state.lstCity = response.data;
      this.setState(this);
    });
  };
  getListDistrict = () => {
    Axios.post(
      "http://localhost:33456/api/partner/registrationDetail/getListDistrict",
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
                        <span>ID Property</span>
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
                                  ref={this.idNha}
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
                                  ref={this.tenNha}
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
                        <span>Property Type</span>
                      </label>
                    </div>
                    <div className="box-column css-col">
                      <div className="radio-group control-container css-radio css-radio-gr">
                        <div className="c-block">
                          <div
                            className="block-select control-container css-select css-radio-gr"
                            style={{ width: "250px" }}
                          >
                            <div className="select control-container css-select css-radio-gr">
                              <div className="select has-value">
                                <select
                                  className="select-control"
                                  value={this.state.idStyle}
                                >
                                  <option value="0" className="select-option">
                                    Select Type
                                  </option>
                                  {this.state.lstStyle.map((item, index) => (
                                    <option value={item.ID_STYLE} ref={this.idStyle}>
                                      {item.TEN_STYLE}
                                    </option>
                                  ))}
                                </select>
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
                                    ref={this.tenDuong}
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
                              <option value="0" className="select-option">
                                Select Country...
                              </option>
                              {this.state.lstCountry.map((item) => (
                                <option value={item.ID_QUOCGIA}>
                                  {item.TEN_QUOCGIA}
                                </option>
                              ))}
                            </select>
                          </div>
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
                              {this.state.lstCity.map((item) => (
                                <option value={item.ID_THANHPHO}>
                                  {item.TEN_THANHPHO}
                                </option>
                              ))}
                            </select>
                          </div>
                          
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
                                <option value={item.ID_QUAN} ref={item.ID_QUAN}>
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
                  
                </div>
              </div>
              <div className="table__title css-row">
                <div className="detail__column css-col">
                  <div
                    className="box__detail css-bx-dtl"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="box__detail__section header clearfix css-section">
                      <span>Property Details</span>
                    </div>
                    <div className="box__detail__section clearfix css-section">
                      
                      <div className="box-row css-row">
                        <div className="box-column css-box-col">
                          <label className="box-label css-label">
                            <span>Check-In Time</span>
                          </label>
                        </div>
                        <div
                          className="box-column css-column"
                          style={{ marginRight: "20px" }}
                        >
                          <label className="box-label css-label">
                            <span>from</span>
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
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="timepicker control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <div
                                      className="time-clock"
                                      noValidate
                                      style={{ position: "relative" }}
                                    >
                                      <input
                                      ref={this.checkIn}
                                        id="time"
                                        type="time"
                                        defaultValue="07:30"
                                        className="time-input css-txt"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-row css-row">
                        <div className="box-column css-box-col">
                          <label className="box-label css-label">
                            <span>Check-Out Time</span>
                          </label>
                        </div>
                        <div
                          className="box-column css-column"
                          style={{ marginRight: "20px" }}
                        >
                          <label className="box-label css-label">
                            <span>latest at</span>
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
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="timepicker control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <div
                                    ref={this.checkOut}
                                      className="time-clock"
                                      noValidate
                                      style={{ position: "relative" }}
                                    >
                                      <input
                                        id="time"
                                        type="time"
                                        defaultValue="07:30"
                                        className="time-input css-txt"
                                      />
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
                            <span>Distance to City Center</span>
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
                            className="input-group css-inp"
                            style={{ display: "inline-block" }}
                          >
                            <div className="input-group__inner">
                              <div
                                className="input control-container css-radio-gr"
                                style={{ width: "130px" }}
                              >
                                <div className="__inner">
                                  <div className="__padder">
                                    <input
                                      ref={this.khoangCachTT}
                                      touched="true"
                                      type="text"
                                      className="css-txt -control"
                                      value=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="input-group-addon css-number-2">
                                <span>km</span>
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
                            <span>Number of Floors</span>
                          </label>
                        </div>
                        <div className="box-column css-column">
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="input control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <input
                                      ref={this.soTang}
                                      touched="true"
                                      type="text"
                                      className="css-txt -control"
                                      value=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="input-group-addon css-number-2">
                                <span>floors</span>
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
                              Additional Breakfast Charge (Exclude Room Rate)
                            </span>
                          </label>
                        </div>
                        <div className="box-column css-column">
                          <div className="input-group css-inp">
                            <div className="input-group__inner">
                              <div className="input-group-addon css-number-2">
                                <span>VND</span>
                              </div>
                              <div className="input control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <input
                                      ref={this.buaSang}
                                      touched="true"
                                      type="text"
                                      className="css-txt-2 -control"
                                    />
                                  </div>
                                </div>
                              </div>
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
                      <span>Property Cancellation Policy</span>
                      <span
                        className="label-required"
                        style={{
                          marginLeft: "3px",
                          color: "rgb(87, 167, 237)",
                        }}
                      >
                        *
                      </span>
                    </div>
                    <div className="box__detail__section clearfix css-section">
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{ marginTop: "8px" }}
                        >
                          <label className="box-label css-label">
                            <span>Cancellation Policy</span>
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
                                ref={this.huyPhong}
                                type="radio"
                                value="true"
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
                                ref={this.huyPhong}
                                type="radio"
                                value="false"
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
            </div>
          </div>

          <div className="block css-contact">
            <Link to="/registrationDetail/propertyDetail">
              <button className="btn-contact" onClick={this.createApartment}>
                Save and Continues
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default GenerationInformation;