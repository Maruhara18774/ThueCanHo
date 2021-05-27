import React, { createRef } from "react";
import Axios from 'axios'
import { Link } from 'react-router-dom'
class MainContact extends React.Component {
  constructor(props) {
    super(props);
    this.idApart = createRef();
    this.fullName = createRef();
    this.email = createRef();
    this.phoneNumber = createRef();
    this.idenCode = createRef();
    this.idenType = createRef();
    this.country = createRef();
    this.gender = createRef();
    this.address = createRef();
    this.taxCode = createRef();
  }
  createContact = () => {
    Axios.post(
      "http://localhost:33456/api/partner/registrationDetail/contactRegistration",
      {
        "idNha": this.idApart.current.value,
        "fullName": this.fullName.current.value,
        "email": this.email.current.value,
        "phoneNumber": this.phoneNumber.current.value,
        "idenCode": this.idenCode.current.value,
        "idenType": this.idenType.current.value,
        "country": this.country.current.value,
        "gender": this.gender.current.value,
        "address": this.address.current.value,
        "taxCode": this.taxCode.current.value,
      }
    ).then((response) => {
      console.log(response.data);
    });
  };
  render() {
    return (
      <div className="table__column__2 css-column-2">
        <div className="table-row css-row" style={{ marginBottom: "16px" }}>
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
            <Link to="/registrationDetail/generationInformation">
              <button className="btn-contact" onClick={this.createContact}>
                Save and Continues
              </button>
            </Link>
          </div>
      </div>
    );
  }
}

export default MainContact;
