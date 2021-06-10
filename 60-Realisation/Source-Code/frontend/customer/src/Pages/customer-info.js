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
            input_username: "",
            input_password: "",
            input_rePassword: "",
            customerInfo: {},
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
    }
    getCustomerInfo = () => {
        Axios.post('http://localhost:33456/api/customer/getCustomerInfo', { idAccount: this.state.idAccount })
            .then(response => {
                if (response.data != 0) {
                    this.state.customerInfo = response.data;
                    this.setState(this);
                    console.log(this.state.customerInfo)
                }
            })
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
                this.setCustomerInfoState();
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
    updateCustomerInfo = () => {
        
        const sendData = (this.state.customerInfo != 0 ?
            {
                idCustomerInfo: this.state.idTT.toString(),
                tenKH: this.state.tenKH,
                email: this.state.email,
                phone: this.state.phone,
                gtttID: this.state.giaytotuythanID,
                gtttType: this.state.giaytotuythanType,
                quocTich: this.state.quocTich,
                gioiTinh: this.state.gioiTinh,
                idAccount: this.state.idAccount.toString()
            } :
            {
                idCustomerInfo: "0",
                tenKH: this.state.tenKH,
                email: this.state.email,
                phone: this.state.phone,
                gtttID: this.state.giaytotuythanID,
                gtttType: this.state.giaytotuythanType,
                quocTich: this.state.quocTich,
                gioiTinh: this.state.gioiTinh,
                idAccount: this.state.idAccount.toString()
            })
            console.log(sendData)
        if (this.state.customerInfo != 0) {
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
                                    <button class="btn btn-primary" onClick={()=>this.updateCustomerInfo()}>Cập nhật</button>
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
                                    <p>Content</p>
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
                                    <p>Content</p>
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
                                    <p>Content</p>
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
                                            <input type="text" class="form-control" id="username" placeholder="Nhập tên đăng nhập ..." />
                                        </div>
                                        <div class="form-group">
                                            <label for="password" className="tal-left">Mật khẩu</label>
                                            <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu ..." />
                                        </div>
                                        <div class="form-group">
                                            <label for="re-password" className="tal-left">Nhập lại mật khẩu</label>
                                            <input type="password" class="form-control" id="re-password" placeholder="Nhập lại mật khẩu ..." />
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
