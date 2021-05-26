import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddReport = () => {
    let history = useHistory();
    const [apartment, setData] = useState({
        apartmentName: "",
        apartmentOwner: "",
        address: "",
        location: "",
        checkIn: "",
        checkOut: ""
    });

    const { apartmentName, apartmentOwner, address, location, checkIn, checkOut } = apartment;
    const onInputChange = e => {
        setData({ ...apartment, [e.target.apartmentName]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3030/report", apartment);
        history.push("/");
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A Report</h2>
                <form onSubmit={e => onSubmit(e)}>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Apartment's Name" name="apartmentName" value={apartmentName} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Apartment's Owner" name="apartmentOwner" value={apartmentOwner} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Apartment's Address" name="address" value={address} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Apartment's Location" name="location" value={location} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Check In" name="checkIn" value={checkIn} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Check Out" name="checkOut" value={checkOut} onChange={e => onInputChange(e)} />
                    </div>
                    
                    <button className="btn btn-primary btn-block">Add Report</button>
                </form>
            </div>
        </div>
    );
};

export default AddReport;
