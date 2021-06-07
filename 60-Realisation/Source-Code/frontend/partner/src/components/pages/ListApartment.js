/* eslint-disable react/no-direct-mutation-state */
import axios from "axios";
import React from "react";

class ListApartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idTk: document.location.pathname.substring(14),
      idTT: 0,
      idApart: 0,
      lstApartment: [],
      price: [],
    };
    this.showApartment();
  }
  showApartment = () => {
    axios
      .post("http://localhost:33456/api/partner/showMainContact", {
        idTk: this.state.idTk,
      })
      .then((result) => {
        console.log(result.data[0].ID_TAIKHOAN);
        this.state.lstApartment = result.data[0].THONGTINCHUHOs[0].NHAs;
        this.setState(this);
      });
    }
  render() {
    return (
      <div key={this.state.idTk}>
        {this.state.lstApartment.map((item) => (
          <div key={item.ID_TAIKHOAN}>
            <div value={item.ID_TT_CHUHO}>
              <div value={item.THUTU_NHA}>
                <p>Ten chu ho: {item.TEN_CHUHO}</p>
                <p>ma nha: {item.ID_NHA}</p>
                <p>loai nha: {item.ID_LOAINHA}</p>
                <p>ten nha: {item.TEN_NHA}</p>
                {/* <p>
                  chinh sach huy phong:{" "}
                  {item.FREE_CANCEL.toString() ? "Yes" : "No"}
                </p>
                <p>checkin: {item.CHECKIN}</p>
                <p>checkout: {item.CHECKOUT}</p>
                <p>khoang cach: {item.KHOANGCACH_TRUNGTAMTP}</p>
                <p>so tang: {item.SOTANG}</p>
                <p>bua sang: {item.PHUPHI_BUASANG}</p>
                <p>so nha: {item.SONHA}</p>
                <p>ten duong: {item.TEN_DUONG}</p>
                <p>dien tich: {item.DIENTICH} km</p>
                <p>quan: {item.ID_QUAN}</p>
                <p>so nguoi: {item.SO_NGUOI}</p>
                <p>so giuong phu: {item.SO_GIUONGPHU}</p>
                <p>muc gia 1: {this.state.price.MUCGIA_MOT}</p>
                <p>muc gia 2: {item.MUCGIA_HAI}</p>
                <p>muc gia 3: {item.MUCGIA_BA}</p> */}
                <p>------------------------------------------------</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListApartment;
