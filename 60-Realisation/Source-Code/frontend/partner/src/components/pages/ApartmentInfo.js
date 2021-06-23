/* eslint-disable react/no-direct-mutation-state */
import axios from "axios";
import React from "react";
import Navbar from '../paner-form/Navbar'
import { Link } from "react-router-dom";
class ApartmentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idApartment: document.location.pathname.substring(15),
      apartmentInfo: {},
      lsRoom: {},
      room: {},
      bed: {}
    };
    this.getApartmentInfo();
  }
  getApartmentInfo = () => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/getDetailApartment", {
        id: this.state.idApartment.toString(),
      })
      .then((response) => {
        this.state.apartmentInfo = response.data[0];
        console.log(response.data[0]);
        this.setState(this, () => {
          this.getType(this.state.apartmentInfo.ID_LOAINHA.toString());
          this.getAddress(this.state.apartmentInfo.ID_NHA);
          this.getListRoom(this.state.apartmentInfo.ID_NHA);
        });
      });
  };
  getType = (idLoaiNha) => {
    console.log(this.state.apartmentInfo.ID_LOAINHA);
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/getTypeApart", {
        idType: idLoaiNha,
      })
      .then((response) => {
        this.state.typeApartment = response.data;
        this.setState(this);
      });
  };
  getAddress = (idNha) => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/getAddressApartment", {
        id: idNha.toString(),
      })
      .then((response) => {
        this.state.address = response.data;
        this.setState(this);
      });
  };
  getListRoom = (idNha) => {
    axios
      .post("https://rental-apartment-huflit.herokuapp.com/api/partner/getListRoom", {
        idApartment: idNha.toString(),
      })
      .then((response) => {
        this.state.lsRoom = response.data;
        this.state.room = response.data.ID_LOAIPHONG_LOAIPHONG;
        this.state.bed = response.data.ID_LOAIGIUONG_LOAIGIUONG;
        console.log(response.data.ID_LOAIPHONG_LOAIPHONG);
        this.setState(this);
      });
  };
  render() {
    return (
      <div className="detail-apartment-position" style={{backgroundColor:"#fff"}}>
        <Navbar/>
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
        <div className="container-view-apartment">
          <div className="detail-apartment-wrap">
            <div className="img-apartment" style={{display: "flex",float:"left"}}>
              <img src='../../images/Home.jpg' className="img-content" alt=""/>
            </div>
            <div className="header-table-info">
              <table className="table-Aifo-detail">
                <tr className="css-title-Ainfo">
                  <th colSpan="2" style={{textAlign:"center", borderBottomStyle:"double"}}>
                    <h2>Information Apartment</h2>
                  </th>
                </tr>
                <tr>
                  <td className="content-info">Apartment Name</td>
                  <td className="value-Ainfo">
                    <p className="nameApartment">
                      {this.state.apartmentInfo.TEN_NHA}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="content-info">Kinds of apartment</td>
                  <td>
                    <p className="sticker">{this.state.typeApartment}</p>
                  </td>
                </tr><tr>
                  <td className="content-info">Address</td>
                  <td>
                    <p className="location">
                      <span>
                        <i class="fas fa-map-marker-alt mrg5" style={{marginRight:"10px"}}></i>
                      </span>
                      {this.state.address}
                    </p>
                  </td>
                  </tr>
                  <tr>
                    <td className="content-info">Price per night</td>
                    <td>
                      <p className="priceRental">
                        {this.state.apartmentInfo.GIA -
                          this.state.apartmentInfo.KHUYENMAI}{" "}
                        VND
                      </p>
                    </td>
                  </tr>
              </table>
            </div>
          </div>
            <hr />
          <div className="else-wrap">
            <table className="description-table">
              <tr>
                <th colSpan="2" style={{textAlign:"center", borderBottomStyle:"double"}}><h2>GENERAL DESCRIPTION</h2></th>
                <th colSpan="2" style={{textAlign:"center", borderBottomStyle:"double"}}><h2>{this.state.lsRoom.TEN_PHONG}</h2></th>
              </tr>
              <tr>
                <td colSpan="2" className="Content-ul">
                  <i className="fas fa-circle" style={{fontSize:"5px", marginRight:"5px"}}/>
                  Location
                </td>
                <td colSpan="2" className="Content-ul">
                  <i className="fas fa-circle" style={{fontSize:"5px", marginRight:"5px"}}/>
                  Room for 2 people
                </td>
              </tr>
              <tr>
                <td className="content-info">Free Cancel</td>
                <td>{this.state.apartmentInfo.FREE_CANCEL === "true" ? "Yes" : "No"}</td>
                <td className="content-info">Acreage</td>
                <td>
                {this.state.lsRoom.CHIEUDAI_PHONG *
                          this.state.lsRoom.CHIEURONG_PHONG}{" "}
                        m2 ({this.state.lsRoom.CHIEUDAI_PHONG} x{" "}
                        {this.state.lsRoom.CHIEURONG_PHONG})
                </td>
              </tr>
              <tr>
                <td className="content-info">Apartment area</td>
                <td>{this.state.apartmentInfo.DIENTICH} m2</td>
                <td className="content-info">Kind of room</td>
                <td>{this.state.room.TEN_LOAIPHONG}
                    ({this.state.lsRoom.SONGUOITOIDA} người)
                  </td>
              </tr>
              <tr>
                <td className="content-info">Distance to city center</td>
                <td>{this.state.apartmentInfo.KHOANGCACH_TRUNGTAMTP}</td>
                <td className="content-info">Bed type</td>
                <td>{this.state.bed.TEN_LOAIGIUONG}</td>
              </tr>
              <tr>
                <td colSpan="2" className="Content-ul">
                  <i className="fas fa-circle" style={{fontSize:"5px", marginRight:"5px"}}/>
                  Check-in and check-out time
                </td>
                <td className="content-info">Number of extra beds</td>
                <td>{this.state.lsRoom.SOGIUONG_PHU}</td>
              </tr>
              <tr>
                <td className="content-info">Check-in</td>
                <td>{this.state.apartmentInfo.CHECKIN}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="content-info">Check-Out</td>
                <td>{this.state.apartmentInfo.CHECKOUT}</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ApartmentInfo;
