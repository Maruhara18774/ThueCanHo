import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import * as FaIcon from 'react-icons/fa'

import Navbar from '../../Components/navbar'
import TitlePages from '../../Components/titlePages'
import EditAccount from '../Account/editAccount'
// import AddAccount from '../Account/addAccount'
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myList: [],
        };
        this.getList();
    }
    componentDidUpdate() {
        this.getList();
    }
    getList = (() => {
        Axios.get('http://localhost:33456/api/admin/getListAccount').then(
            (res) => {
                this.state.myList = res.data;
                this.setState(this);
            }
        );
    })
    deleteUser = (idTK) => {
        Axios.post('http://localhost:33456/api/admin/deleteAccount', { id: idTK.toString() }).then(
            (res) => {
                console.log(res.data);
                alert("Delete Success!")
                this.getList();
            }
        )
    };
    render() {
        return (
            <div>
                <div className="sticky-top">               
                    <Navbar />
                </div>
                <div className="container">
                    <div className="py-4">
                        <TitlePages title="QUẢN LÝ TÀI KHOẢN"/>
                        <div className="row">
                            <div className="col">
                                {/* <AddAccount /> */}
                                <Link className="btn btn-primary" to={`/account/add`}><FaIcon.FaUserPlus title="Thêm Tài khoản"/></Link>
                            </div>
                            <div className="col">
                                <div className="input-group mb-2">
                                    <input type="text" className="form-control" placeholder="Tìm kiếm" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button"><FaIcon.FaSearch /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table border shadow">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên đăng nhập</th>
                                    <th scope="col">Mật khẩu</th>
                                    <th scope="col">Loại Tài khoản</th>
                                    <th className="border-secondary bg-secondary">Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.myList.map((val, key) => (
                                    <tr>
                                        <th scope="row">{val.ID_TAIKHOAN}</th>
                                        <td>{val.TEN_TAIKHOAN}</td>
                                        <td>{val.MATKHAU}</td>
                                        <td>{val.ROLE_TAIKHOAN}</td>
                                        <td>
                                            <Link className="btn btn-primary mx-1" to={`/account/${val.ID_TAIKHOAN}`}><FaIcon.FaInfo title="Chi tiết"/></Link>
                                            <Link className="btn btn-outline-primary mx-1" to={`/account/edit/${val.ID_TAIKHOAN}`}><FaIcon.FaUserEdit title="Cập nhật"/></Link>
                                            <Link className="btn btn-danger mx-1" onClick={() => this.deleteUser(val.ID_TAIKHOAN)}><FaIcon.FaUserMinus title="Xóa"/></Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account


