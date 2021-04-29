import React,{useState, useEffect}from "react"
import { ReportData } from '../../Components/reportData'
import { Link } from 'react-router-dom'
import axios from "axios"

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
            <div className="container">
                <div className="py-4">
                    <h1>Report Management</h1>
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
                                        <Link className="btn btn-primary mr-2" to={`report/${item.id}`}>View</Link>
                                        <Link className="btn btn-primary mr-2" to={`report/add`}>Add</Link>
                                        <Link className="btn btn-outline-primary mr-2" to={`report/edit/${item.id}`}>Edit</Link>
                                        <Link class="btn btn-danger" onClick={() => deleteReport(item.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Report;
