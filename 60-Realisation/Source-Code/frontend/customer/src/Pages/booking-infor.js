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
            giaytotuythanType: "",
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
    }
    prevStep = (current) => {
        this.state.currentStep = current - 1;
        this.setState(this);
    }
    handleChange = (input) => e => {

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
                            Bước 1
                            <button onClick={() => this.nextStep(this.state.currentStep)}>Next</button>
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
