import React,{useState, useEffect}from "react"
import { ReportData } from '../../StaticData/reportData'
import {MonthData} from '../../StaticData/monthData'
import { Link } from 'react-router-dom'
import axios from "axios"
import * as FaIcon from 'react-icons/fa'

const Report = () => {
    const [apartment, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const result = await axios.get("http://localhost:3030/report");
        setData(result.data.reverse());
    };

    const deleteReport = async id => {
        await axios.delete(`http://localhost:3030/report/${apartment.id}`);
        loadData();
    };
    return (
        <div className="container">
           
                <div className="py-4">
                    <h1>Report Management</h1>
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
                                <th scope="col">Tên căn hộ</th>
                                <th scope="col">Chủ căn hộ</th>
                                <th scope="col">Địa chỉ</th>
                                <th scope="col">Vị trí</th>
                                <th scope="col">Ngày nhận phòng</th>
                                <th scope="col">Ngày trả phòng</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ReportData.map((item) => (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.apartmentName}</td>
                                    <td>{item.apartmentOwner}</td>
                                    <td>{item.address}</td>
                                    <td>{item.location}</td>
                                    <td>{item.checkIn}</td>
                                    <td>{item.checkOut}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`report/${item.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary" to={`report/edit/${item.id}`}>Edit</Link>
                                        <Link class="btn btn-danger" onClick={() => deleteReport(item.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>   
        </div>
    );
};

export default Report;
