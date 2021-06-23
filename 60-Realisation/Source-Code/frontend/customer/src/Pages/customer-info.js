import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import './customer-info.css';
import Axios from 'axios';

export class CustomerInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idAccount: document.location.pathname.substring(15),
            chooseNum: 1,
            lsRental_Past: [],
            lsRental_Future: [],
            username: "",
            password: "",
            input_password: "",
            input_rePassword: "",
            customerInfo: {},
            accountInfo:{},
            // THONGTINKH
            idTT: 0,
            tenKH: "",
            email: "",
            phone: "",
            giaytotuythanID: "",
            giaytotuythanType: "Căn cước công dân",
            quocTich: "",
            gioiTinh: "Nam",
        }
        this.getCustomerInfo();
        this.getAccountInfo();
        
    }
    getCustomerInfo = () => {
        Axios.post('http://localhost:33456/api/customer/getCustomerInfo', { idAccount: this.state.idAccount })
            .then(response => {
                if (response.data != 0) {
                    var lsFuture = [];
                    var lsPast = [];
                    Axios.post('http://localhost:33456/api/customer/getAllListRental',{idCustomerInfo: response.data.ID_TT_KHACHHANG.toString()})
                    .then(response2=>{
                        var exist = false;
                        response2.data.forEach(item =>{
                            /*
                            const year = item.NGAY_DEN.substring(0,4);
                            const month = item.NGAY_DEN.substring(5,7);
                            const day = item.NGAY_DEN.substring(8);
                            */
                            const now = this.getDateNow();
                            if(parseInt(item.NGAY_DEN.substring(0,4)<parseInt(now.substring(0,4)))||item.ID_TT_DCH == 3){
                                lsPast.push(item);
                                exist = true;
                            }
                            else if(parseInt(item.NGAY_DEN.substring(0,4)==parseInt(now.substring(0,4)))){
                                if(parseInt(item.NGAY_DEN.substring(5,7)<parseInt(now.substring(5,7)))){
                                    lsPast.push(item);
                                    exist = true;
                                }
                                else if(parseInt(item.NGAY_DEN.substring(5,7)==parseInt(now.substring(5,7)))){
                                    if(parseInt(item.NGAY_DEN.substring(8)<parseInt(now.substring(8)))){
                                        lsPast.push(item);
                                        exist = true;
                                    }
                                }
                            }
                            if(!exist){
                                lsFuture.push(item);
                            }

                        })
                        
                    })
                    this.state.customerInfo = response.data;
                    this.state.lsRental_Future = lsFuture;
                    this.state.lsRental_Past = lsPast;
                    this.setState(this,()=>{console.log(this.state.customerInfo)});
                }
            })
    }
    getAccountInfo = () =>{
        Axios.get('https://gift-api-v1.herokuapp.com/customer/list')
        .then(response => {
            response.data.forEach(item =>{
                if(item.id == this.state.idAccount){
                    this.state.accountInfo = item;
                    this.setState(this);
                }
            })
        })
    }
    getDateNow = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }
    setCustomerInfoState = () => {
        this.state.idTT = this.state.customerInfo.ID_TT_KHACHHANG;
        this.state.tenKH = this.state.customerInfo.TEN_KHACHHANG;
        this.state.email = this.state.customerInfo.EMAIL;
        this.state.phone = this.state.customerInfo.PHONE_NUMBER;
        this.state.giaytotuythanID = this.state.customerInfo.MA_GIAYTOTUYTHAN;
        this.state.giaytotuythanType = this.state.customerInfo.LOAI_GIAYTOTUYTHAN;
        this.state.quocTich = this.state.customerInfo.QUOCTICH;
        this.state.gioiTinh = (this.state.customerInfo.GIOITINH == true) ? "Nữ" : "Nam";
        this.setState(this);
    }
    changeChoose = (num) => {
        this.state.chooseNum = num;
        this.setState(this, () => {
            if (num == 0) {
                if(this.state.customerInfo.ID_TT_KHACHHANG != undefined){
                    this.setCustomerInfoState();
                }
                
            }
        });
    }
    confirmEmail = () => {
        if (!this.state.email.includes("@") || this.state.email == "") {
            return false;
        }
        return true;
    }
    confirmPhoneNumber = () => {
        if (this.state.phone.length < 10 ||
            this.state.phone < 0 ||
            this.state.phone == "") { return false; }
        return true;
    }
    // Input state
    setTenKH = (event) => {
        this.state.tenKH = event.target.value;
        this.setState(this);
    }
    setEmail = (event) => {
        this.state.email = event.target.value;
        this.setState(this);
    }
    setPhone = (event) => {
        this.state.phone = event.target.value;
        this.setState(this);
    }
    setGiaytotuythanID = (event) => {
        this.state.giaytotuythanID = event.target.value;
        this.setState(this);
    }
    setGiaytotuythanType = (event) => {
        this.state.giaytotuythanType = event.target.value;
        this.setState(this);
    }
    setQuocTich = (event) => {
        this.state.quocTich = event.target.value;
        this.setState(this);
    }
    setGioiTinh = (event) => {
        this.state.gioiTinh = event.target.value;
        this.setState(this);
    }
    setUsername = (event) => {
        this.state.username = event.target.value;
        this.setState(this);
    }
    setPassword = (event) => {
        this.state.password = event.target.value;
        this.setState(this);
    }
    setInputPassword = (event) => {
        this.state.input_password = event.target.value;
        this.setState(this);
    }
    setInputRePassword = (event) => {
        this.state.input_rePassword = event.target.value;
        this.setState(this);
    }
    updateCustomerInfo = () => {
        
        const sendData = (this.state.customerInfo.ID_TT_KHACHHANG != undefined ?
            {
                idCustomerInfo: this.state.idTT.toString(),
                tenKH: this.state.tenKH,
                email: this.state.email,
                phone: this.state.phone,
                gtttID: this.state.giaytotuythanID,
                gtttType: this.state.giaytotuythanType,
                quocTich: this.state.quocTich,
                gioiTinh: this.state.gioiTinh,
                idAccount: this.state.idAccount
            } :
            {
                tenKH: this.state.tenKH,
                email: this.state.email,
                phoneNumber: this.state.phone,
                maGiayTo: this.state.giaytotuythanID,
                loaiGiayTo: this.state.giaytotuythanType,
                quocTich: this.state.quocTich,
                gioiTinh: this.state.gioiTinh,
                idTK: this.state.idAccount
            })
            console.log(sendData)
        if (this.state.customerInfo.ID_TT_KHACHHANG != undefined) {
            Axios.post('http://localhost:33456/api/customer/updateCustomerInfo4Account', sendData)
                .then(response => {
                    this.getCustomerInfo();
                })
        }
        else {
            Axios.post('http://localhost:33456/api/customer/savePaymentInfo', sendData)
                .then(response => {
                    this.getCustomerInfo();
                })
        }
        alert("Cập nhật thông tin thành công");

    }
    changePassword = () =>{
        if(this.state.username==""||this.state.password==""||this.state.input_password==""||this.state.input_rePassword==""){
            alert("Hãy nhập đủ thông tin!");
        }
        else if(this.state.username != this.state.accountInfo.email||this.state.password!= this.state.accountInfo.pass){
            alert("Thông tin đăng nhập không khớp!");
        }
        else if(this.state.input_password != this.state.input_rePassword){
            alert("Nhập lại mật khẩu không khớp!");
        }
        else{
            Axios.patch(`https://oka1kh.azurewebsites.net/api/user/change_pass/${this.state.idAccount}`,
            {
                pass: this.state.input_password,
                repass: this.state.input_rePassword
            })
            .then(response =>{
                console.log(response.data)
                this.state.username = "";
                this.state.password = "";
                this.state.input_password = "";
                this.state.input_rePassword = "";
                this.setState(this);
                this.getAccountInfo();
            })
        }
    }
    refund = (order) =>{
        Axios.post('http://localhost:33456/api/customer/updateRentalState',{
                    idOrder: order.ID_DATCANHO.toString(),
                    idState: "3"
        }).then(response =>{
            Axios.put('https://gift-api-v1.herokuapp.com/customer/updatepoint',{
                                    khach_hang_id: this.state.idAccount,
                                    diem_tich_luy: -Math.round((order.TONGTIEN*2)/100)
                                })
            this.state.lsRental_Future.pop(order);
            this.state.lsRental_Past.push(order);
            this.setState(this);
            alert("Hoàn trả thành công!");
        })
    }
    getDateNow = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }
    uncancel= (order) =>{
        const dateNow = this.getDateNow();
        if(parseInt(order.NGAY_DEN.substring(0,4)<parseInt(dateNow.substring(0,4)))){
            alert("Đơn quá hạn, không thể khôi phục.");
        }
        else{
            if(parseInt(order.NGAY_DEN.substring(5,7)<parseInt(dateNow.substring(5,7)))){
                alert("Đơn quá hạn, không thể khôi phục.");
            }
            else{
                if(parseInt(order.NGAY_DEN.substring(8)<parseInt(dateNow.substring(8)))){
                    alert("Đơn quá hạn, không thể khôi phục.");
                }
                else{
                    Axios.post('http://localhost:33456/api/customer/updateRentalState',{
                        idOrder: order.ID_DATCANHO.toString(),
                        idState: "1"
            }).then(response =>{
                Axios.put('https://gift-api-v1.herokuapp.com/customer/updatepoint',{
                                    khach_hang_id: this.state.idAccount,
                                    diem_tich_luy: Math.round((order.TONGTIEN*2)/100)
                                })
                this.state.lsRental_Past.pop(order);
                this.state.lsRental_Future.push(order);
                this.setState(this);
                alert("Khôi phục thành công!");
            })
                }
            }
        }
        
    }
    render() {
        switch (this.state.chooseNum) {
            case 0: {
                return (
                    <div className="customer-info-wrap">
                        <table className="position-wrap">
                            <tr>
                                <td className="menu position-fixed">
                                    <ul>
                                        <li className="active">Thông tin cá nhân</li>
                                        <li onClick={() => this.changeChoose(1)}>Lịch thuê căn hộ</li>
                                        <li onClick={() => this.changeChoose(2)}>Điểm thưởng</li>
                                        <li onClick={() => this.changeChoose(3)}>Voucher của bạn</li>
                                        <li onClick={() => this.changeChoose(4)}>Lịch sử thuê căn hộ</li>
                                        <li onClick={() => this.changeChoose(5)}>Đổi mật khẩu</li>
                                    </ul>
                                </td>
                                <td className="content">
                                    <form style={{ marginLeft: "180px" }}>
                                        {this.state.tenKH != "" ?
                                            <div class="form-row">
                                                <label for="CICustomerName">Họ và tên:</label>
                                                <input type="text" class="form-control is-valid" id="CICustomerName" onChange={this.setTenKH} placeholder="Nhập họ và tên ..." defaultValue={this.state.tenKH} required />
                                            </div>
                                            : <div class="form-row">
                                                <label for="CICustomerName">Họ và tên:</label>
                                                <input type="text" class="form-control" id="CICustomerName" onChange={this.setTenKH} placeholder="Nhập họ và tên ..." defaultValue={this.state.tenKH} required />
                                            </div>}
                                        <br />
                                        {this.confirmEmail() ?
                                            <div class="form-row">
                                                <label for="FMCustomerEmail">Email:</label>
                                                <input type="text" class="form-control is-valid" id="FMCustomerEmail" onChange={this.setEmail} placeholder="Nhập email ..." defaultValue={this.state.email} required />
                                            </div>
                                            : <div class="form-row">
                                                <label for="FMCustomerEmail">Email:</label>
                                                <input type="text" class="form-control" id="FMCustomerEmail" onChange={this.setEmail} placeholder="Nhập email ..." defaultValue={this.state.email} required />
                                            </div>}
                                        <br />
                                        {this.confirmPhoneNumber() ?
                                            <div class="form-row">
                                                <label for="FMCustomerPhone">Số điện thoại:</label>
                                                <input type="number" class="form-control is-valid" id="FMCustomerPhone" onChange={this.setPhone} placeholder="Nhập số điện thoại ..." defaultValue={this.state.phone} required />
                                            </div>
                                            : <div class="form-row">
                                                <label for="FMCustomerPhone">Số điện thoại:</label>
                                                <input type="number" class="form-control" id="FMCustomerPhone" onChange={this.setPhone} placeholder="Nhập số điện thoại ..." defaultValue={this.state.phone} required />
                                            </div>}
                                        <br />
                                        <div class="form-row">
                                            <label for="FMCustomerHumanType">Loại giấy tờ tùy thân:</label>
                                            <select value={this.state.giaytotuythanType} onChange={this.setGiaytotuythanType} className="custom-select" id="FMCustomerHumanType" placeholder="Chọn loại ..." defaultValue={this.state.giaytotuythanType}>
                                                <option value="Căng cước công dân">Căn cước công dân</option>
                                                <option value="Chứng minh nhân dân">Chứng minh nhân dân</option>
                                                <option value="Hộ chiếu">Hộ chiếu</option>
                                                <option value="Visa">Visa</option>
                                            </select>
                                        </div>
                                        <br />
                                        {this.state.giaytotuythanID != "" ?
                                            <div class="form-row">
                                                <label for="FMCustomerHumanID">Mã {this.state.giaytotuythanType}:</label>
                                                <input type="number" class="form-control is-valid" id="FMCustomerHumanID" onChange={this.setGiaytotuythanID} placeholder={"Nhập mã " + this.state.giaytotuythanType + " ..."} defaultValue={this.state.giaytotuythanID} required />
                                            </div>
                                            : <div class="form-row">
                                                <label for="FMCustomerHumanID">Mã {this.state.giaytotuythanType}:</label>
                                                <input type="number" class="form-control" id="FMCustomerHumanID" onChange={this.setGiaytotuythanID} placeholder={"Nhập mã " + this.state.giaytotuythanType + " ..."} defaultValue={this.state.giaytotuythanID} required />
                                            </div>}
                                        <br />
                                        {this.state.quocTich != "" ?
                                            <div class="form-row">
                                                <label for="FMCustomerCountry">Quốc tịch:</label>
                                                <input type="text" class="form-control is-valid" id="FMCustomerCountry" onChange={this.setQuocTich} placeholder="Nhập quốc tịch ..." defaultValue={this.state.quocTich} required />
                                            </div>
                                            : <div class="form-row">
                                                <label for="FMCustomerCountry">Quốc tịch:</label>
                                                <input type="text" class="form-control" id="FMCustomerCountry" onChange={this.setQuocTich} placeholder="Nhập quốc tịch ..." defaultValue={this.state.quocTich} required />
                                            </div>}
                                        <br />
                                        <div class="form-row">
                                            <label for="FMCustomerGender">Loại giấy tờ tùy thân:</label>
                                            <select value={this.state.gioiTinh} onChange={this.setGioiTinh} className="custom-select" id="FMCustomerHumanGender" defaultValue={this.state.gioiTinh}>
                                                <option value="Nam">Nam</option>
                                                <option value="Nữ">Nữ</option>
                                                <option value="Khác">Khác</option>
                                            </select>
                                        </div>
                                    </form>
                                    <br />
                                    <button class="btn btn-primary profie__button" onClick={()=>this.updateCustomerInfo()}>Cập nhật</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                )
            }
            case 1: {
                return (
                    <div className="customer-info-wrap">
                        <table className="position-wrap">
                            <tr>
                                <td className="menu position-fixed">
                                    <ul>
                                        <li onClick={() => this.changeChoose(0)}>Thông tin cá nhân</li>
                                        <li className="active">Lịch thuê căn hộ</li>
                                        <li onClick={() => this.changeChoose(2)}>Điểm thưởng</li>
                                        <li onClick={() => this.changeChoose(3)}>Voucher của bạn</li>
                                        <li onClick={() => this.changeChoose(4)}>Lịch sử thuê căn hộ</li>
                                        <li onClick={() => this.changeChoose(5)}>Đổi mật khẩu</li>
                                    </ul>
                                </td>
                                <td className="content">
                                    <div style={{marginLeft: "25%"}}>
                                    {this.state.lsRental_Future.length == 0?
                                    <p>Không có dữ liệu</p> :
                                    <p></p>   
                                }
                                {this.state.lsRental_Future.map((val,key)=>{
                                    return(<ul className="rental-card">
                                        <li>Căn hộ/ Biệt thự: <b>{val.ID_NHA}</b></li>
                                        <li>Ngày đặt: <b>{val.NGAYDAT}</b></li>
                                        <li>Ngày đến: <b>{val.NGAY_DEN} ({val.CHECKIN.substring(11,16)})</b></li>
                                        <li>Ngày đi: <b>{val.NGAY_DI} ({val.CHECKOUT.substring(11,16)})</b></li>
                                        <li>Bữa sáng: <b>{val.BUASANG}</b></li>
                                        <li>Giường phụ: <b>{val.SO_GIUONGPHU}</b></li>
                                        <li>Ghi chú: <b>{val.GHICHU}</b></li>
                                        <li>Trạng thái: <b>{val.ID_TT_DCH_TRANGTHAIDATCANHO.TEN_TRANGTHAI}</b></li>
                                        <li>Thao tác: <p className="rental-card__button" onClick={() =>this.refund(val)}>Hủy thuê</p></li>
                                    </ul>)
                                    
                                })}
                                    </div>
                                
                                </td>
                            </tr>
                        </table>
                    </div>
                )
            }
            case 2: {
                return (
                    <div className="customer-info-wrap">
                        <table className="position-wrap">
                            <tr>
                                <td className="menu">
                                    <ul>
                                        <li onClick={() => this.changeChoose(0)}>Thông tin cá nhân</li>
                                        <li onClick={() => this.changeChoose(1)}>Lịch thuê căn hộ</li>
                                        <li className="active">Điểm thưởng</li>
                                        <li onClick={() => this.changeChoose(3)}>Voucher của bạn</li>
                                        <li onClick={() => this.changeChoose(4)}>Lịch sử thuê căn hộ</li>
                                        <li onClick={() => this.changeChoose(5)}>Đổi mật khẩu</li>
                                    </ul>
                                </td>
                                <td className="content">
                                    <p>Điểm của bạn: {this.state.accountInfo.diem_tich_luy==undefined?"0":this.state.accountInfo.diem_tich_luy} điểm</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                )
            }
            case 3: {
                return (
                    <div className="customer-info-wrap">
                        <table className="position-wrap">
                            <tr>
                                <td className="menu">
                                    <ul>
                                        <li onClick={() => this.changeChoose(0)}>Thông tin cá nhân</li>
                                        <li onClick={() => this.changeChoose(1)}>Lịch thuê căn hộ</li>
                                        <li onClick={() => this.changeChoose(2)}>Điểm thưởng</li>
                                        <li className="active">Voucher của bạn</li>
                                        <li onClick={() => this.changeChoose(4)}>Lịch sử thuê căn hộ</li>
                                        <li onClick={() => this.changeChoose(5)}>Đổi mật khẩu</li>
                                    </ul>
                                </td>
                                <td className="content">
                                    <p>Content</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                )
            }
            case 4: {
                return (
                    <div className="customer-info-wrap">
                        <table className="position-wrap">
                            <tr>
                                <td className="menu">
                                    <ul>
                                        <li onClick={() => this.changeChoose(0)}>Thông tin cá nhân</li>
                                        <li onClick={() => this.changeChoose(1)}>Lịch thuê căn hộ</li>
                                        <li onClick={() => this.changeChoose(2)}>Điểm thưởng</li>
                                        <li onClick={() => this.changeChoose(3)}>Voucher của bạn</li>
                                        <li className="active">Lịch sử thuê căn hộ</li>
                                        <li onClick={() => this.changeChoose(5)}>Đổi mật khẩu</li>
                                    </ul>
                                </td>
                                <td className="content">
                                    {this.state.lsRental_Past.length == 0?
                                    <p>Không có dữ liệu</p> :
                                    <p></p>   
                                }
                                    {this.state.lsRental_Past.map((val,key)=>{
                                        return(<ul className="rental-card">
                                        <li>Căn hộ/ Biệt thự: <b>{val.ID_NHA}</b></li>
                                        <li>Ngày đặt: <b>{val.NGAYDAT}</b></li>
                                        <li>Ngày đến: <b>{val.NGAY_DEN} ({val.CHECKIN.substring(11,16)})</b></li>
                                        <li>Ngày đi: <b>{val.NGAY_DI} ({val.CHECKOUT.substring(11,16)})</b></li>
                                        <li>Bữa sáng: <b>{val.BUASANG}</b></li>
                                        <li>Giường phụ: <b>{val.SO_GIUONGPHU}</b></li>
                                        <li>Ghi chú: <b>{val.GHICHU}</b></li>
                                        <li>Trạng thái: <b>{val.ID_TT_DCH_TRANGTHAIDATCANHO.TEN_TRANGTHAI}</b></li>
                                        <li>Thao tác: <p className="rental-card__button" onClick={()=>this.uncancel(val)}>Khôi phục</p></li>
                                    </ul>)
                                    })}
                                </td>
                            </tr>
                        </table>
                    </div>
                )
            }
            default: {
                return (
                    <div className="customer-info-wrap">
                        <table className="position-wrap">
                            <tr>
                                <td className="menu">
                                    <ul>
                                        <li onClick={() => this.changeChoose(0)}>Thông tin cá nhân</li>
                                        <li onClick={() => this.changeChoose(1)}>Lịch thuê căn hộ</li>
                                        <li onClick={() => this.changeChoose(2)}>Điểm thưởng</li>
                                        <li onClick={() => this.changeChoose(3)}>Voucher của bạn</li>
                                        <li onClick={() => this.changeChoose(4)}>Lịch sử thuê căn hộ</li>
                                        <li className="active">Đổi mật khẩu</li>
                                    </ul>
                                </td>
                                <td className="content">
                                    <form>
                                        <div class="form-group">
                                            <label for="username">Tên đăng nhập</label>
                                            <input type="text" class="form-control" id="username" placeholder="Nhập tên đăng nhập ..." onChange={this.setUsername}/>
                                        </div>
                                        <div class="form-group">
                                            <label for="old">Mật khẩu cũ</label>
                                            <input type="password" class="form-control" id="old" placeholder="Nhập mật khẩu ..." onChange={this.setPassword}/>
                                        </div>
                                        <div class="form-group">
                                            <label for="password" className="tal-left">Mật khẩu mới</label>
                                            <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu ..." onChange={this.setInputPassword}/>
                                        </div>
                                        <div class="form-group">
                                            <label for="re-password" className="tal-left">Nhập lại mật khẩu mới</label>
                                            <input type="password" class="form-control" id="re-password" placeholder="Nhập lại mật khẩu ..." onChange={this.setInputRePassword}/>
                                        </div>
                                        <button class="btn btn-primary">Cập nhật</button>
                                    </form>
                                </td>
                            </tr>
                        </table>
                    </div>
                )
            }
        }

    }
}

export default CustomerInfoPage;
