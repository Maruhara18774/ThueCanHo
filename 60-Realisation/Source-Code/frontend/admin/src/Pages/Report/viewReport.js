import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ApartmentView = () => {
    const [apartment, setData] = useState({
        id: "",
        khachHang: "",
        soNguoi: "",
        soGiuongNgu: "",
        TongTien: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadData();
    }, []);
    const loadData = async () => {
        const res = await axios.get(`http://localhost:3030/report/${id}`);
        setData(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/report">Back to Home</Link>
            <h1 className="display-4">Apartment Id: {apartment.id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Khách hàng: {apartment.khachHang}</li>
                <li className="list-group-item">Số người: {apartment.soNguoi}</li>
                <li className="list-group-item">Số giường ngủ: {apartment.soGiuongNgu}</li>
                <li className="list-group-item">Tổng tiền: {apartment.TongTien}</li>
            </ul>
        </div>
    );
};

export default ApartmentView;
