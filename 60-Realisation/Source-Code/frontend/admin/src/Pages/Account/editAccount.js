import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Axios from "axios"

const EditAccount = () => {
    const history = useHistory()
    const [account, setAccount] = useState({ username: "", password: ""})
    const [role, setRole] = useState({selectedRole: "", lstRole: [{ id: 1, title: "Admin" }, { id: 2, title: "Customer" }, { id: 3, title: "Partner" }]})
    const { id } = useParams();
    useEffect(() => {
        loadAccount()
    }, [])
    const loadAccount = async () => {
        const res = await Axios.get(`http://localhost:33456/api/admin/getIdAccount?id=${id}`)  
        setAccount({...account, username: res.data.TEN_TAIKHOAN, password: res.data.MATKHAU})   
        setRole({...role, selectedRole: res.data.ROLE_TAIKHOAN})      
    }
    const handleChange = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value })
    }
    const changeRole = (e) => {      
        setRole({...role, selectedRole: e.target.value })
    }
    const onSubmit = () => {    
        Axios.post(`http://localhost:33456/api/admin/updateAccount?id=${id}`, {
            "username": account.username,
            "password": account.password,
            "role": role.selectedRole
        }).then((res) => {
            console.log(res.data)
            alert("Editing Success!")          
        })
        history.push("/account")
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Cập nhật Tài khoản</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>ID: {id}</label>
                    </div>
                    <div className="form-group">
                        <label>Tên Đăng nhập</label>
                        <input type="text" className="form-control form-control-lg" name="username" onChange={handleChange} value={account.username}/>
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input type="text" className="form-control form-control-lg" name="password" onChange={handleChange} value={account.password}/>
                    </div>
                    <div className="form-group">
                        <label>Loại Tài khoản</label>
                        <select className="form-control form-control-lg" value={role.selectedRole} onChange={changeRole}>
                            {role.lstRole.map((val, index) =>
                                <option key={val.id} value={val.title}>{val.title}</option>
                            )}
                        </select>
                    </div>
                    <button className="btn btn-warning btn-block text-white">Cập nhật</button>
                </form>
            </div>
        </div>
    )
}

export default EditAccount





