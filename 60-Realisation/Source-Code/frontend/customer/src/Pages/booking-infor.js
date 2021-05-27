import React, { Component } from 'react';
import './booking-infor.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idApartment: document.location.pathname.substring(9),
            apartmentInfo: {},
            address: "",
            currentStep: 1,
            price: {},
            // TAIKHOAN - Tich diem
            username: "",
            password: "",
            // THONGTINKHACHHANG
            tenKH: "",
            email: "",
            phone: "",
            giaytotuythanID: "",
            giaytotuythanType: "giấy tờ tùy thân",
            quocTich: "",
            gioiTinh: "Nam",
            idTK: 0,
            // THONGTIN BOOKING
            ngayDen: "",
            ngayDi: "",
            checkIn: "",
            checkOut: "",
            soBuaSang: 0,
            soGiuongPhu: 0,
            ghiChu: "",
            // TINH TOAN
            totalPhong: 0,
            totalBuaSang: 0,
            totalGiuongPhu: 0,
            phiGTGT: 0,
            total: 0
        }
        this.getApartmentInfo();
    }
    // Action in form
    nextStep = (current) => {
        this.state.currentStep = current + 1;
        this.setState(this);
        if (this.state.currentStep == 4) {
            this.calcAll();
        }
        if (this.state.currentStep == 6) {
            var idTTKH = 0;
            Axios.post('http://localhost:33456/api/customer/searchPaymentInfo', {
                maGiayTo: this.state.giaytotuythanID,
                loaiGiayTo: this.state.giaytotuythanType,
            }).then((response) => {
                idTTKH = response.data;
                if (idTTKH == 0) {
                    Axios.post('http://localhost:33456/api/customer/savePaymentInfo', {
                        tenKH: this.state.tenKH,
                        email: this.state.email,
                        phoneNumber: this.state.phone,
                        maGiayTo: this.state.giaytotuythanID,
                        loaiGiayTo: this.state.giaytotuythanType,
                        quocTich: this.state.quocTich,
                        gioiTinh: this.state.gioiTinh,
                        idTK: this.state.idTK,
                    });
                    Axios.post('http://localhost:33456/api/customer/searchPaymentInfo', {
                        maGiayTo: this.state.giaytotuythanID,
                        loaiGiayTo: this.state.giaytotuythanType,
                    }).then((response) => {
                        idTTKH = response.data;
                    });
                    
                }
                const sendData = {
                    idNha: this.state.idApartment,
                    idTTKH: idTTKH.toString(),
                    ngayDat: this.getDateNow(),
                    checkIn: this.state.checkIn,
                    checkOut: this.state.checkOut,
                    ngayDen: this.state.ngayDen,
                    ngayDi: this.state.ngayDi,
                    tongTienPhong: this.state.totalPhong.toString(),
                    buaSang: this.state.soBuaSang.toString(),
                    tongTienBuaSang: this.state.totalBuaSang.toString(),
                    soGiuongPhu: this.state.soGiuongPhu.toString(),
                    tongTienGiuongPhu: this.state.totalGiuongPhu.toString(),
                    phiGTGT: this.state.phiGTGT.toString(),
                    tongTien: this.state.total.toString(),
                    ghiChu: this.state.ghiChu,
                }
                console.log(sendData);
                Axios.post('http://localhost:33456/api/customer/rentalApartment',sendData)
            });
        }
        window.scrollTo(0, 0);
    }
    prevStep = (current) => {
        this.state.currentStep = current - 1;
        this.setState(this);
        window.scrollTo(0, 0);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.state.ngayDen = this.getDateNow();
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
    countDate = () => {
        var day1 = new Date(this.state.ngayDen);
        var day2 = new Date(this.state.ngayDi);

        var difference = Math.abs(day2 - day1);
        var days = difference / (1000 * 3600 * 24)

        return days;
    }
    checkInput1 = () => {

        if (this.state.tenKH == "" ||
            this.state.email == "" ||
            !this.state.email.includes("@") ||
            this.state.phone == "" ||
            this.state.giaytotuythanID == "" ||
            this.state.quocTich == "") {
            return false;
        }

        return true;
    }
    checkInput2 = () => {

        if (this.state.ngayDen == "" ||
            this.state.ngayDi == "" ||
            this.state.checkIn == "" ||
            this.state.checkOut == "" ||
            this.state.soBuaSang < 0 ||
            this.state.soGiuongPhu < 0 ||
            this.state.soGiuongPhu > parseInt(this.state.apartmentInfo.SO_GIUONGPHU)) {
            return false;
        }

        return true;
    }
    checkInput3 = () => {
        if (this.state.username == "" || this.state.password == "") {
            alert("Chưa nhập đủ tên đăng nhập/ mật khẩu!");
        }
        else {
            Axios.post('http://localhost:33456/api/customer/signin', {
                "username": this.state.username,
                "password": this.state.password
            }).then((response) => {
                this.state.idTK = parseInt(response.data);
                this.setState(this, () => {
                    if (this.state.idTK == 0) {
                        alert("Thông tin đã nhập không đúng!");
                    }
                    else {
                        alert("Đăng nhập thành công");
                        this.nextStep(this.state.currentStep);
                    }
                });
            });
        }
    }
    calcAll = () => {
        var day = this.countDate();
        if (day <= 4) {
            this.state.totalPhong = (day * this.state.price.MUCGIA_MOT) - this.state.price.KHUYENMAI;
        }
        else if (day <= 7) {
            this.state.totalPhong = (day * this.state.price.MUCGIA_HAI) - this.state.price.KHUYENMAI;
        }
        else {
            this.state.totalPhong = (day * this.state.price.MUCGIA_BA) - this.state.price.KHUYENMAI;
        }
        if (this.state.soBuaSang > 0) {
            this.state.totalBuaSang = this.state.soBuaSang * day * this.state.apartmentInfo.PHUPHI_BUASANG;
        }
        if (this.state.soGiuongPhu > 0) {
            this.state.totalGiuongPhu = this.state.soGiuongPhu * 200000;
        }
        var tong = this.state.totalPhong + this.state.totalBuaSang + this.state.totalGiuongPhu;
        this.state.phiGTGT = (tong * 10) / 100;
        this.state.total = tong + this.state.phiGTGT;
        this.setState(this);
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

    setNgayDen = (event) => {
        this.state.ngayDen = event.target.value;
        this.setState(this);
    }
    setNgayDi = (event) => {
        this.state.ngayDi = event.target.value;
        this.setState(this);
    }
    setCheckin = (event) => {
        this.state.checkIn = event.target.value;
        this.setState(this);
    }
    setCheckout = (event) => {
        this.state.checkOut = event.target.value;
        this.setState(this);
    }
    setSoBuaSang = (event) => {
        this.state.soBuaSang = parseInt(event.target.value);
        this.setState(this);
    }
    setSoGiuongPhu = (event) => {
        this.state.soGiuongPhu = parseInt(event.target.value);
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
    setGhiChu = (event) => {
        this.state.ghiChu = event.target.value;
        this.setState(this);
    }
    getDateNow = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }
    // Get start data from server
    getApartmentInfo = () => {
        Axios.post("http://localhost:33456/api/customer/getDetailApartment", { id: this.state.idApartment })
            .then(response => {
                this.state.apartmentInfo = response.data[0];
                this.setState(this, () => {
                    this.getAddress(this.state.apartmentInfo.ID_NHA);
                    this.getApartmentPrice(this.state.apartmentInfo.ID_BANGGIA.toString());
                });
            })

    }
    getAddress = (idNha) => {
        Axios.post('http://localhost:33456/api/customer/getAddressApartment', { id: idNha }).then(
            (response) => {
                this.state.address = response.data;
                this.setState(this);
            });
    }
    getApartmentPrice = (idBangGia) => {
        Axios.post('http://localhost:33456/api/customer/getApartmentPrice', { idPrice: idBangGia }).then(
            (response) => {
                this.state.price = response.data;
                this.setState(this);
            });
    }
    render() {
        switch (this.state.currentStep) {
            case 1:
                return (

                    <div className="booking-position">
                        <div className="booking-wrap">
                            <div className="progcess">
                                <table>
                                    <tr>
                                        <td><i class="far fa-user active"></i></td>
                                        <td><hr className="spacing" /></td>
                                        <td><i class="fas fa-home"></i></td>
                                        <td><hr className="spacing" /></td>
                                        <td><i class="fas fa-sign-in-alt"></i></td>
                                        <td><hr className="spacing" /></td>
                                        <td><i class="fas fa-gift"></i></td>
                                        <td><hr className="spacing" /></td>
                                        <td><i class="fas fa-money-bill-wave"></i></td>
                                    </tr>
                                    <tr>
                                        <th className="active">Cá nhân</th>
                                        <th />
                                        <th>Dịch vụ</th>
                                        <th />
                                        <th>Tích điểm</th>
                                        <th />
                                        <th>Quà tặng</th>
                                        <th />
                                        <th>Xác nhận</th>
                                    </tr>
                                </table>
                            </div>
                            <hr />
                            <div className="inputZone">
                                <p className="title">Thông tin khách hàng</p>
                                <form>
                                    {this.state.tenKH != "" ?
                                        <div class="form-row">
                                            <label for="FMCustomerName">Họ và tên:</label>
                                            <input type="text" class="form-control is-valid" id="FMCustomerName" onChange={this.setTenKH} placeholder="Nhập họ và tên ..." required />
                                        </div>
                                        : <div class="form-row">
                                            <label for="FMCustomerName">Họ và tên:</label>
                                            <input type="text" class="form-control" id="FMCustomerName" onChange={this.setTenKH} placeholder="Nhập họ và tên ..." required />
                                        </div>}
                                    <br />
                                    {this.confirmEmail() ?
                                        <div class="form-row">
                                            <label for="FMCustomerEmail">Email:</label>
                                            <input type="text" class="form-control is-valid" id="FMCustomerEmail" onChange={this.setEmail} placeholder="Nhập email ..." required />
                                        </div>
                                        : <div class="form-row">
                                            <label for="FMCustomerEmail">Email:</label>
                                            <input type="text" class="form-control" id="FMCustomerEmail" onChange={this.setEmail} placeholder="Nhập email ..." required />
                                        </div>}
                                    <br />
                                    {this.confirmPhoneNumber() ?
                                        <div class="form-row">
                                            <label for="FMCustomerPhone">Số điện thoại:</label>
                                            <input type="number" class="form-control is-valid" id="FMCustomerPhone" onChange={this.setPhone} placeholder="Nhập số điện thoại ..." required />
                                        </div>
                                        : <div class="form-row">
                                            <label for="FMCustomerPhone">Số điện thoại:</label>
                                            <input type="number" class="form-control" id="FMCustomerPhone" onChange={this.setPhone} placeholder="Nhập số điện thoại ..." required />
                                        </div>}
                                    <br />
                                    <div class="form-row">
                                        <label for="FMCustomerHumanType">Loại giấy tờ tùy thân:</label>
                                        <select value={this.state.giaytotuythanType} onChange={this.setGiaytotuythanType} className="custom-select" id="FMCustomerHumanType">
                                            <option value="Căng cước công dân" selected>Căn cước công dân</option>
                                            <option value="Chứng minh nhân dân">Chứng minh nhân dân</option>
                                            <option value="Hộ chiếu">Hộ chiếu</option>
                                            <option value="Visa">Visa</option>
                                        </select>
                                    </div>
                                    <br />
                                    {this.state.giaytotuythanID != "" ?
                                        <div class="form-row">
                                            <label for="FMCustomerHumanID">Mã {this.state.giaytotuythanType}:</label>
                                            <input type="number" class="form-control is-valid" id="FMCustomerHumanID" onChange={this.setGiaytotuythanID} placeholder={"Nhập mã " + this.state.giaytotuythanType + " ..."} required />
                                        </div>
                                        : <div class="form-row">
                                            <label for="FMCustomerHumanID">Mã {this.state.giaytotuythanType}:</label>
                                            <input type="number" class="form-control" id="FMCustomerHumanID" onChange={this.setGiaytotuythanID} placeholder={"Nhập mã " + this.state.giaytotuythanType + " ..."} required />
                                        </div>}
                                    <br />
                                    {this.state.quocTich != "" ?
                                        <div class="form-row">
                                            <label for="FMCustomerCountry">Quốc tịch:</label>
                                            <input type="text" class="form-control is-valid" id="FMCustomerCountry" onChange={this.setQuocTich} placeholder="Nhập quốc tịch ..." required />
                                        </div>
                                        : <div class="form-row">
                                            <label for="FMCustomerCountry">Quốc tịch:</label>
                                            <input type="text" class="form-control" id="FMCustomerCountry" onChange={this.setQuocTich} placeholder="Nhập quốc tịch ..." required />
                                        </div>}
                                    <br />
                                    <div class="form-row">
                                        <label for="FMCustomerGender">Loại giấy tờ tùy thân:</label>
                                        <select value={this.state.gioiTinh} onChange={this.setGioiTinh} className="custom-select" id="FMCustomerHumanGender">
                                            <option value="Nam" selected>Nam</option>
                                            <option value="Nữ">Nữ</option>
                                            <option value="Khác">Khác</option>
                                        </select>
                                    </div>
                                </form>
                                <br />
                                {this.checkInput1() ?
                                    <button type="button" class="btn btn-warning btn-lg" onClick={() => this.nextStep(this.state.currentStep)}>Bước tiếp theo</button> :
                                    <button type="button" class="btn btn-secondary btn-lg" disabled>Hãy điền đủ thông tin ...</button>}
                            </div>
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div className="booking-position">
                        <div className="booking-wrap">
                            <div className="progcess">
                                <table>
                                    <tr>
                                        <td><i class="far fa-user done"></i></td>
                                        <td><hr className="activeSPC" /></td>
                                        <td><i class="fas fa-home active"></i></td>
                                        <td><hr className="spacing" /></td>
                                        <td><i class="fas fa-sign-in-alt"></i></td>
                                        <td><hr className="spacing" /></td>
                                        <td><i class="fas fa-gift"></i></td>
                                        <td><hr className="spacing" /></td>
                                        <td><i class="fas fa-money-bill-wave"></i></td>
                                    </tr>
                                    <tr>
                                        <th className="done">Cá nhân</th>
                                        <th />
                                        <th className="active">Dịch vụ</th>
                                        <th />
                                        <th>Tích điểm</th>
                                        <th />
                                        <th>Quà tặng</th>
                                        <th />
                                        <th>Xác nhận</th>
                                    </tr>
                                </table>
                            </div>
                            <hr />
                            <div className="inputZone">
                                <p className="title">Thông tin thuê</p>
                                <form>
                                    <div className="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="FMBookingDayFrom">Ngày đến</label>
                                            <input type="date" class="form-control is-valid" id="FMBookingDayFrom" min={this.getDateNow()} value={this.getDateNow()} onChange={this.setNgayDen} required />
                                        </div>
                                        {this.state.ngayDi != "" ?
                                            <div class="form-group col-md-6">
                                                <label for="FMBookingDayTo">Ngày đi</label>
                                                <input type="date" class="form-control is-valid" id="FMBookingDayTo" min={this.state.ngayDen} onChange={this.setNgayDi} required />
                                            </div>
                                            : <div class="form-group col-md-6">
                                                <label for="FMBookingDayTo">Ngày đi</label>
                                                <input type="date" class="form-control" id="FMBookingDayTo" min={this.state.ngayDen} onChange={this.setNgayDi} required />
                                            </div>}
                                    </div>
                                    <div className="form-row">
                                        {this.state.checkIn != "" ?
                                            <div class="form-group col-md-6">
                                                <label for="FMBookingTimeFrom">Checkin</label>
                                                <input type="time" class="form-control is-valid" id="FMBookingTimeFrom" onChange={this.setCheckin} required />
                                            </div>
                                            : <div class="form-group col-md-6">
                                                <label for="FMBookingTimeFrom">Checkin</label>
                                                <input type="time" class="form-control" id="FMBookingTimeFrom" onChange={this.setCheckin} required />
                                            </div>}
                                        {this.state.checkOut != "" ?
                                            <div class="form-group col-md-6">
                                                <label for="FMBookingTimeTo">Checkout</label>
                                                <input type="time" class="form-control is-valid" id="FMBookingTimeTo" onChange={this.setCheckout} required />
                                            </div>
                                            : <div class="form-group col-md-6">
                                                <label for="FMBookingTimeTo">Checkout</label>
                                                <input type="time" class="form-control" id="FMBookingTimeTo" onChange={this.setCheckout} required />
                                            </div>}
                                    </div>
                                    <div className="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="FMBookingBrfCount">Số bữa sáng</label>
                                            <input type="number" class="form-control is-valid" id="FMBookingBrfCount" placeholder="Nhập số bữa sáng ..." defaultValue="0" onChange={this.setSoBuaSang} />
                                        </div>
                                        {this.state.soGiuongPhu <= parseInt(this.state.apartmentInfo.SO_GIUONGPHU) ?
                                            <div class="form-group col-md-6">
                                                <label for="FMBookingExBed">Số giường phụ</label>
                                                <input type="number" class="form-control  is-valid" id="FMBookingExBed" placeholder="Nhập số giường phụ ..." defaultValue="0" onChange={this.setSoGiuongPhu} />
                                            </div> :
                                            <div class="form-group col-md-6">
                                                <label for="FMBookingExBed">Số giường phụ</label>
                                                <input type="number" class="form-control" id="FMBookingExBed" placeholder="Nhập số giường phụ ..." defaultValue="0" onChange={this.setSoGiuongPhu} />
                                            </div>
                                        }
                                    </div>
                                    <div className="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="FMBookingNote">Ghi chú</label>
                                            <textarea class="form-control is-valid" id="FMBookingNote" rows="3" onChange={this.setGhiChu}></textarea>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-row">
                                        <div class="form-group col-md-6">
                                            <button type="button" class="btn btn-secondary btn-lg" onClick={() => this.prevStep(this.state.currentStep)}>Trở về</button>
                                        </div>
                                        <div class="form-group col-md-6">
                                            {this.checkInput2() ?
                                                <button type="button" class="btn btn-warning btn-lg" onClick={() => this.nextStep(this.state.currentStep)}>Bước tiếp theo</button> :
                                                <button type="button" class="btn btn-secondary btn-lg" disabled>Hãy điền đủ thông tin ...</button>}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            case 3:
                return (
                    <div className="booking-position">
                        <div className="booking-wrap">
                            <div className="progcess">
                                <table>
                                    <tr>
                                        <td><i class="far fa-user done"></i></td>
                                        <td><hr className="doneSPC" /></td>
                                        <td><i class="fas fa-home done"></i></td>
                                        <td><hr className="activeSPC" /></td>
                                        <td><i class="fas fa-sign-in-alt active"></i></td>
                                        <td><hr className="spacing" /></td>
                                        <td><i class="fas fa-gift"></i></td>
                                        <td><hr className="spacing" /></td>
                                        <td><i class="fas fa-money-bill-wave"></i></td>
                                    </tr>
                                    <tr>
                                        <th className="done">Cá nhân</th>
                                        <th />
                                        <th className="done">Dịch vụ</th>
                                        <th />
                                        <th className="active">Tích điểm</th>
                                        <th />
                                        <th>Quà tặng</th>
                                        <th />
                                        <th>Xác nhận</th>
                                    </tr>
                                </table>
                            </div>
                            <hr />
                            <div className="inputZone">
                                <p className="title">Xác nhận đăng nhập</p>
                                <form>
                                    <div className="form-row">
                                        <div class="form-group check col-md-12 ">
                                            <label for="FMPointUsername">Tên đăng nhập</label>
                                            <input type="text" class="form-control" id="FMPointUsername" placeholder="Nhập tên đăng nhập ..." onChange={this.setUsername} defaultValue={this.state.username} required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div class="form-group check col-md-12">
                                            <label for="FMPointPassword">Mật khẩu</label>
                                            <input type="password" class="form-control" id="FMPointPassword" placeholder="Nhập mật khẩu ..." onChange={this.setPassword} defaultValue={this.state.password} required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div class="form-group col-md-4">
                                            <button type="button" class="btn btn-secondary btn-lg" onClick={() => this.prevStep(this.state.currentStep)}>Trở về</button>
                                        </div>
                                        {this.state.username != "" && this.state.password != "" ?
                                            <div class="form-group col-md-4">
                                                <button type="button" class="btn btn-primary btn-lg" onClick={() => this.checkInput3()}>Xác nhận</button>
                                            </div> :
                                            <div class="form-group col-md-4">
                                                <button type="button" class="btn btn-secondary btn-lg" onClick={() => this.checkInput3()} disabled>Xác nhận</button>
                                            </div>
                                        }

                                        <div class="form-group col-md-4">
                                            <button type="button" class="btn btn-warning btn-lg" onClick={() => this.nextStep(this.state.currentStep)}>Bước tiếp theo</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div className="booking-position">
                        <div className="booking-wrap">
                            <div className="progcess">
                                <table>
                                    <tr>
                                        <td><i class="far fa-user done"></i></td>
                                        <td><hr className="doneSPC" /></td>
                                        <td><i class="fas fa-home done"></i></td>
                                        <td><hr className="doneSPC" /></td>
                                        <td><i class="fas fa-sign-in-alt done"></i></td>
                                        <td><hr className="activeSPC" /></td>
                                        <td><i class="fas fa-gift active"></i></td>
                                        <td><hr className="spacing" /></td>
                                        <td><i class="fas fa-money-bill-wave"></i></td>
                                    </tr>
                                    <tr>
                                        <th className="done">Cá nhân</th>
                                        <th />
                                        <th className="done">Dịch vụ</th>
                                        <th />
                                        <th className="done">Tích điểm</th>
                                        <th />
                                        <th className="active">Quà tặng</th>
                                        <th />
                                        <th>Xác nhận</th>
                                    </tr>
                                </table>
                            </div>
                            <hr />
                            <div className="inputZone">
                                <p className="title">Chọn quà tặng</p>
                                <form>
                                    <br />
                                    <div className="form-row">
                                        <div class="form-group col-md-6">
                                            <button type="button" class="btn btn-secondary btn-lg" onClick={() => this.prevStep(this.state.currentStep)}>Trở về</button>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <button type="button" class="btn btn-warning btn-lg" onClick={() => this.nextStep(this.state.currentStep)}>Bước tiếp theo</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            case 5:
                return (
                    <div className="booking-position">
                        <div className="booking-wrap">
                            <div className="progcess">
                                <table>
                                    <tr>
                                        <td><i class="far fa-user done"></i></td>
                                        <td><hr className="doneSPC" /></td>
                                        <td><i class="fas fa-home done"></i></td>
                                        <td><hr className="doneSPC" /></td>
                                        <td><i class="fas fa-sign-in-alt done"></i></td>
                                        <td><hr className="doneSPC" /></td>
                                        <td><i class="fas fa-gift done"></i></td>
                                        <td><hr className="activeSPC" /></td>
                                        <td><i class="fas fa-money-bill-wave active"></i></td>
                                    </tr>
                                    <tr>
                                        <th className="done">Cá nhân</th>
                                        <th />
                                        <th className="done">Dịch vụ</th>
                                        <th />
                                        <th className="done">Tích điểm</th>
                                        <th />
                                        <th className="done">Quà tặng</th>
                                        <th />
                                        <th className="active">Xác nhận</th>
                                    </tr>
                                </table>
                            </div>
                            <hr />
                            <div className="inputZone">
                                <p className="title">Thông tin khách hàng</p>
                                <table>
                                    <tr>
                                        <td>Tên khách hàng:</td>
                                        <th>{this.state.tenKH}</th>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <th>{this.state.email}</th>
                                    </tr>
                                    <tr>
                                        <td>Số điện thoại:</td>
                                        <th>{this.state.phone}</th>
                                    </tr>
                                    <tr>
                                        <td>Giấy tờ tùy thân:</td>
                                        <th>{this.state.giaytotuythanType} - {this.state.giaytotuythanID}</th>
                                    </tr>
                                    <tr>
                                        <td>Quốc tịch:</td>
                                        <th>{this.state.quocTich}</th>
                                    </tr>
                                    <tr>
                                        <td>Giới tính:</td>
                                        <th>{this.state.gioiTinh}</th>
                                    </tr>
                                    {this.state.idTK != 0 ?
                                        <tr>
                                            <td>Tài khoản tích điểm:</td>
                                            <th>{this.state.username}</th>
                                        </tr> :
                                        <tr> </tr>}
                                </table>

                                <p className="title">Thông tin thuê căn hộ</p>
                                <table>
                                    <tr>
                                        <td>Tên căn hộ:</td>
                                        <th>{this.state.apartmentInfo.TEN_NHA}</th>
                                    </tr>
                                    <tr>
                                        <td>Địa chỉ:</td>
                                        <th>{this.state.address}</th>
                                    </tr>
                                    <tr>
                                        <td>Ngày:</td>
                                        <th>{this.state.ngayDen} - {this.state.ngayDi} ({this.countDate()} ngày)</th>
                                    </tr>
                                    <tr>
                                        <td>Checkin:</td>
                                        <th>{this.state.checkIn}</th>
                                    </tr>
                                    <tr>
                                        <td>Checkout:</td>
                                        <th>{this.state.checkOut}</th>
                                    </tr>
                                    <tr>
                                        <td>Tiền phòng:</td>
                                        <th>{this.state.totalPhong}</th>
                                    </tr>
                                    <tr>
                                        <td>Số bữa sáng:</td>
                                        <th>{this.state.soBuaSang}</th>
                                    </tr>
                                    <tr>
                                        <td>Tiền bữa sáng:</td>
                                        <th>{this.state.totalBuaSang}</th>
                                    </tr>
                                    <tr>
                                        <td>Số giường phụ:</td>
                                        <th>{this.state.soGiuongPhu}</th>
                                    </tr>
                                    <tr>
                                        <td>Tiền giường phụ:</td>
                                        <th>{this.state.totalGiuongPhu}</th>
                                    </tr>
                                    <tr>
                                        <td>Phí GTGT:</td>
                                        <th>{this.state.phiGTGT}</th>
                                    </tr>
                                    <tr>
                                        <td>Tổng cộng:</td>
                                        <th>{this.state.total}</th>
                                    </tr>
                                </table>
                                <form>
                                    <br />
                                    <div className="form-row">
                                        <div class="form-group col-md-6">
                                            <button type="button" class="btn btn-secondary btn-lg" onClick={() => this.prevStep(this.state.currentStep)}>Trở về</button>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <button type="button" class="btn btn-warning btn-lg" onClick={() => this.nextStep(this.state.currentStep)}>Gửi thông tin</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            default:
                return (
                    <div className="booking-position">
                        <div className="booking-wrap">
                            <div className="progcess">
                                <table>
                                    <tr>
                                        <td><i class="far fa-user done"></i></td>
                                        <td><hr className="doneSPC" /></td>
                                        <td><i class="fas fa-home done"></i></td>
                                        <td><hr className="doneSPC" /></td>
                                        <td><i class="fas fa-sign-in-alt done"></i></td>
                                        <td><hr className="doneSPC" /></td>
                                        <td><i class="fas fa-gift done"></i></td>
                                        <td><hr className="doneSPC" /></td>
                                        <td><i class="fas fa-money-bill-wave done"></i></td>
                                    </tr>
                                    <tr>
                                        <th className="done">Cá nhân</th>
                                        <th />
                                        <th className="done">Dịch vụ</th>
                                        <th />
                                        <th className="done">Tích điểm</th>
                                        <th />
                                        <th className="done">Quà tặng</th>
                                        <th />
                                        <th className="done">Xác nhận</th>
                                    </tr>
                                </table>
                            </div>
                            <hr />
                            <div className="inputZone">
                                <p className="title">Đặt thuê thành công</p>
                                <p className="title">Chúng tôi sẽ liên hệ sớm nhất có thể</p>
                            </div>
                            <Link to="/">Trở về trang chủ</Link>
                        </div>
                    </div>
                )
        }

    }
}
