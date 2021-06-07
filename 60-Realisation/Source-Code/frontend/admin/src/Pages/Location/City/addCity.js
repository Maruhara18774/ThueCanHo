import React, { Component } from 'react'
import Axios from "axios"

export default class AddCity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idCountry: 0,
      lstCountry: [],
      cityName: ""
    }
    this.getCountryList();
  }

  getCountryList = (() => {
    Axios.get('http://localhost:33456/api/admin/getListCountry').then(
      (res) => {
        this.state.lstCountry = res.data;
        this.setState(this);
      }
    );
  })
  changeCountry = (e) => {
    this.state.idCountry = e.target.value
    this.setState(this)
    this.getCountryList();
  }
  changeCity = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    const { history } = this.props
    e.preventDefault();
    Axios.post('http://localhost:33456/api/admin/addCity', {
      "cityName": this.state.cityName,
      "idCountry": this.state.idCountry.toString(),
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
            <h2 className="text-center mb-4">Thêm Thành phố</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Tên Thành phố</label>
                <input type="text" className="form-control form-control-lg" name="cityName" onChange={this.changeCity} />
              </div>

              <div className="form-group">
                <label>Quốc gia</label>
                <select className="form-control form-control-lg" value={this.state.idCountry} onChange={this.changeCountry}>
                  {this.state.lstCountry.map((val, index) =>
                    <option key={val.ID_QUOCGIA} value={val.ID_QUOCGIA}>{val.TEN_QUOCGIA}</option>
                  )}
                </select>
              </div>

              <button className="btn btn-warning btn-block text-white">Thêm</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

