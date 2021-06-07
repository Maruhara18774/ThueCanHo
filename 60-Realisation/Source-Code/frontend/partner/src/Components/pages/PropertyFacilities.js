/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import axios from "axios";
import Accordion from "../paner-form/Accordion";
import { Link } from "react-router-dom";
export default class PropertyFacilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_CSVC: 0,
      ID_CT_CSVC: 0,
      typeFaci: [],
      lstFaci: [],
      idApart: 0,
    };
    this.getListAnimal();
  }
  handleSubmit = ()=> {
    this.state.idApart = document.location.pathname.substring(39);
		this.setState(this);
		if(this.state.idApart !== "0"){
			this.props.history.push("/registrationDetail/rooms/" + this.state.idApart); 
			//this.props.history.push("/lstApartment/" + this.state.idTk); 
		}
  }
  getListAnimal = () => {
    axios
      .post(
        "http://localhost:33456/api/partner/registrationDetail/getListPropFaci",
        {}
      )
      .then((response) => {
        this.state.typeFaci = response.data;
        this.setState(this);
      });
  };
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
                      className="slidebar-item css-check"
                    >
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">Main Contact</span>
                        <span
                          className="bagde__number bagde__color bagde__pill css-bagde"
                          style={{
                            paddingRight: "10px",
                            paddingLeft: "10px",
                          }}
                        >
                          7
                        </span>
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
                        <span
                          className="bagde__number bagde__color bagde__pill css-bagde"
                          style={{
                            paddingRight: "10px",
                            paddingLeft: "10px",
                          }}
                        >
                          7
                        </span>
                      </div>
                    </Link>
                    <Link
                      key="3"
                      to="/registrationDetail/propertyFacilities"
                      className="slidebar-item slidebar-item--is-active css-check"
                    >
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">
                          Property Facilities
                        </span>
                        <span
                          className="bagde__number bagde__color bagde__pill css-bagde"
                          style={{
                            paddingRight: "10px",
                            paddingLeft: "10px",
                          }}
                        >
                          7
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
                        <span
                          className="bagde__number bagde__color bagde__pill css-bagde"
                          style={{
                            paddingRight: "10px",
                            paddingLeft: "10px",
                          }}
                        >
                          7
                        </span>
                      </div>
                    </Link>
                    <Link
                      key="5"
                      to="/registrationDetail/roomFacilities"
                      className="slidebar-item css-check"
                    >
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">
                          Room Facilities
                        </span>
                        <span
                          className="bagde__number bagde__color bagde__pill css-bagde"
                          style={{
                            paddingRight: "10px",
                            paddingLeft: "10px",
                          }}
                        >
                          7
                        </span>
                      </div>
                    </Link>
                    <Link key="6" to="" className="slidebar-item css-check">
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">Photos</span>
                        <span
                          className="bagde__number bagde__color bagde__pill css-bagde"
                          style={{
                            paddingRight: "10px",
                            paddingLeft: "10px",
                          }}
                        >
                          7
                        </span>
                      </div>
                    </Link>
                    <Link key="7" to="" className="slidebar-item css-check">
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">
                          Payment Information
                        </span>
                        <span
                          className="bagde__number bagde__color bagde__pill css-bagde"
                          style={{
                            paddingRight: "10px",
                            paddingLeft: "10px",
                          }}
                        >
                          7
                        </span>
                      </div>
                    </Link>
                  </div>
                </span>
                <div
                  className="table__block css-tbl-block"
                  style={{ marginTop: "30px" }}
                >
                  <label className="block__label css-label">
                    <span>Mandatory Fields Progress</span>
                  </label>
                  <div className="block__row css-row">
                    <div className="block__column css-block-col">
                      <div className="progress css-progress">
                        <div
                          className="progress__bar"
                          role="progressbar"
                          aria-valuenow="52"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "52%" }}
                        ></div>
                      </div>
                    </div>
                    <div
                      align="right"
                      className="column css-col"
                      style={{ paddingLeft: "0px" }}
                    >
                      <span className="text css-text">52%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="table__column__2 css-column-2">
              <div
                className="table__title css-row"
                style={{ marginBottom: "16px" }}
              >
                <div className="column2 css-col">
                  <div className="text2 css-text-2">
                    <h2>Property Facilities</h2>
                  </div>
                </div>
              </div>
              <div className="table__title css-row">
                <div className="detail__column css-col">
                  {this.state.typeFaci.map((item) => (
                    <>
                      <Accordion
                        key={item.ID_CSVC}
                        title={item.TEN_CSVC}
                        content={item["CHITIETCSVC"].map((index) => (
                          <div className="checkbox-group control-container css-radio css-radio-gr">
                            <div className="table-row css-checkbox-group">
                              <div className="table-column checkbox">
                                <div className="accorfion-checkbox css-checkbox">
                                  <input
                                    type="checkbox"
                                    key={index.ID_CT_CSVC}
                                    ref={index.ID_CT_CSVC}
                                  />
                                  <label key={index.ID_CT_CSVC}>
                                    {index.TEN_CSVC}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div
                              className="line css-line"
                              style={{ marginTop: "0px" }}
                            ></div>
                          </div>
                        ))}
                      />
                    </>
                  ))}
                </div>
              </div>
              <div className="block css-contact">
            
              <button className="btn-contact" onClick={() => this.handleSubmit()}>
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
