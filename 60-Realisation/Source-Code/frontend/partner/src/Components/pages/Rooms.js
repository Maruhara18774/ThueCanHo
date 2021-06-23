/* eslint-disable react/no-direct-mutation-state */
import React, {createRef, Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idRoom: 0,
      idBed: 0,
      lstRoom: [],
      lstBed: [],
      MAX_VAL: 1400,
      MIN_VAL: 0,
      idApart: document.location.pathname.substring(26),
    };
    this.roomName = createRef();
    this.idStyleRoom = createRef();
    this.idStyleBed = createRef();
    this.numberBed = createRef();
    this.maxPer = createRef();
    this.maxExtraBed = createRef();
    this.width = createRef();
    this.height = createRef();
    this.numberRooms = createRef();
    this.descript = createRef();
    this.getListRoom();
    this.getListBed();
  }
  withValueCap = (inputObj) => {
    const {value} = inputObj;
    if (value <= this.state.MAX_VAL && value >= this.state.MIN_VAL) return true;
    return false;
  };
  createRoom = () => {
    axios
      .post(
        'https://rental-apartment-huflit.herokuapp.com/api/partner/registrationDetail/createRoom',
        {
          idApart: this.state.idApart.toString(),
          roomName: this.roomName.current.value,
          idStyleRoom: this.state.idRoom,
          idStyleBed: this.state.idBed,
          numberBed: this.numberBed.current.value,
          maxPer: this.maxPer.current.value,
          maxExtraBed: this.maxExtraBed.current.value,
          width: this.width.current.value,
          height: this.height.current.value,
          numberRooms: this.numberRooms.current.value,
          descript: this.descript.current.value,
        }
      )
      .then((response) => {
        console.log(response.data);
        this.props.history.push(
          '/lstApartment/' + localStorage.getItem('idTk')
        );
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  getListRoom = () => {
    axios
      .post(
        'https://rental-apartment-huflit.herokuapp.com/api/partner/registrationDetail/getListRoomType',
        {}
      )
      .then((response) => {
        this.state.lstRoom = response.data;
        this.setState(this);
      });
  };
  getListBed = () => {
    axios
      .post(
        'https://rental-apartment-huflit.herokuapp.com/api/partner/registrationDetail/getListBedType',
        {}
      )
      .then((response) => {
        this.state.lstBed = response.data;
        this.setState(this);
      });
  };
  changeRoomStyle = (e) => {
    this.state.idRoom = e.target.value;
    this.setState(this);
  };
  changeBedStyle = (e) => {
    this.state.idBed = e.target.value;
    this.setState(this);
  };
  checkNull = (e) => {
    this.state.numberRooms = e.target.value;
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
                      className="slidebar-item css-check"
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
                      className="slidebar-item slidebar-item--is-active css-check"
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
                className="table__title css-row"
                style={{marginBottom: '16px'}}
              >
                <div className="column2 css-col">
                  <div className="text2 css-text-2">
                    <h2>Room</h2>
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
                      <span>Rooms Types</span>
                    </div>
                    <div className="box__detail__section clearfix css-section">
                      <div>
                        <div
                          className="box css-bx-dtl"
                          style={{marginTop: '15px', marginBottom: '30px'}}
                        >
                          <div className="box__detail__section header clearfix css-section css-room">
                            <div className="flexbox-room css-flex-room">
                              <div className="c-block">
                                <span>Room 1</span>
                              </div>
                              <div className="c-block">
                                <button
                                  type="button"
                                  className="btn btn--variant-link"
                                  style={{margin: '0', padding: '0'}}
                                >
                                  <span>Duplicate</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="box__detail__section clearfix css-room-table">
                            <div className="c-block css-remove css-remove-2">
                              <div className="table-row css-remove-3">
                                <div className="table__column css-remove-item">
                                  <span>
                                    Are you sure you want to remove this room?
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/* Room Name */}
                            <div className="c-block">
                              <div className="box-row css-row">
                                <div
                                  className="box-column css-box-col"
                                  style={{marginTop: '8px'}}
                                >
                                  <label className="box-label css-label">
                                    <span>Room Name</span>
                                    <span className="label-required">*</span>
                                  </label>
                                </div>
                                <div className="box-column css-bxcol2 css-room-2">
                                  <div className="input-group css-inp">
                                    <div className="input-group__inner">
                                      <div className="input control-container css-radio-gr">
                                        <div className="__inner">
                                          <div className="__padder">
                                            <input
                                              ref={this.roomName}
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
                                        <span>
                                          This section must be filled.
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="line css-line"
                                style={{marginTop: '0'}}
                              ></div>
                            </div>
                            {/* Room Type */}
                            <div className="c-block">
                              <div className="box-row css-row">
                                <div className="box-column css-box-col">
                                  <label className="box-label css-label">
                                    <span>Room Specification</span>
                                  </label>
                                </div>
                                <div className="box-column css-bxcol2 css-room-2">
                                  <div className="c-block">
                                    <label className="box-label css-label">
                                      <span>Room Type</span>
                                      <span className="label-required">*</span>
                                    </label>
                                    <div
                                      className="select control-container css-select css-radio-gr"
                                      style={{width: '250px'}}
                                    >
                                      <div className="select has-value">
                                        <select
                                          onChange={this.changeRoomStyle}
                                          className="select-control"
                                          value={this.state.idRoom}
                                        >
                                          <option className="select-option">
                                            {' '}
                                            Select Room Type
                                          </option>
                                          {this.state.lstRoom.map(
                                            (item, key) => (
                                              <option
                                                key={key.ID_LOAIPHONG}
                                                ref={item.ID_LOAIPHONG}
                                                value={item.ID_LOAIPHONG}
                                              >
                                                {item.TEN_LOAIPHONG}
                                              </option>
                                            )
                                          )}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="c-block">
                                    <label className="box-label css-label">
                                      <span>Bed Type</span>
                                      <span className="label-required">*</span>
                                    </label>

                                    <div
                                      className="select control-container css-select css-radio-gr"
                                      style={{width: '250px'}}
                                    >
                                      <div className="select has-value">
                                        <select
                                          className="select-control"
                                          value={this.state.idBed}
                                          onChange={this.changeBedStyle}
                                        >
                                          <option className="select-option">
                                            {' '}
                                            Select Bed Type
                                          </option>
                                          {this.state.lstBed.map((val, key) => (
                                            <option
                                              ref={val.ID_LOAIGIUONG}
                                              value={val.ID_LOAIGIUONG}
                                            >
                                              {val.TEN_LOAIGIUONG}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="c-block">
                                    <label className="box-label css-label">
                                      <span>Maximum Occupancy</span>
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
                                          style={{width: '100px'}}
                                        >
                                          <div className="__inner">
                                            <div className="__padder">
                                              <NumberFormat
                                                allowNegative={false}
                                                allowEmptyFormatting={false}
                                                className="css-txt -control"
                                                getInputRef={this.maxPer}
                                                isAllowed={this.withValueCap}
                                              />
                                              {/* <input
                                                name="generalInformation,propertyDetails,numberOfRooms"
                                                touched="true"
                                                type="text"
                                                className="css-txt -control"
                                                ref={this.maxPer}
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
                              </div>
                            </div>
                            <div
                              className="line css-line"
                              style={{marginTop: '0'}}
                            ></div>
                            <div className="c-block">
                              <div className="box-row css-row">
                                <div
                                  className="box-column css-box-col"
                                  style={{marginTop: '8px'}}
                                >
                                  <label className="box-label css-label">
                                    <span>Number Of Bed</span>
                                    <span className="label-required">*</span>
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
                                        style={{width: '100px'}}
                                      >
                                        <div className="__inner">
                                          <div className="__padder">
                                            <NumberFormat
                                              allowNegative={false}
                                              allowEmptyFormatting={false}
                                              className="css-txt -control"
                                              getInputRef={this.numberBed}
                                              isAllowed={this.withValueCap}
                                            />
                                            {/* <input
                                              name="generalInformation,propertyDetails,numberOfRooms"
                                              touched="true"
                                              type="text"
                                              className="css-txt -control"
                                              ref={this.numberBed}
                                            /> */}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="input-group-addon css-number-2">
                                        <span>beds</span>
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
                            <div className="c-block">
                              <div className="box-row css-row">
                                <div
                                  className="box-column css-box-col"
                                  style={{marginTop: '8px'}}
                                >
                                  <label className="box-label css-label">
                                    <span>Extra Bed Information</span>
                                  </label>
                                </div>
                                <div className="box-column css-box-col">
                                  <div
                                    className="input-group css-inp"
                                    style={{display: 'inline-block'}}
                                  >
                                    <label className="box-label css-label">
                                      <span>Maximum Extra Beds</span>
                                    </label>
                                    <div
                                      className="input-group__inner"
                                      style={{width: 'fit-content'}}
                                    >
                                      <div
                                        className="input control-container css-radio-gr"
                                        style={{width: '100px'}}
                                      >
                                        <div className="__inner">
                                          <div className="__padder">
                                            <NumberFormat
                                              allowNegative={false}
                                              allowEmptyFormatting={false}
                                              className="css-txt -control"
                                              getInputRef={this.maxExtraBed}
                                              isAllowed={this.withValueCap}
                                            />
                                            {/* <input
                                              name="generalInformation,propertyDetails,numberOfRooms"
                                              touched="true"
                                              type="text"
                                              className="css-txt -control"
                                              ref={this.maxExtraBed}
                                            /> */}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="input-group-addon css-number-2">
                                        <span>beds</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="line css-line"
                              style={{marginTop: '0'}}
                            ></div>
                            <div className="c-block">
                              <div className="box-row css-row">
                                <div
                                  className="box-column css-box-col"
                                  style={{marginTop: '8px'}}
                                >
                                  <label className="box-label css-label">
                                    <span>Room Size</span>
                                  </label>
                                </div>
                                <div
                                  className="box-column"
                                  style={{marginRight: '30px'}}
                                >
                                  <div className="box-column css-column-2">
                                    <div
                                      className="input-group css-inp"
                                      style={{display: 'inline-block'}}
                                    >
                                      <label className="box-label css-label">
                                        <span>Width</span>
                                      </label>
                                      <div
                                        className="input-group__inner"
                                        style={{width: 'fit-content'}}
                                      >
                                        <div
                                          className="input control-container css-radio-gr"
                                          style={{width: '100px'}}
                                        >
                                          <div className="__inner">
                                            <div className="__padder">
                                              <NumberFormat
                                                allowNegative={false}
                                                allowEmptyFormatting={false}
                                                className="css-txt -control"
                                                getInputRef={this.width}
                                                isAllowed={this.withValueCap}
                                              />
                                              {/* <input
                                                name="generalInformation,propertyDetails,numberOfRooms"
                                                touched="true"
                                                type="text"
                                                className="css-txt -control"
                                                ref={this.width}
                                              /> */}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="input-group-addon css-number-2">
                                          <span>meters</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="box-column">
                                  <div className="box-column css-column-2">
                                    <div
                                      className="input-group css-inp"
                                      style={{display: 'inline-block'}}
                                    >
                                      <label className="box-label css-label">
                                        <span>Height</span>
                                      </label>
                                      <div
                                        className="input-group__inner"
                                        style={{width: 'fit-content'}}
                                      >
                                        <div
                                          className="input control-container css-radio-gr"
                                          style={{width: '100px'}}
                                        >
                                          <div className="__inner">
                                            <div className="__padder">
                                              <NumberFormat
                                                allowNegative={false}
                                                allowEmptyFormatting={false}
                                                className="css-txt -control"
                                                getInputRef={this.height}
                                                isAllowed={this.withValueCap}
                                              />
                                              {/* <input
                                                name="generalInformation,propertyDetails,numberOfRooms"
                                                touched="true"
                                                type="text"
                                                className="css-txt -control"
                                                ref={this.height}
                                              /> */}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="input-group-addon css-number-2">
                                          <span>meters</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="line css-line"
                              style={{marginTop: '0'}}
                            ></div>

                            <div className="c-block">
                              <div className="box-row css-row">
                                <div
                                  className="box-column css-box-col"
                                  style={{marginTop: '8px'}}
                                >
                                  <label className="box-label css-label">
                                    <span>Number Of Rooms</span>
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
                                {this.state.numberRooms === null ? (
                                  <div className="box-column css-box-col">
                                    <div
                                      className="input-group css-number"
                                      style={{display: 'inline-block'}}
                                    >
                                      <div
                                        className="input-group__inner"
                                        style={{width: 'fit-content'}}
                                      >
                                        <div
                                          className="input control-container --is-error css-radio-gr"
                                          style={{width: '130px'}}
                                        >
                                          <div className="__inner">
                                            <div className="__padder">
                                              <NumberFormat
                                                allowNegative={false}
                                                allowEmptyFormatting={false}
                                                onChange={this.checkNull}
                                                className="css-txt -control"
                                                getInputRef={this.numberRooms}
                                                isAllowed={this.withValueCap}
                                              />
                                              {/* <input
                                                onChange={this.checkNull}
                                                name="generalInformation,propertyDetails,numberOfRooms"
                                                touched="true"
                                                type="text"
                                                className="css-txt -control"
                                                ref={this.numberRooms}
                                              /> */}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="input-group-addon css-number-2">
                                          <span>rooms</span>
                                        </div>
                                      </div>
                                      <ul className="css-error --simple">
                                        <li>
                                          <span>
                                            This section must be filled.
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="box-column css-box-col">
                                    <div
                                      className="input-group css-number"
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
                                                allowNegative={false}
                                                allowEmptyFormatting={false}
                                                onChange={this.checkNull}
                                                className="css-txt -control"
                                                getInputRef={this.numberRooms}
                                                isAllowed={this.withValueCap}
                                              />
                                              {/* <input
                                                onChange={this.checkNull}
                                                name="generalInformation,propertyDetails,numberOfRooms"
                                                touched="true"
                                                type="text"
                                                className="css-txt -control"
                                                ref={this.numberRooms}
                                              /> */}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="input-group-addon css-number-2">
                                          <span>rooms</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
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
                          <span>Description</span>
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
                                <span>Description of Room</span>
                              </label>
                            </div>
                            <div
                              className="box-column css-column"
                              style={{marginRight: '20px'}}
                            >
                              <div className="input-group css-inp">
                                <div className="input-group__inner">
                                  <div className="timepicker control-container css-radio-gr">
                                    <div className="__inner">
                                      <div className="__padder">
                                        <textarea
                                          style={{
                                            width: '432px',
                                            margin: '0px -269.25px 0px 0px',
                                            height: '138px',
                                            resize: 'none',
                                          }}
                                          ref={this.descript}
                                          id="textarea"
                                          type="text"
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
              <div className="block css-contact">
                <button className="btn-success-save" onClick={this.createRoom}>
                  Save and Go To Apartments List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rooms;
