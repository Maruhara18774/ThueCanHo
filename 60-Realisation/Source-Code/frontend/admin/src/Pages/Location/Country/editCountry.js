import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import Axios from "axios"

export default function EditCountry() {
    const history = useHistory()
    const [country, setCountry] = useState({countryName: ""})
    const {id} = useParams()
    useEffect(() => {
        loadCountry()
    },[])
    const loadCountry = async () => {
        const res = await Axios.get(`http://localhost:33456/api/admin/getIdCountry?id=${id}`)
        setCountry({...country, countryName: res.data.TEN_QUOCGIA})
    }
    const changeCountry = (e) => {
        setCountry({...country, [e.target.name]: e.target.value})
    }
    const onSubmit = () => {
        Axios.post(`http://localhost:33456/api/admin/updateCountry?id=${id}`, {
            "countryName": country.countryName
        }).then((res) => {
            console.log(res.data)
            alert("Editing Success!")          
        })
        history.push("/location")
    }
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Cập nhật Quốc gia</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>ID: {id}</label>
                </div>
                <div className="form-group">
                    <label>Tên Quốc gia</label>
                    <input type="text" className="form-control form-control-lg" name="countryName" onChange={changeCountry} value={country.countryName}/>
                </div>
                <button className="btn btn-warning btn-block text-white">Cập nhật</button>
            </form>
        </div>
    </div>
    )
}
