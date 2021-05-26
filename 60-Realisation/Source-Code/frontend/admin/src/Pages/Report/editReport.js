import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditReport = () => {
  let history = useHistory();
  const { id } = useParams();
  const [apartment, setData] = useState({
    khachHang: "",
    apartmentName: "",   
    apartmentOwner: "",
    address: "",
    location: "",
    checkIn: "",
    checkOut: "",

    soNguoi: "",
    soGiuongNgu: "",
    tongTien: ""
  });

  const { khachHang, apartmentName, apartmentOwner, address, location, checkIn, chechOut, soNguoi, soGiuongNgu } = apartment;
  const onInputChange = e => {
    setData({ ...apartment, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadData();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3030/report/${id}`, apartment);
    history.push("/");
  };

  const loadData = async () => {
    const result = await axios.get(`http://localhost:3030/report/${id}`);
    setData(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <h3>Thông tin Khách hàng</h3>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Khách hàng" name="khacHang" value={apartment.khachHang} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Số người" name="soNguoi" value={apartment.soNguoi} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Số giường ngủ" name="soGiuongNgu" value={apartment.soGiuongNgu} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Ngày nhận phòng" name="checkIn" value={apartment.checkIn} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Ngày trả phòng" name="checkOut" value={apartment.checkOut} onChange={e => onInputChange(e)} />
          </div>

          <h3>Thông tin Căn hộ</h3>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Tên Căn hộ" name="apartmentName" value={apartment.apartmentName} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="email" className="form-control form-control-lg" placeholder="Chủ Căn hộ" name="apartmentOwner" value={apartment.apartmentOwner} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Địa chỉ" name="address" value={apartment.address} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Vị trí" name="location" value={apartment.location} onChange={e => onInputChange(e)} />
          </div>
            
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Tổng tiền" name="tongTien" value={apartment.tongTien} onChange={e => onInputChange(e)} />
          </div>
          <button className="btn btn-warning btn-block">Update Report</button>
        </form>
      </div>
    </div>
  );
};

export default EditReport;
