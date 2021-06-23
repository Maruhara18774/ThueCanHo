/* eslint-disable react/no-direct-mutation-state */
import React, { Component, createRef } from "react";
import "../../RegistrationDetail.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
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
      trangThai: "1",
      MAX_VAL: 1400,
      MIN_VAL: 0,
      idMain: document.location.pathname.substring(42),
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
    this.giaGiuong = createRef();
    this.gia = createRef();
    this.khuyenMai = createRef();
    this.trangThai = createRef();

    //Price
    this.firstPrice = createRef();
    this.secondPrice = createRef();
    this.thirdPrice = createRef();

    this.getListCountry();
    this.getListStyle();
  }
  withValueCap = (inputObj) => {
    const { value } = inputObj;
    if (value <= this.state.MAX_VAL && value >= this.state.MIN_VAL) return true;
    return false;
  };
  createApartment = () => {
    Axios.post(
      "https://rental-apartment-huflit.herokuapp.com/api/partner/registrationDetail/createApartment",
      {
        idNha: this.idNha.current.value,
        idChuHo: this.state.idMain.toString(),
        idLoaiNha: this.state.idStyle.toString(),
        tenNha: this.tenNha.current.value,
        huyPhong: this.huyPhong.current.value,
        checkIn: this.checkIn.current.value,
        checkOut: this.checkOut.current.value,
        khoangCachTT: this.khoangCachTT.current.value,
        soTang: this.soTang.current.value,
        buaSang: this.buaSang.current.value,
        giaGiuong: this.giaGiuong.current.value,
        soNha: this.soNha.current.value,
        tenDuong: this.tenDuong.current.value,
        dienTich: this.dienTich.current.value,
        idQuan: this.state.idDistrict,
        soNguoi: this.soNguoi.current.value,
        soGiuongPhu: this.soGiuongPhu.current.value,
        gia: this.gia.current.value,
        khuyenMai: this.khuyenMai.current.value,
        trangThai: "1",
      }
    )
      .then((response) => {
        console.log(response.data);
        this.props.history.push(
          "/registrationDetail/rooms/" + this.idNha.current.value
        );
      })
      .catch((err) => console.log(err.response));
  };
  getListStyle = () => {
    Axios.post(
      "https://rental-apartment-huflit.herokuapp.com/api/partner/registrationDetail/getListApartType",
      {}
    ).then((response) => {
      this.state.lstStyle = response.data;
      this.setState(this);
    });
  };
  getListCountry = () => {
    Axios.post(
      "https://rental-apartment-huflit.herokuapp.com/api/partner/registrationDetail/getListCountry",
      {}
    ).then((response) => {
      this.state.lstCountry = response.data;
      this.setState(this);
    });
  };
  getListCity = () => {
    Axios.post(
      "https://rental-apartment-huflit.herokuapp.com/api/partner/registrationDetail/getListCity",
      { countryId: this.state.idCountry }
    ).then((response) => {
      this.state.lstCity = response.data;
      this.setState(this);
    });
  };
  getListDistrict = () => {
    Axios.post(
      "https://rental-apartment-huflit.herokuapp.com/api/partner/registrationDetail/getListDistrict",
      { cityId: this.state.idCity }
    ).then((response) => {
      this.state.lstDistrict = response.data;
      this.setState(this);
    });
  };
  changeStyle = (event) => {
    this.state.idStyle = event.target.value;
    this.setState(this);
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
      <div className="oka-page">
        <div className="container css-theme">
          <div className="table-row css-row">
            <div
              className="table__column css-column"
              style={{marginTop: '58px'}}
            >
              <div className="table__detail css-detail">
                <span>
                  <div className="slidebar css-sidebar">
                    <Link
                      key="1"
                      to="/registrationDetail/mainContact"
                      className="slidebar-item css-check"
                    >
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">Main Contact</span>
                      </div>
                    </Link>
                    <Link
                      key="2"
                      to="/registrationDetail/generationInformation"
                      className="slidebar-item slidebar-item--is-active css-check"
                    >
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">
                          General Information
                        </span>
                      </div>
                    </Link>
                    <Link
                      key="3"
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
              <div className="table-row css-row" style={{marginBottom: '16px'}}>
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
                    style={{marginBottom: '16px'}}
                  >
                    <div className="box__detail__section header clearfix css-section">
                      <span>Property Detail</span>
                    </div>
                    <div className="box__detail__section clearfix css-section">
                      {/* ID Property */}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{marginTop: '8px'}}
                        >
                          <label className="box-label css-label">
                            <span>ID Property</span>
                            <span
                              className="label-required"
                              style={{
                                marginLeft: '3px',
                                color: 'rgb(87, 167, 237)',
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
                                      required
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
                        style={{marginTop: '0px'}}
                      ></div>
                      {/* Property Name */}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{marginTop: '8px'}}
                        >
                          <label className="box-label css-label">
                            <span>Property Name</span>
                            <span
                              className="label-required"
                              style={{
                                marginLeft: '3px',
                                color: 'rgb(87, 167, 237)',
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
                                      required
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
                        style={{marginTop: '0px'}}
                      ></div>
                      {/* Property Type */}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{marginTop: '8px'}}
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
                                style={{width: '250px'}}
                              >
                                <div className="select control-container css-select css-radio-gr">
                                  <div className="select has-value">
                                    <select
                                      onChange={this.changeStyle}
                                      className="select-control"
                                      value={this.state.idStyle}
                                    >
                                      <option
                                        value="0"
                                        className="select-option"
                                      >
                                        Select Type
                                      </option>
                                      {this.state.lstStyle.map(
                                        (item, index) => (
                                          <option
                                            value={item.ID_LOAINHA}
                                            ref={this.idStyle}
                                          >
                                            {item.TEN_LOAINHA}
                                          </option>
                                        )
                                      )}
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
                        style={{marginTop: '0px'}}
                      ></div>
                      {/* Property Address */}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{marginTop: '8px'}}
                        >
                          <label className="box-label css-label">
                            <span>Property Address</span>
                          </label>
                        </div>
                        <div className="c-column css-col">
                          <div className="c-block" style={{marginTop: '16px'}}>
                            <label className="c-label css-label">
                              <span>Apartment Number</span>
                              <span className="label-required">*</span>
                            </label>
                            <div className="input-group css-inp">
                              <div className="input-group__inner">
                                <div className="input control-container css-radio-gr">
                                  <div className="__inner">
                                    <div className="__padder --enter-active">
                                      <input
                                        ref={this.soNha}
                                        touched="true"
                                        type="text"
                                        className="-control css-txt"
                                        style={{
                                          resize: 'vertical',
                                          width: '332px',
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="c-block" style={{marginTop: '16px'}}>
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
                                        style={{resize: 'vertical'}}
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
                                              height: '20.02px',
                                              width: '20.02px',
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
                          <div className="c-block" style={{marginTop: '16px'}}>
                            <label className="c-label css-label">
                              <span>Country</span>
                              <span className="label-required">*</span>
                            </label>
                            <div
                              className="select control-container css-select css-radio-gr"
                              style={{width: '250px'}}
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
                                    <option
                                      key={item.ID_QUOCGIA}
                                      value={item.ID_QUOCGIA}
                                    >
                                      {item.TEN_QUOCGIA}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="c-block" style={{marginTop: '16px'}}>
                            <label className="c-label css-label">
                              <span>City</span>
                              <span className="label-required">*</span>
                            </label>
                            <div
                              className="select control-container css-select css-radio-gr"
                              style={{width: '250px'}}
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
                          <div className="c-block" style={{marginTop: '16px'}}>
                            <label className="c-label css-label">
                              <span>District</span>
                              <span className="label-required">*</span>
                            </label>
                            <div
                              className="select control-container css-select css-radio-gr"
                              style={{width: '250px'}}
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
                                    <option
                                      key={item.ID_QUAN}
                                      value={item.ID_QUAN}
                                      ref={item.ID_QUAN}
                                    >
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
                        style={{marginTop: '0px'}}
                      ></div>
                      {/* Area */}
                      <div className="box-row css-row">
                        <div
                          className="box-column css-box-col"
                          style={{marginTop: '8px'}}
                        >
                          <label className="box-label css-label">
                            <span>Area</span>
                          </label>
                        </div>
                        <div className="box-column css-column">
                          <div
                            className="input-group css-inp"
                            style={{width: '220px'}}
                          >
                            <div className="input-group__inner">
                              <div className="input control-container css-radio-gr">
                                <div className="__inner">
                                  <div className="__padder">
                                    <NumberFormat
                                      className="css-txt -control"
                                      getInputRef={this.dienTich}
                                      isAllowed={this.withValueCap}
                                      allowNegative={false}
                                      allowEmptyFormatting={false}
                                    />
                                    {/* <input
                                      ref={this.dienTich}
                                      touched="true"
                                      type="number"
                                      className="css-txt -control"
                                    /> */}
                                  </div>
                                </div>
                              </div>
                              <div className="input-group-addon css-number-2">
                                <span>square meter</span>
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
                        style={{marginBottom: '30px'}}
                      >
                        <div className="box__detail__section header clearfix css-section">
                          <span>Property Details</span>
                        </div>
                        <div className="box__detail__section clearfix css-section">
                          {/* Check-In Check-Out Time */}
                          <div className="box-row css-row">
                            <div className="box-column css-box-col">
                              <label className="box-label css-label">
                                <span>Check-In Time</span>
                              </label>
                            </div>
                            <div
                              className="box-column css-column"
                              style={{marginRight: '20px'}}
                            >
                              <label className="box-label css-label">
                                <span>from</span>
                                <span
                                  className="label-required"
                                  style={{
                                    marginLeft: '3px',
                                    color: 'rgb(87, 167, 237)',
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
                                          style={{position: 'relative'}}
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
                              style={{marginRight: '20px'}}
                            >
                              <label className="box-label css-label">
                                <span>latest at</span>
                                <span
                                  className="label-required"
                                  style={{
                                    marginLeft: '3px',
                                    color: 'rgb(87, 167, 237)',
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
                                          style={{position: 'relative'}}
                                        >
                                          <input
                                            ref={this.checkOut}
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
                            style={{marginTop: '0px'}}
                          ></div>
                          {/* Distance to City Center */}
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{marginTop: '8px'}}
                            >
                              <label className="box-label css-label">
                                <span>Distance to City Center</span>
                                <span
                                  className="label-required"
                                  style={{
                                    marginLeft: '3px',
                                    color: 'rgb(87, 167, 237)',
                                  }}
                                >
                                  *
                                </span>
                              </label>
                            </div>
                            <div className="box-column css-box-col">
                              <div
                                className="input-group css-inp"
                                style={{display: 'inline-block'}}
                              >
                                <div
                                  className="input-group__inner"
                                  style={{width: 'fit-content'}}
                                >
                                  <div
                                    className="input control-container css-radio-gr"
                                    style={{width: '130px'}}
                                  >
                                    <div className="__inner">
                                      <div className="__padder">
                                        <NumberFormat
                                          className="css-txt -control"
                                          getInputRef={this.khoangCachTT}
                                          isAllowed={this.withValueCap}
                                          allowNegative={false}
                                          allowEmptyFormatting={false}
                                        />
                                        {/* <input
                                          ref={this.khoangCachTT}
                                          touched="true"
                                          type="number"
                                          className="css-txt -control"
                                        /> */}
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
                            style={{marginTop: '0px'}}
                          ></div>
                          {/* Number of Floors */}
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{marginTop: '8px'}}
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
                                        <NumberFormat
                                          allowNegative={false}
                                          allowEmptyFormatting={false}
                                          className="css-txt -control"
                                          getInputRef={this.soTang}
                                          isAllowed={this.withValueCap}
                                        />
                                        {/* <input
                                          ref={this.soTang}
                                          touched="true"
                                          type="number"
                                          className="css-txt -control"
                                        /> */}
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
                            style={{marginTop: '0px'}}
                          ></div>
                          {/* Number of Persons */}
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{marginTop: '8px'}}
                            >
                              <label className="box-label css-label">
                                <span>Number of Persons</span>
                              </label>
                            </div>
                            <div className="box-column css-column">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <NumberFormat
                                          allowNegative={false}
                                          allowEmptyFormatting={false}
                                          className="css-txt -control"
                                          getInputRef={this.soNguoi}
                                          isAllowed={this.withValueCap}
                                        />
                                        {/* <input
                                          ref={this.soNguoi}
                                          touched="true"
                                          type="number"
                                          className="css-txt -control"
                                        /> */}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-group-addon css-number-2">
                                    <span>persons</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="line css-line"
                            style={{marginTop: '0px'}}
                          ></div>
                          {/* Extra Bed */}
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{marginTop: '8px'}}
                            >
                              <label className="box-label css-label">
                                <span>Extra Bed</span>
                              </label>
                            </div>
                            <div className="box-column css-column">
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <NumberFormat
                                          allowNegative={false}
                                          allowEmptyFormatting={false}
                                          className="css-txt -control"
                                          getInputRef={this.soGiuongPhu}
                                          isAllowed={this.withValueCap}
                                        />
                                        {/* <input
                                          ref={this.soGiuongPhu}
                                          touched="true"
                                          type="number"
                                          className="css-txt -control"
                                        /> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="line css-line"
                            style={{marginTop: '0px'}}
                          ></div>
                          {/*  Additional Breakfast Charge */}
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{marginTop: '8px'}}
                            >
                              <label className="box-label css-label">
                                <span>Price of Extra Bed</span>
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
                                          ref={this.giaGiuong}
                                          touched="true"
                                          type="number"
                                          className="css-txt-2 -control"
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
                            style={{marginTop: '0px'}}
                          ></div>
                          {/*  Additional Breakfast Charge */}
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{marginTop: '8px'}}
                            >
                              <label className="box-label css-label">
                                <span>
                                  Additional Breakfast Charge (Exclude Room
                                  Rate)
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
                                          type="number"
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
                        style={{marginBottom: '30px'}}
                      >
                        <div className="box__detail__section header clearfix css-section">
                          <span>Property Cancellation Policy</span>
                          <span
                            className="label-required"
                            style={{
                              marginLeft: '3px',
                              color: 'rgb(87, 167, 237)',
                            }}
                          >
                            *
                          </span>
                        </div>
                        <div className="box__detail__section clearfix css-section">
                          {/*  Cancellation Policy */}
                          <div className="box-row css-row">
                            <div
                              className="box-column css-box-col"
                              style={{marginTop: '8px'}}
                            >
                              <label className="box-label css-label">
                                <span>Cancellation Policy</span>
                              </label>
                            </div>
                            <div
                              className="c-column css-bxcol2"
                              style={{marginTop: '-4px'}}
                            >
                              <div
                                touched="true"
                                value="NO_PAST_NAME"
                                className="radio-group control-container css-radio css-radio-gr"
                              >
                                <div className="radio c-radio--is-inline css-btn-radio">
                                  <input
                                    ref={this.huyPhong}
                                    name="mainContact,generalInformation,propertyDetails,previousNameBoolean"
                                    type="radio"
                                    value="1"
                                    id="radio-9"
                                  />
                                  <label className="" htmlFor="radio-9">
                                    <span>Yes</span>
                                  </label>
                                </div>
                                <div
                                  className="radio c-radio--is-inline css-btn-radio"
                                  style={{marginTop: '16px'}}
                                >
                                  <input
                                    ref={this.huyPhong}
                                    name="mainContact,generalInformation,propertyDetails,previousNameBoolean"
                                    type="radio"
                                    value="0"
                                    id="radio-10"
                                  />
                                  <label className="" htmlFor="radio-10">
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
                        style={{marginBottom: '30px'}}
                      >
                        <div className="box__detail__section header clearfix css-section">
                          <span>Prices Details</span>
                          <span
                            className="label-required"
                            style={{
                              marginLeft: '3px',
                              color: 'rgb(87, 167, 237)',
                            }}
                          >
                            *
                          </span>
                        </div>
                        <div className="box__detail__section clearfix css-section">
                          {/* Price */}
                          <div className="box-row css-row">
                            <div className="box-column css-box-col">
                              <label className="box-label css-label">
                                <span>Price</span>
                              </label>
                            </div>
                            <div
                              className="box-column css-column"
                              style={{marginRight: '20px'}}
                            >
                              <label className="box-label css-label">
                                <span>Basic Price</span>
                                <span
                                  className="label-required"
                                  style={{
                                    marginLeft: '3px',
                                    color: 'rgb(87, 167, 237)',
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input-group-addon css-number-2">
                                    <span>VND</span>
                                  </div>
                                  <div className="timepicker control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <input
                                          style={{width: '250px'}}
                                          ref={this.gia}
                                          id="gia"
                                          type="number"
                                          min="100000"
                                          max="100000000"
                                          className="-control css-txt"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box-row css-row">
                            <div className="box-column css-box-col"></div>
                            <div
                              className="box-column css-column"
                              style={{marginRight: '20px'}}
                            >
                              <label className="box-label css-label">
                                <span>Discount</span>
                                <span
                                  className="label-required"
                                  style={{
                                    marginLeft: '3px',
                                    color: 'rgb(87, 167, 237)',
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="input-group-addon css-number-2">
                                    <span>VND</span>
                                  </div>
                                  <div className="timepicker control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <div
                                          className="time-clock"
                                          style={{position: 'relative'}}
                                        >
                                          <input
                                            style={{width: '250px'}}
                                            ref={this.khuyenMai}
                                            type="number"
                                            step="1000"
                                            min="100000"
                                            max="100000000"
                                            className="-control css-txt"
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
                  </div>
                </div>
              </div>

              <div className="block css-contact">
                <button className="btn-contact" onClick={this.createApartment}>
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

export default GenerationInformation;
