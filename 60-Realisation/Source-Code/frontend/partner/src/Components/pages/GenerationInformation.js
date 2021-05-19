import React from "react";
import "../../App.css";
import { PropertyData } from "../data/PropertyType";
function GenerationInformation() {
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
        <div className="table-row css-row">
          <div className="detail__column css-col">
            <div
              className="box__detail css-bx-dtl"
              style={{ marginBottom: "30px" }}
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
                        <div className="block" style={{ marginLeft: "16px" }}>
                          <div
                            className="block-select control-container css-select css-radio-gr"
                            style={{ width: "250px" }}
                          >
                            <div className="select has-value">
                              <input
                                type="hidden"
                                name="generalInformation,propertyDetails,otherPropertyType"
                                value="RYOKAN"
                              />
                              <div className="select-control">
                                <div className="select-placeholder">
                                  <span>Ryokan</span>
                                </div>
                                {/* <div className="select-input" tabindex="0" style={{display: "inline-block"}}>&nbsp;</div> */}
                                <span className="select-arrow-zone">
                                  <span className="select-arrow"></span>
                                </span>
                              </div>
                              <div className="select-menu-outer"></div>
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
                    <div className="c-block">
                      <label className="c-label css-label">
                        <span>Location</span>
                        <span className="label-required">*</span>
                      </label>
                      <div>this is gg map that show your location</div>
                    </div>
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
                      <label className="block-label css-label">
                        <span>Postal Code</span>
                        <span className="label-required">*</span>
                      </label>
                      <div className="input-group css-number">
                        <div className="input-group__inner">
                          <div className="c-input control-container --is-error css-radio-gr">
                            <div className="__inner">
                              <div className="__padder">
                                <input
                                  name="generalInformation,propertyDetails,propertyAddress,postalCode"
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
                    <div className="c-block" style={{ marginTop: "16px" }}>
                      <label className="c-label css-label">
                        <span>Country</span>
                        <span className="label-required">*</span>
                      </label>
                      <div
                        className="box-select control-container --is-error css-select css-radio-gr"
                        style={{ width: "280px" }}
                      >
                        <div className="select is-error">
                          <input
                            type="hidden"
                            name="generalInformation,propertyDetails,propertyAddress,country"
                            value=""
                          />
                          <div className="select-control">
                            <div className="select-placeholder">Select...</div>
                            <span className="select-arrow-zone">
                              <span className="select-arrow"></span>
                            </span>
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
        <div className="block" style={{marginRight: "0px", marginBottom: "50px", backgroundColor:"red", width: "20px", height: "50px"}}></div>
      </div>
    </>
  );
}

export default GenerationInformation;
