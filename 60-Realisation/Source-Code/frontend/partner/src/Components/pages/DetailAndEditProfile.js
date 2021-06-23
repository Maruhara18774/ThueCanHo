/* eslint-disable react/no-direct-mutation-state */
import axios from "axios";
import React, { Component } from "react";
import Navbar from "../paner-form/Navbar";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      idTT: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      idenCode: "",
      idenType: "",
      country: "",
      gender: "",
      address: "",
      taxCode: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      idTT: nextProps.idTT,
      fullName: nextProps.fullName,
      email: nextProps.email,
      phoneNumber: nextProps.phoneNumber,
      idenCode: nextProps.idenCode,
      idenType: nextProps.idenType,
      country: nextProps.country,
      gender: nextProps.gender,
      address: nextProps.address,
      taxCode: nextProps.taxCode,
    });
  }

  fullNameHandler(e) {
    this.setState({ fullName: e.target.value });
  }

  emailHandler(e) {
    this.setState({ email: e.target.value });
  }
  phoneNumberHandler(e) {
    this.setState({ phoneNumber: e.target.value });
  }
  idenCodeHandler(e) {
    this.setState({ idenCode: e.target.value });
  }
  idenTypeHandler(e) {
    this.setState({ idenType: e.target.value });
  }
  countryHandler(e) {
    this.setState({ country: e.target.value });
  }
  genderHandler(e) {
    this.setState({ gender: e.target.value });
  }
  addressHandler(e) {
    this.setState({ address: e.target.value });
  }
  taxCodeHandler(e) {
    this.setState({ taxCode: e.target.value });
  }
  handleSave = (idtt) => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/updateContact", {
        idTT: idtt.toString(),
        fullName: this.state.fullName,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        idenCode: this.state.idenCode,
        idenType: this.state.idenType,
        country: this.state.country,
        gender: this.state.gender.toString(),
        address: this.state.address,
        taxCode: this.state.taxCode,
      })
      .then((result) => {
        console.log(result.data);
        this.setState(this);
        window.location.reload();
      });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Profile
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-horizontal">
                <div className="form-group" style={{ display: "flex" }}>
                  <label
                    className="control-label col-md-4"
                    style={{ maxWidth: "25.333333%" }}
                  >
                    Full Name:
                  </label>
                  <div className="col-md-5">
                    <input
                      style={{ height: "25px" }}
                      value={this.state.fullName}
                      onChange={(e) => this.fullNameHandler(e)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group" style={{ display: "flex" }}>
                  <label
                    className="control-label col-md-4"
                    style={{ maxWidth: "25.333333%" }}
                  >
                    Email
                  </label>
                  <div className="col-md-5">
                    <input
                      style={{ height: "25px" }}
                      value={this.state.email}
                      onChange={(e) => this.emailHandler(e)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group" style={{ display: "flex" }}>
                  <label
                    className="control-label col-md-4"
                    style={{ maxWidth: "25.333333%" }}
                  >
                    Phone Number
                  </label>
                  <div className="col-md-5">
                    <input
                      style={{ height: "25px" }}
                      value={this.state.phoneNumber}
                      onChange={(e) => this.phoneNumberHandler(e)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group" style={{ display: "flex" }}>
                  <label
                    className="control-label col-md-4"
                    style={{ maxWidth: "25.333333%" }}
                  >
                    Identification Code
                  </label>
                  <div className="col-md-5">
                    <input
                      style={{ height: "25px" }}
                      value={this.state.idenCode}
                      onChange={(e) => this.idenCodeHandler(e)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group" style={{ display: "flex" }}>
                  <label
                    className="control-label col-md-4"
                    style={{ maxWidth: "25.333333%" }}
                  >
                    Identification Type
                  </label>
                  <div className="col-md-5">
                    <input
                      style={{ height: "25px" }}
                      value={this.state.idenType}
                      onChange={(e) => this.idenTypeHandler(e)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group" style={{ display: "flex" }}>
                  <label
                    className="control-label col-md-4"
                    style={{ maxWidth: "25.333333%" }}
                  >
                    Country
                  </label>
                  <div className="col-md-5">
                    <input
                      style={{ height: "25px" }}
                      value={this.state.country}
                      onChange={(e) => this.countryHandler(e)}
                      className="form-control"
                    />
                  </div>
                </div>
                {this.state.gender ? (
                  <div className="form-group" style={{ display: "flex" }}>
                    <label
                      className="control-label col-md-4"
                      style={{ maxWidth: "25.333333%" }}
                    >
                      Gender
                    </label>
                    <div className="col-md-5" style={{ display: "flex" }}>
                      <input
                        type="radio"
                        className="form-control"
                        id="radio-9"
                        style={{ width: "19px", height: "19px" }}
                        name="editContact,previousNameBoolean"
                        value={this.state.gender}
                        checked="true"
                        onChange={(e) => this.genderHandler(e)}
                      />
                      <label
                        className="control-label"
                        htmlFor="radio-9"
                        style={{ marginLeft: "3px" }}
                      >
                        Female
                      </label>
                      <input
                        type="radio"
                        className="form-control"
                        id="radio-10"
                        style={{
                          width: "19px",
                          height: "19px",
                          marginLeft: "25px",
                        }}
                        name="editContact,previousNameBoolean"
                        value={!this.state.gender}
                        onChange={(e) => this.genderHandler(e)}
                      />
                      <label
                        className="control-label"
                        htmlFor="radio-10"
                        style={{ marginLeft: "3px" }}
                      >
                        Male
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="form-group" style={{ display: "flex" }}>
                    <label
                      className="control-label col-md-4"
                      style={{ maxWidth: "25.333333%" }}
                    >
                      Gender
                    </label>
                    <div className="col-md-5" style={{ display: "flex" }}>
                      <input
                        type="radio"
                        className="form-control"
                        id="radio-9"
                        style={{ width: "19px", height: "19px" }}
                        name="editContact,previousNameBoolean"
                        value={!this.state.gender}
                        onChange={(e) => this.genderHandler(e)}
                      />
                      <label
                        className="control-label"
                        htmlFor="radio-9"
                        style={{ marginLeft: "3px" }}
                      >
                        Female
                      </label>
                      <input
                        type="radio"
                        className="form-control"
                        id="radio-10"
                        style={{
                          width: "19px",
                          height: "19px",
                          marginLeft: "25px",
                        }}
                        name="editContact,previousNameBoolean"
                        value={this.state.gender}
                        checked={this.state.gender === false}
                        onChange={(e) => this.genderHandler(e)}
                      />
                      <label
                        className="control-label"
                        htmlFor="radio-10"
                        style={{ marginLeft: "3px" }}
                      >
                        Male
                      </label>
                    </div>
                  </div>
                )}
                <div className="form-group" style={{ display: "flex" }}>
                  <label
                    className="control-label col-md-4"
                    style={{ maxWidth: "25.333333%" }}
                  >
                    Address
                  </label>
                  <div className="col-md-5">
                    <input
                      style={{ height: "25px" }}
                      value={this.state.address}
                      onChange={(e) => this.addressHandler(e)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group" style={{ display: "flex" }}>
                  <label
                    className="control-label col-md-4"
                    style={{ maxWidth: "25.333333%" }}
                  >
                    Tax Code
                  </label>
                  <div className="col-md-5">
                    <input
                      style={{ height: "25px" }}
                      value={this.state.taxCode}
                      onChange={(e) => this.taxCodeHandler(e)}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => {
                  this.handleSave(this.state.idTT);
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class DetailAndEditProfile extends Component {
  constructor(props) {
    super(props);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      mainContact: {},
      idTk: localStorage.getItem("idTk")
    };
    this.showMainContact();
  }

  showMainContact = () => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/showContact", {
        idTk: this.state.idTk.toString(),
      })
      .then((result) => {
        console.log(result.data.ID_TT_CHUHO);
        this.state.mainContact = result.data;
        this.setState(this);
      })
      .catch((err) => console.log(err.result));
  };

  replaceModalItem(index) {
    this.setState({
      requiredItem: index,
    });
  }

  saveModalDetails(item) {
    let tempbrochure = this.state.mainContact;
    tempbrochure = item;
    this.setState({ mainContact: tempbrochure });
  }

  render() {
    const { mainContact } = this.state;
    return (
      <>
        <Navbar />
        <div
          style={{
            textAlign: "center",
            paddingBottom: "45px",
            backgroundColor: "white",
          }}
        >
          <h1>Your Profile</h1>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "100px",
              backgroundColor: "white",
            }}
          >
            <table
              className="table table-borderless"
              style={{
                width: "60%",
                fontSize: "20px",
                backgroundColor: "#f5deb38a",
                borderRadius: "4px",
              }}
            >
              <tbody>
                <tr>
                  <td className="span-name">Full Name</td>
                  <td className="p-name">{mainContact.TEN_CHUHO}</td>
                </tr>
                <tr>
                  <td className="span-name">Email</td>
                  <td className="p-name">{mainContact.EMAIL}</td>
                </tr>
                <tr>
                  <td className="span-name">Phone Number</td>
                  <td className="p-name">{mainContact.PHONE_NUMBER}</td>
                </tr>
                <tr>
                  <td className="span-name">Identification Code</td>
                  <td className="p-name">{mainContact.MA_GIAYTOTUYTHAN}</td>
                </tr>
                <tr>
                  <td className="span-name">Identification Type</td>
                  <td className="p-name">{mainContact.LOAI_GIAYTOTUYTHAN}</td>
                </tr>
                <tr>
                  <td className="span-name">Country</td>
                  <td className="p-name">{mainContact.QUOCTICH}</td>
                </tr>
                <tr>
                  <td className="span-name">Gender</td>
                  <td className="p-name">
                    {mainContact.GIOITINH ? "Nữ" : "Nam"}
                  </td>
                </tr>
                <tr>
                  <td className="span-name">Address</td>
                  <td className="p-name">{mainContact.DIACHI}</td>
                </tr>
                <tr>
                  <td className="span-name">Tax Code</td>
                  <td className="p-name">{mainContact.MASO_THUE}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="span-name"></td>
                  <td style={{ padding: "0" }}>
                    <button
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() =>
                        this.replaceModalItem(mainContact.ID_TT_CHUHO)
                      }
                      style={{ width: "176px", marginBottom: "20px" }}
                    >
                      edit
                    </button>{" "}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <Modal
          idTT={mainContact.ID_TT_CHUHO}
          fullName={mainContact.TEN_CHUHO}
          email={mainContact.EMAIL}
          phoneNumber={mainContact.PHONE_NUMBER}
          idenCode={mainContact.MA_GIAYTOTUYTHAN}
          idenType={mainContact.LOAI_GIAYTOTUYTHAN}
          country={mainContact.QUOCTICH}
          gender={mainContact.GIOITINH}
          address={mainContact.DIACHI}
          taxCode={mainContact.MASO_THUE}
          saveModalDetails={this.saveModalDetails}
        />
      </>
    );
  }
}

export default DetailAndEditProfile;
