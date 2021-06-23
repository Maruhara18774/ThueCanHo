/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../paner-form/Navbar";
import "../../RegistrationDetail.css";
class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleState: 1,
      idOrder: 0,
      lstOrderNew: [],
      lstOrderAction: [],
      lstOrderFinished: [],
      lstOrderCancelled: [],
    };
    this.getListOrderNew();
    this.getListOrderAction();
    this.getListOrderFinished();
    this.getListOrderCancelled();
  }
  toggleTab = (index) => {
    this.setState({ toggleState: index });
  };
  financial = (x) => Intl.NumberFormat('vn-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(x);

  getListOrderNew = () => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/getListOrderNew", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data[0].ID_TT_CHUHO);
        this.state.lstOrderNew = result.data[0].NHAs;
        this.setState(this);
      })
      .catch((err) => console.log(err));
  };
  getListOrderAction = () => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/getListOrderAction", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data[0].ID_TT_CHUHO);
        //console.log(result.data[0].NHAs[0].DATCANHOs[0].ID_TT_KHACHHANG);
        this.state.lstOrderAction = result.data[0].NHAs;
        this.setState(this);
      })
      .catch((err) => console.log(err));
  };
  getListOrderFinished = () => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/getListOrderFinished", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data[0].ID_TT_CHUHO);
        this.state.lstOrderFinished = result.data[0].NHAs;
        this.setState(this);
      })
      .catch((err) => console.log(err));
  };
  getListOrderCancelled = () => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/getListOrderCancelled", {
        idTk: localStorage.getItem("idTk"),
      })
      .then((result) => {
        console.log(result.data[0].ID_TT_CHUHO);
        this.state.lstOrderCancelled = result.data[0].NHAs;
        this.setState(this);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { lstOrderNew, lstOrderAction, lstOrderFinished, lstOrderCancelled } =
      this.state;
    //var timeday = ;
    //var momentday = moment.utc(this.state.lstOrderNew.NGAY_DI);
    return (
      <>
        <Navbar />
        <div className="btn-back">
          <Link
            to={"/lstApartment/" + localStorage.getItem("idTk")}
            className="back-list"
          >
            <i class="fa fa-arrow-left" aria-hidden="true" style={{display: "flex"}}>
              <p style={{marginLeft: "8px"}}>Back to apartments list</p>
            </i>
          </Link>
        </div>

        <div className="container" style={{ paddingTop: "50px" }}>
          <div className="bloc-tabs">
            <button
              className={
                this.state.toggleState === 1 ? "tabs active-tabs" : "tabs"
              }
              onClick={() => this.toggleTab(1)}
            >
              New
            </button>
            <button
              className={
                this.state.toggleState === 2 ? "tabs active-tabs" : "tabs"
              }
              onClick={() => this.toggleTab(2)}
            >
              Action
            </button>
            <button
              className={
                this.state.toggleState === 3 ? "tabs active-tabs" : "tabs"
              }
              onClick={() => this.toggleTab(3)}
            >
              Finished
            </button>
            <button
              className={
                this.state.toggleState === 4 ? "tabs active-tabs" : "tabs"
              }
              onClick={() => this.toggleTab(4)}
            >
              Cancelled
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                this.state.toggleState === 1
                  ? "content  active-content"
                  : "content"
              }
            >
              <table className="table" style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th scope="col">ID Order</th>
                    <th scope="col">ID Apartment</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lstOrderNew.map((item) => (
                    <tr key={item.ID_TT_CHUHO}>
                      {item["DATCANHOs"].map((index) => (
                        <>
                          <th scope="row" key={index.ID_DATCANHO}>
                            {index.ID_DATCANHO}
                          </th>
                          <td>{index.ID_NHA}</td>
                          <td>{index.NGAYDAT}</td>
                          <td>
                            <Link
                              to={"/orderDetail/" + index.ID_DATCANHO}
                              className="btn btn-link"
                            >
                              View
                            </Link>
                          </td>
                        </>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className={
                this.state.toggleState === 2
                  ? "content  active-content"
                  : "content"
              }
            >
              <table className="table" style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th scope="col">ID Order</th>
                    <th scope="col">ID Apartment</th>
                    <th scope="col">Date Order</th>
                    <th scope="col">Date Come</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lstOrderAction.map((item) => (
                    <tr key={item.ID_TT_CHUHO}>
                      {item["DATCANHOs"].map((index) => (
                        <>
                          <th scope="row" key={index.ID_DATCANHO}>
                            {index.ID_DATCANHO}
                          </th>
                          <td>{index.ID_NHA}</td>
                          <td>{index.NGAYDAT}</td>
                          <td>{index.NGAY_DEN}</td>
                          <td>
                            <Link
                              to={"/orderDetail/" + index.ID_DATCANHO}
                              className="btn btn-link"
                            >
                              View
                            </Link>
                          </td>
                        </>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className={
                this.state.toggleState === 3
                  ? "content  active-content"
                  : "content"
              }
            >
              <table className="table" style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th scope="col">ID Order</th>
                    <th scope="col">ID Apartment</th>
                    <th scope="col">Date Order</th>
                    <th scope="col">Date Leave</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lstOrderFinished.map((item) => (
                    <tr key={item.ID_TT_CHUHO}>
                      {item["DATCANHOs"].map((index) => (
                        <>
                          <th scope="row" key={index.ID_DATCANHO}>
                            {index.ID_DATCANHO}
                          </th>
                          <td>{index.ID_NHA}</td>
                          <td>{index.NGAYDAT}</td>
                          <td>{index.NGAY_DI}</td>
                          <td>{this.financial(index.TONGTIEN)}</td>
                          <td>
                            <Link
                              to={"/orderDetail/" + index.ID_DATCANHO}
                              className="btn btn-link"
                            >
                              View
                            </Link>
                          </td>
                        </>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className={
                this.state.toggleState === 4
                  ? "content  active-content"
                  : "content"
              }
            >
              <table className="table" style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th scope="col">ID Order</th>
                    <th scope="col">ID Apartment</th>
                    <th scope="col">Apartment's Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lstOrderCancelled.map((item) => (
                    <tr key={item.ID_TT_CHUHO}>
                      {item["DATCANHOs"].map((index) => (
                        <>
                          <th scope="row" key={index.ID_DATCANHO}>
                            {index.ID_DATCANHO}
                          </th>
                          <td>{index.ID_NHA}</td>
                          <td>{index.NGAYDAT}</td>
                          <td>
                            <Link
                              to={"/orderDetail/" + index.ID_DATCANHO}
                              className="btn btn-link"
                            >
                              View
                            </Link>
                          </td>
                        </>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Order;
