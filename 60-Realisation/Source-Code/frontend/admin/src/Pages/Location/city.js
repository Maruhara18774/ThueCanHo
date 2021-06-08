import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import * as FaIcon from 'react-icons/fa'

import AddCity from './City/addCity'
export default class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myCityList: []
        }; 
        this.getCityList()
    }
    componentDidUpdate () {
        this.getCityList()
    }
    getCityList = (() => {
        Axios.get('http://localhost:33456/api/admin/getListCity').then(
            (res) => {
                this.state.myCityList = res.data;
                this.setState(this);
            }
        );
    })
    render() {
        return (
            <div className="container">
                <div className="py-4">
                    <div className="row">
                    <div className="col">
                        <Link className="btn btn-primary mr-2" to={`/location/city/add`}>Thêm</Link>
                        {/* <AddCity/> */}
                        </div>
                        <div className="col">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Tìm kiếm"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button"><FaIcon.FaSearch/></button>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <table className="table border shadow">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên Thành phố</th>
                                <th scope="col">Mã Quốc gia</th>
                                <th className="border-secondary bg-secondary">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.myCityList.map((val, key) => (
                                <tr>
                                    <th scope="row">{val.ID_THANHPHO}</th>
                                    <td>{val.TEN_THANHPHO}</td>
                                    <td>{val.ID_QUOCGIA}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary mx-1" to={`/location/city/edit/${val.ID_THANHPHO}`}><FaIcon.FaEdit title="Cập nhật"/></Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/*Phân trang*/}
            </div>
        )
    }
}

