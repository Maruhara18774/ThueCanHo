import React, { Component } from 'react'
import Axios from "axios"

export default class AddDistrict extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idCity: 0,
      lstCity: [],
      districtName: ""
    }
    this.getCityList();
  }

  getCityList = (() => {
    Axios.get('http://localhost:33456/api/admin/getListCity').then(
      (res) => {
        this.state.lstCity = res.data;
        this.setState(this);
      }
    );
  })
  changeCity = (e) => {
    this.state.idCity = e.target.value
    this.setState(this)
    this.getCityList();
  }
  changeDistrict = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    const { history } = this.props
    e.preventDefault();
    Axios.post('http://localhost:33456/api/admin/addDistrict', {
      "districtName": this.state.districtName,
      "idCity": this.state.idCity.toString(),
    }).then((res) => {
      console.log(res.data)
      alert("Adding Success!")
    })
    history.push("/location")
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add District</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>District's Name</label>
                <input type="text" className="form-control form-control-lg" name="districtName" onChange={this.changeDistrict} />
              </div>

              <div className="form-group">
                <label>City</label>
                <select className="form-control form-control-lg" value={this.state.idCity} onChange={this.changeCity}>
                  {this.state.lstCity.map((val, index) =>
                    <option key={val.ID_THANHPHO} value={val.ID_THANHPHO}>{val.TEN_THANHPHO}</option>
                  )}
                </select>
              </div>

              <button className="btn btn-warning btn-block text-white">Add District</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

