import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

const ViewAccount = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await Axios.get(`http://localhost:33456/api/admin/getAccountInfo?id=${id}`);
        setUser(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/account">Back to Account</Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Username: {user.TEN_TAIKHOAN}</li>
                <li className="list-group-item">Password: {user.MATKHAU}</li>
                <li className="list-group-item">Role: {user.ROLE_TAIKHOAN}</li>
            </ul>
        </div>
    );
};

export default ViewAccount;
