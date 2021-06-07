import Axios from 'axios'
import React, { Component } from 'react'
import{Link} from 'react-router-dom'
import * as FaIcon from "react-icons/fa"
import {MonthData} from '../../StaticData/monthData'
import Navbar from '../../Components/navbar'
import TitlePages from '../../Components/titlePages'

export default class Reports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lstOrder: []
        }
        this.getListOrder()
    }
    componentDidUpdate() {
        this.getListOrder()
    }
    getListOrder = () => {
        Axios.get('http://localhost:33456/api/admin/getListOrder').then(
            (res) => {
                this.state.lstOrder = res.data;
                this.setState(this);
            }
        );
    }
    render() {
        return (
            <>
            <div className="sticky-top">               
                    <Navbar />
                </div>
            <div className="container">
                <div className="py-4">
                <TitlePages title="QUẢN LÝ BÁO CÁO"/>
                    <div className="row">
                        <div className="col">
                            <Link className="btn btn-primary" to={`report/add`}>Add</Link>
                        </div>
                        <div className="col">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <lable className="input-group-text bg-primary text-white">Tháng</lable>
                                </div>
                                <select className="custom-select">
                                    {MonthData.map((item) => (
                                        <option>{item.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Tìm kiếm" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button"><FaIcon.FaSearch /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive-sm">
                    <table className="table border shadow">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Mã Nhà</th>
                                <th scope="col">Chủ căn hộ</th>
                                <th scope="col">Ngày đặt</th>
                                <th scope="col">Check in</th>
                                <th scope="col">Check out</th>
                                <th scope="col">Ngày đến</th>
                                <th scope="col">Ngày đi</th>
                                <th scope="col">Tổng tiền Phòng</th>
                                <th scope="col">Bữa sáng</th>
                                <th scope="col">Tổng tiền Bữa sáng</th>
                                <th scope="col">Số giường phụ</th>
                                <th scope="col">Tổng tiền Giường ngủ</th>
                                <th scope="col">Phí GTGT</th>
                                <th scope="col">Tổng tiền</th>
                                <th scopre="col">Ghi chú</th>
                                <th scopre="col">Mã Trạng thái Đặt căn hộ</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.lstOrder.map((val, index) => (
                                <tr>
                                    <th scope="row">{val.ID_DATCANHO}</th>
                                    <td>{val.ID_NHA}</td>
                                    <td>{val.ID_TT_KHACHHANG}</td>
                                    <td>{val.NGAYDAT}</td>
                                    <td>{val.CHECKIN}</td>
                                    <td>{val.CHECKOUT}</td>
                                    <td>{val.NGAY_DEN}</td>
                                    <td>{val.NGAY_DI}</td>
                                    <td>{val.TONGTIEN_PHONG}</td>
                                    <td>{val.BUASANG}</td>
                                    <td>{val.TONGTIEN_BUASANG}</td>
                                    <td>{val.SO_GIUONGPHU}</td>
                                    <td>{val.TONGTIEN_GIUONGNGU}</td>
                                    <td>{val.PHI_GTGT}</td>
                                    <td>{val.TONGTIEN}</td>
                                    <td>{val.GHICHU}</td>
                                    <td>{val.ID_TT_DCH}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`report/${val.ID_DATCANHO}`}>View</Link>
                                        <Link className="btn btn-outline-primary" to={`report/edit/${val.ID_DATCANHO}`}>Edit</Link>
                                        {/* <Link class="btn btn-danger" onClick={() => deleteReport({val.ID_DATCANHO})}>Delete</Link> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

