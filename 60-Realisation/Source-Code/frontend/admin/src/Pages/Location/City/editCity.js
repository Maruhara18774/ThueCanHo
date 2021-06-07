import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Axios from "axios"

export default function EditCity() {
    const history = useHistory()   
    const [city, setCity] = useState({cityName: ""}) //Khởi tạo useState của city
    const [country, setCountry] = useState({selectedIdCountry: 0, lstCountry: []}) //Khởi tạo useState của country (selectedIdCountry là dùng để lấy value trong <select>)
    const {id} = useParams() //useParams để lấy id
    useEffect(()=>{
        loadCity()
    },[])
    const loadCity = async() => {
        const resCity = await Axios.get(`http://localhost:33456/api/admin/getIdCity?id=${id}`) // Gọi Api getIdCity + id để lấy Danh sách Thành phố
        const resCountry = await Axios.get(`http://localhost:33456/api/admin/getListCountry`) //  Gọi Api getListCountry để lấy Danh sách Quốc gia cho <select>
        setCity({...city, cityName: resCity.data.TEN_THANHPHO}) // Đổ dữ liệu vào cityName (theo id) để hiển thị trong <input value={city.cityName}>
        setCountry({...country, selectedIdCountry: resCity.data.ID_QUOCGIA, lstCountry: resCountry.data}) // Đổ dữ liệu vào [selectedIdCountry để hiển thị trong <select value = {country.selectedIdCountry} ,lstCountry để hiển thị Danh sách Quốc gia để chọn 1 Quốc gia] trong <select>  
    }
    const changeCity = (e) => {
        setCity({...city, [e.target.name]: e.target.value})
    }
    const changeCountry = (e) =>{
        setCountry ({...country, selectedIdCountry: e.target.value})
    }
    const onSubmit = () => {    
        Axios.post(`http://localhost:33456/api/admin/updateCity?id=${id}`, {
            "cityName": city.cityName,
            "idCountry": country.selectedIdCountry.toString(),
        }).then((res) => {
            console.log(res.data)
            alert("Editing Success!")          
        })
        history.push("/location")
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Cập nhật Thành phố</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>ID: {id}</label>
                    </div>
                    <div className="form-group">
                        <label>Tên Thành phố</label>
                        <input type="text" className="form-control form-control-lg" name="cityName" onChange={changeCity} value={city.cityName}/> 
                    </div>
                    <div className="form-group">
                        <label>Quốc gia</label>
                        <select className="form-control form-control-lg" value={country.selectedIdCountry} onChange={changeCountry}>
                            {country.lstCountry.map((val, index) =>
                                <option key={val.ID_QUOCGIA} value={val.ID_QUOCGIA}>{val.TEN_QUOCGIA}</option>
                            )}
                        </select>
                    </div>
                    <button className="btn btn-warning btn-block text-white">Cập nhật</button>
                </form>
            </div>
        </div>
    )
}
