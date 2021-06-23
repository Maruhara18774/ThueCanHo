/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import axios from "axios";
import Accordion from "../paner-form/Accordion";
import { Link } from "react-router-dom";
export default class RoomFacilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_NOITHAT: 0,
      ID_CT_NOITHAT: 0,
      typeFaci: [],
      lstFaci: [],
    };
    this.getListAnimal();
  }
  getListAnimal = () => {
    axios
      .post(
        "https://rental-apartment-huflit.herokuapp.com/api/partner/registrationDetail/getListRoomFacility",
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
                      to="/registrationDetail/propertyFacilities"
                      className="slidebar-item css-check"
                    >
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">
                          Property Facilities
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
                    <Link
                      key="5"
                      to="/registrationDetail/roomFacilities"
                      className="slidebar-item slidebar-item--is-active css-check"
                    >
                      <div className="c-flexbox css-nb">
                        <span className="text css-nb-text">
                          Room Facilities
                        </span>
                        
                      </div>
                    </Link>
                    
                  </div>
                </span>
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
                        key={item.ID_NOITHAT}
                        title={item.TEN_NOITHAT}
                        content={item["CTNT"].map((index) => (
                          <div className="checkbox-group control-container css-radio css-radio-gr">
                            <div className="table-row css-checkbox-group">
                              <div className="table-column checkbox">
                                <div className="accorfion-checkbox css-checkbox">
                                  <input
                                    type="checkbox"
                                    key={index.ID_CT_NOITHAT}
                                    ref={index.ID_CT_NOITHAT}
                                  />
                                  <label key={index.ID_CT_NOITHAT}>
                                    {index.TEN_CT}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
