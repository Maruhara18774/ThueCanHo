import React, { Component } from 'react';
import './booking-infor.css';
import { Link } from 'react-router-dom';

export default class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idApartment: document.location.pathname.substring(9),
            currentStep: 1,
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
            gioiTinh: "",
            idTK: 0,
            // THONGTIN BOOKING
            ngayDen: "",
            ngayDi: "",
            checkIn: "",
            checkOut: "",
            soBuaSang: 0,
            soGiuongPhu: 0,
        }

    }
    nextStep = (current) => {
        this.state.currentStep = current + 1;
        this.setState(this);
        window.scrollTo(0,0);
    }
    prevStep = (current) => {
        this.state.currentStep = current - 1;
        this.setState(this);
        window.scrollTo(0,0);
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    confirmEmail = () =>{
        if(!this.state.email.includes("@")||this.state.email ==""){
            return false;
        }
        return true;
    }
    confirmPhoneNumber =()=>{
        if(this.state.phone.length<10||
            this.state.phone <0||
            this.state.phone=="")
            {return false;}
        return true;
    }
    checkInput = () =>{
        if(this.state.tenKH==""||
        this.state.email ==""||
        !this.state.email.includes("@")||
        this.state.phone==""||
        this.state.giaytotuythanID==""||
        this.state.quocTich==""){
            return false;
        }
        return true;
    }
    setTenKH = (event) =>{
        this.state.tenKH=event.target.value;
        this.setState(this);
    }
    setEmail = (event) =>{
        this.state.email=event.target.value;
        this.setState(this);
    }
    setPhone = (event) =>{
        this.state.phone=event.target.value;
        this.setState(this);
    }
    setGiaytotuythanID = (event) =>{
        this.state.giaytotuythanID=event.target.value;
        this.setState(this);
    }
    setGiaytotuythanType = (event) =>{
        this.state.giaytotuythanType=event.target.value;
        this.setState(this);
    }
    setQuocTich = (event) =>{
        this.state.quocTich=event.target.value;
        this.setState(this);
    }
    setGioiTinh = (event) =>{
        this.state.gioiTinh=event.target.value;
        this.setState(this);
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
                            <hr/>
                            <div className="inputZone">
                                <p className="title">Thông tin khách hàng</p>
                                <form>
                                        {this.state.tenKH!=""?
                                        <div class="form-row">
                                            <label for="FMCustomerName">Họ và tên:</label>
                                            <input type="text" class="form-control is-valid" id="FMCustomerName" onChange={this.setTenKH} placeholder="Nhập họ và tên ..." required />
                                            </div>
                                            : <div class="form-row">
                                                <label for="FMCustomerName">Họ và tên:</label>
                                            <input type="text" class="form-control" id="FMCustomerName" onChange={this.setTenKH} placeholder="Nhập họ và tên ..." required />
                                            </div>}
                                        <br/>
                                        {this.confirmEmail()?
                                        <div class="form-row">
                                            <label for="FMCustomerEmail">Email:</label>
                                            <input type="text" class="form-control is-valid" id="FMCustomerEmail" onChange={this.setEmail} placeholder="Nhập email ..." required />
                                            </div>
                                            : <div class="form-row">
                                                <label for="FMCustomerEmail">Email:</label>
                                            <input type="text" class="form-control" id="FMCustomerEmail" onChange={this.setEmail} placeholder="Nhập email ..." required />
                                        </div>}
                                        <br/>
                                        {this.confirmPhoneNumber()?
                                        <div class="form-row">
                                            <label for="FMCustomerPhone">Số điện thoại:</label>
                                            <input type="number" class="form-control is-valid" id="FMCustomerPhone" onChange={this.setPhone} placeholder="Nhập số điện thoại ..." required />
                                            </div>
                                            : <div class="form-row">
                                                <label for="FMCustomerPhone">Số điện thoại:</label>
                                            <input type="number" class="form-control" id="FMCustomerPhone" onChange={this.setPhone} placeholder="Nhập số điện thoại ..." required />
                                        </div>}
                                        <br/>
                                        <div class="form-row">
                                            <label for="FMCustomerHumanType">Loại giấy tờ tùy thân:</label>
                                            <select value={this.state.giaytotuythanType} onChange={this.setGiaytotuythanType} className="custom-select" id="FMCustomerHumanType">
                                                <option value="Căng cước công dân" selected>Căn cước công dân</option>
                                                <option value="Chứng minh nhân dân">Chứng minh nhân dân</option>
                                                <option value="Hộ chiếu">Hộ chiếu</option>
                                                <option value="Visa">Visa</option>
                                            </select>
                                        </div>
                                        <br/>
                                        {this.state.giaytotuythanID!=""?
                                        <div class="form-row">
                                            <label for="FMCustomerHumanID">Mã {this.state.giaytotuythanType}:</label>
                                            <input type="number" class="form-control is-valid" id="FMCustomerHumanID" onChange={this.setGiaytotuythanID} placeholder={"Nhập mã "+this.state.giaytotuythanType+" ..."} required />
                                            </div>
                                            : <div class="form-row">
                                                <label for="FMCustomerHumanID">Mã {this.state.giaytotuythanType}:</label>
                                            <input type="number" class="form-control" id="FMCustomerHumanID" onChange={this.setGiaytotuythanID} placeholder={"Nhập mã "+this.state.giaytotuythanType+" ..."} required />
                                        </div>}
                                        <br/>
                                        {this.state.quocTich!=""?
                                        <div class="form-row">
                                            <label for="FMCustomerCountry">Quốc tịch:</label>
                                            <input type="text" class="form-control is-valid" id="FMCustomerCountry" onChange={this.setQuocTich} placeholder="Nhập quốc tịch ..." required />
                                            </div>
                                            : <div class="form-row">
                                                <label for="FMCustomerCountry">Quốc tịch:</label>
                                            <input type="text" class="form-control" id="FMCustomerCountry" onChange={this.setQuocTich} placeholder="Nhập quốc tịch ..." required />
                                        </div>}
                                        <br/>
                                        <div class="form-row">
                                            <label for="FMCustomerGender">Loại giấy tờ tùy thân:</label>
                                            <select value={this.state.gioiTinh} onChange={this.setGioiTinh} className="custom-select" id="FMCustomerHumanGender">
                                                <option value="Nam" selected>Nam</option>
                                                <option value="Nữ">Nữ</option>
                                                <option value="Khác">Khác</option>
                                            </select>
                                        </div>
                                </form>
                                <br/>
                                {this.checkInput()?
                                <button type="button" class="btn btn-warning btn-lg" onClick={() => this.nextStep(this.state.currentStep)}>Bước tiếp theo</button>:
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
                            Bước 2
                            <button onClick={() => this.prevStep(this.state.currentStep)}>Previous</button>
                            <button onClick={() => this.nextStep(this.state.currentStep)}>Next</button>
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
                            Bước 3
                                <button onClick={() => this.prevStep(this.state.currentStep)}>Previous</button>
                            <button onClick={() => this.nextStep(this.state.currentStep)}>Next</button>
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
                            Bước 4
                            <button onClick={() => this.prevStep(this.state.currentStep)}>Previous</button>
                            <button onClick={() => this.nextStep(this.state.currentStep)}>Next</button>
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
                            Bước 5
                            <button onClick={() => this.prevStep(this.state.currentStep)}>Previous</button>
                            <button onClick={() => this.nextStep(this.state.currentStep)}>Next</button>
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
                            Thành công
                            <Link to="/">Trở về trang chủ</Link>
                        </div>
                    </div>
                )
        }

    }
}
