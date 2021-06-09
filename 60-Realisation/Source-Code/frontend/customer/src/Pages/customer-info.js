import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import './customer-info.css';

export class CustomerInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idAccount: document.location.pathname.substring(15),
            chooseNum:0,
            lsRental_Past: [],
            lsRental_Future: [],
            username: "",
            password: "",
            input_username: "",
            input_password: "",
            input_rePassword: "",
            customerInfo: {},
            // THONGTINKH
            idTTKH: 0,
            tenKH: "",
            email: "",
            phone: "",
            giaytotuythanID: "",
            giaytotuythanType: "Căn cước công dân",
            quocTich: "",
            gioiTinh: "Nam",
        }
    }
    changeChoose = (num) => {
        this.state.chooseNum = num;
        this.setState(this);
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
                                    <form style={{ marginLeft:"180px"}}>
                                        {this.state.tenKH != "" ?
                                            <div class="form-row">
                                                <label for="CICustomerName">Họ và tên:</label>
                                                <input type="text" class="form-control is-valid" id="CICustomerName" onChange={this.setTenKH} placeholder="Nhập họ và tên ..." required />
                                            </div>
                                            : <div class="form-row">
                                                <label for="CICustomerName">Họ và tên:</label>
                                                <input type="text" class="form-control" id="CICustomerName" onChange={this.setTenKH} placeholder="Nhập họ và tên ..." required />
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
                                            <select value={this.state.giaytotuythanType} onChange={this.setGiaytotuythanType} className="custom-select" id="FMCustomerHumanType" placeholder="Chọn loại ...">
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
                                    <button class="btn btn-primary">Cập nhật</button>
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
