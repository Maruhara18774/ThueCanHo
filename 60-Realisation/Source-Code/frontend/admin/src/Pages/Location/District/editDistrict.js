import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Axios from "axios"

export default function EditDistrict() {
    const history = useHistory()
    const [district, setDistrict] = useState({districtName: ""})
    const [city, setCity] = useState({selectedIdCity: 0, lstCity: []})
    const {id} = useParams()
    useEffect(()=>{
        loadDistrict()
    },[])
    const loadDistrict = async() => {
        const resDistrict = await Axios.get(`http://localhost:33456/api/admin/getIdDistrict?id=${id}`)
        const resCity = await Axios.get(`http://localhost:33456/api/admin/getListCity`)
        setDistrict({...district, districtName: resDistrict.data.TEN_QUAN})
        setCity({...city, selectedIdCity: resDistrict.data.ID_THANHPHO, lstCity: resCity.data})         
    }
    const changeDistrict = (e) => {
        setDistrict({...district, [e.target.name]: e.target.value})
    }
    const changeCity = (e) =>{
        setCity ({...city, selectedIdCity: e.target.value})
    }
    const onSubmit = () => {    
        Axios.post(`http://localhost:33456/api/admin/updateDistrict?id=${id}`, {
            "districtName": district.districtName,
            "idCity": city.selectedIdCity.toString()
        }).then((res) => {
            console.log(res.data)
            alert("Editing Success!")          
        })
        history.push("/location")
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Cập nhật Quận</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>ID: {id}</label>
                    </div>
                    <div className="form-group">
                        <label>Tên Quận: {district.districtName}</label>
                        <input type="text" className="form-control form-control-lg" name="districtName" onChange={changeDistrict} value={district.districtName}/>
                    </div>
                    <div className="form-group">
                        <label>Thành phố: {city.selectedCity}</label>
                        <select className="form-control form-control-lg" value={city.selectedCity} onChange={changeCity}>
                            {city.lstCity.map((val, index) =>
                                <option key={val.ID_THANHPHO} value={val.ID_THANHPHO}>{val.TEN_THANHPHO}</option>
                            )}
                        </select>
                    </div>
                    <button className="btn btn-warning btn-block text-white">Cập nhật</button>
                </form>
            </div>
        </div>
    )
}
