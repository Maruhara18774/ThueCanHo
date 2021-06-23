/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import axios from "axios";
import Navbar from "../paner-form/Navbar";
import { Link } from "react-router-dom";
class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idOrder: document.location.pathname.substring(13),
      lstOrder: {},
      lstCustom: {},
      freeCancel: "",
    };
    this.getDetailOrder(this.state.idOrder);
    this.checkOrderCancel(this.state.idOrder);
  }
  getDetailOrder = (idCustomer) => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/getDetailOrder", {
        idOrder: idCustomer.toString(),
      })
      .then((result) => {
        console.log(result.data);
        console.log(result.data.ID_TT_KHACHHANG_THONGTINKHACHHANG);
        this.state.lstOrder = result.data;
        this.state.lstCustom = result.data.ID_TT_KHACHHANG_THONGTINKHACHHANG;
        this.setState(this);
      })
      .catch((err) => console.log(err.result));
  };
  changeHiredAction = (idNha, idOrder) => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/changeHired", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        this.props.history.push("/lstOrder/" + localStorage.getItem("idTk"));
      })
      .catch((err) => console.log(err.result));
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/changeStatusAction", {
        idOrder: idOrder.toString(),
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err.result));
  };
  changeCancelledActive = (idNha,idOrder) => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/changeStatusCancelled", {
        idOrder: idOrder.toString(),
      })
      .then((result) => {
        console.log(result.data);
        this.props.history.push("/lstOrder/" + localStorage.getItem("idTk"));
      })
      .catch((err) => console.log(err.result));
      axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/changeActive", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        window.location.reload();
      })
      .catch((err) => console.log(err.result));
  };
  changeActiveFinished = (idNha,idOrder) => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/changeActive", {
        idNha: idNha.toString(),
      })
      .then((result) => {
        console.log(result.data);
        this.props.history.push("/lstOrder/" + localStorage.getItem("idTk"));
      })
      .catch((err) => console.log(err.result));
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/changeStatusFinished", {
        idOrder: idOrder.toString(),
      })
      .then((result) => {
        console.log(result.data);
        this.props.history.push("/lstOrder/" + localStorage.getItem("idTk"));
      })
      .catch((err) => console.log(err.result));
  };
  checkOrderCancel = (idOrder) => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/checkOrderCancel", {
        idOrder: idOrder.toString(),
      })
      .then((result) => {
        console.log(result.data);
        this.state.freeCancel = result.data;
        this.setState(this);
      })
      .catch((err) => console.log(err.result));
  };
  render() {
    const { lstOrder, lstCustom } = this.state;
    return (
      <>
        <Navbar />
        <div className="btn-back">
          <Link
            to={"/lstOrder/" + localStorage.getItem("idTk")}
            className="back-list-order"
          >
            <i class="far fa-arrow-alt-circle-left" aria-hidden="true" style={{display: "flex"}}>
              <p style={{marginLeft: "8px"}}>Back to list</p>
            </i>
          </Link>
        </div>
        <div className="block-infor-order" style={{display: "flex"}}>
        <div className="table-detail">
        <table className="table-infor">
          <tr className="css-title-orderDetail">ORDER INFORMATION</tr>
          <tr>
            <td>ID Order</td>
            <td className="value-orderDetail">{lstOrder.ID_DATCANHO}</td>
          </tr>
          <tr>
            <td>ID Apartment</td>
            <td className="value-orderDetail">{lstOrder.ID_NHA}</td>
          </tr>
          <tr>
            <td>Booking date</td>
            <td className="value-orderDetail">{lstOrder.NGAYDAT}</td>
          </tr>
          <tr>
            <td>Check-in</td>
            <td className="value-orderDetail">{lstOrder.CHECKIN}</td>
          </tr>
          <tr>
            <td>Check-out</td>
            <td className="value-orderDetail">{lstOrder.CHECKOUT}</td>
          </tr>
          <tr>
            <td>Arrival date</td>
            <td className="value-orderDetail">{lstOrder.NGAY_DEN}</td>
          </tr>
          <tr>
            <td>Return day</td>
            <td className="value-orderDetail">{lstOrder.NGAY_DI}</td>
          </tr>
          <tr>
            <td>Total room rate</td>
            <td className="value-orderDetail">{lstOrder.TONGTIEN_PHONG}</td>
          </tr>
          <tr>
            <td>Breakfast</td>
            <td className="value-orderDetail">{lstOrder.BUASANG}</td>
          </tr>
          <tr>
            <td> Total breakfast</td>
            <td className="value-orderDetail">{lstOrder.TONGTIEN_BUASANG}</td>
          </tr>
          <tr>
            <td>Total number of extra beds</td>
            <td className="value-orderDetail">{lstOrder.SO_GIUONGPHU}</td>
          </tr>
          <tr>
            <td>Total extra bed</td>
            <td className="value-orderDetail">{lstOrder.TONGTIEN_GIUONGPHU}</td>
          </tr>
          <tr>
            <td>VAT</td>
            <td className="value-orderDetail">{lstOrder.PHI_GTGT}</td>
          </tr>
          <tr>
            <td>Total money</td>
            <td className="value-orderDetail">{lstOrder.TONGTIEN}</td>
          </tr>
          <tr>
            <td>Note</td>
            <td className="value-orderDetail">{lstOrder.GHICHU}</td>
          </tr>
          <tr>
            <td>Apartment booking status</td>
            <td className="value-orderDetail">{lstOrder.ID_TT_DCH}</td>
          </tr>
        </table>
        </div>
        {/* thông tin khách hàng */}
        <div className="info-customer">
          <table className="table-infor">
          <tr className="css-title-orderDetail">CUSTOMER INFORMATION</tr>
          <tr>
            <td>Customer name</td>
            <td className="value-orderDetail">{lstCustom.TEN_KHACHHANG}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td className="value-orderDetail">{lstCustom.EMAIL}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td className="value-orderDetail">{lstCustom.PHONE_NUMBER}</td>
          </tr>
          <tr>
            <td>ID Number</td>
            <td className="value-orderDetail">{lstCustom.MA_GIAYTOTUYTHAN}</td>
          </tr>
          <tr>
            <td>Identification</td>
            <td className="value-orderDetail">{lstCustom.LOAI_GIAYTOTUYTHAN}</td>
          </tr>
          <tr>
            <td>Nationality</td>
            <td className="value-orderDetail">{lstCustom.QUOCTICH}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td className="value-orderDetail">{lstCustom.GIOITINH ? "Nữ" : "Nam"}</td>
          </tr>
          </table>
          <div className="form-btn-status">
        {this.state.freeCancel ? (
          lstOrder.ID_TT_DCH === 1 ? (
            <>
              <button
                className="btn btn-success"
                
                onClick={() =>
                  this.changeHiredAction(lstOrder.ID_NHA, lstOrder.ID_DATCANHO)
                }
              >
                Action
              </button>
              <button
                button
                className="btn btn-danger"
                style={{marginLeft:"50px"}}
                onClick={() => this.changeCancelledActive(lstOrder.ID_NHA,lstOrder.ID_DATCANHO)}
              >
                Cancel
              </button>
            </>
          ) : lstOrder.ID_TT_DCH === 2 ? (
            <>
              <button
                className="btn btn-success"
                onClick={() => this.changeActiveFinished(lstOrder.ID_NHA,lstOrder.ID_DATCANHO)}
              >
                Finished
              </button>
              <button
                className="btn btn-danger"
                style={{marginLeft:"50px"}}
                onClick={() => this.changeCancelledActive(lstOrder.ID_NHA,lstOrder.ID_DATCANHO)}
              >
                Cancel
              </button>
            </>
          ) : (
            <Link to={"/lstOrder/" + localStorage.getItem("idTk")} style={{color:"#f5f5f5"}}>
              Back to list
            </Link>
          )
        ) : lstOrder.ID_TT_DCH === 1 ? (
          <>
            <button
              className="btn btn-success"
              onClick={() =>
                this.changeHiredAction(lstOrder.ID_NHA, lstOrder.ID_DATCANHO)
              }
            >
              Action
            </button>
            
          </>
        ) : lstOrder.ID_TT_DCH === 2 ? (
          <>
            <button
              className="btn btn-success"
              onClick={() => this.changeActiveFinished(lstOrder.ID_NHA,lstOrder.ID_DATCANHO)}
            >
              Finished
            </button>
          </>
        ) : (
          <button className="link-back">
            <Link to={"/lstOrder/" + localStorage.getItem("idTk")} >
              Back to list
            </Link>
          </button>
        )}
        </div>
        
        </div>
        
        </div>
        
        
      </>
    );
  }
}
export default OrderDetail;
