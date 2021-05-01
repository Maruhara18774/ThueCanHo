import { Component } from 'react';
import Axios from 'axios';

class SelectBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lsCity: [],
      idCity: 0,
      lsDistrict: [],
      idDistrict: 0,
      lsStyle:[],
      idStyle: 0
    };
    this.getListCity();
    this.getListStyle();
  }
  getListCity = () =>{
    Axios.post('http://localhost:33456/api/customer/getListCity',{}).then(
            (response) => {
                this.state.lsCity = response.data;
                this.setState(this);
            });
  }
  getListDistrict = () => {
    Axios.post('http://localhost:33456/api/customer/getListDistrict',{cityId: this.state.idCity}).then(
            (response) => {
                this.state.lsDistrict = response.data;
                this.setState(this);
            });
  }
  getListStyle = () =>{
    Axios.post('http://localhost:33456/api/customer/getListStyle',{}).then(
            (response) => {
                this.state.lsStyle = response.data;
                this.setState(this);
            });
  }
  changeCity = (event) =>{
    this.state.idCity = event.target.value;
    this.setState(this);
    this.getListDistrict();
    console.log(this.state.lsDistrict)
  }
  changeDistrict = (event)=>{
    this.state.idDistrict = event.target.value;
    this.setState(this);
  }
  changeStyle = (event)=>{
    this.state.idStyle = event.target.value;
    this.setState(this);
  }
  render() {
    return (
      <div className="selectBar-zone">
        <table>
          <tr>
            <td>Thành phố: </td>
            <td>
              <select value={this.state.idCity} onChange={this.changeCity}>
                <option value="0">Chọn thành phố ...</option>
                {this.state.lsCity.map((val, key)=><option value={val.ID_THANHPHO}>{val.TEN_THANHPHO}</option>)}
              </select>
            </td>
          </tr>
          <tr>
            <td>Quận: </td>
            <td>
              <select value={this.state.idDistrict} onChange={this.changeDistrict}>
                <option value="0">Chọn quận ...</option>
                {this.state.lsDistrict.map((val, key)=><option value={val.ID_QUAN}>{val.TEN_QUAN}</option>)}
              </select>
            </td>
          </tr>
          <tr>
            <td>Phong cách: </td>
            <td>
              <select value={this.state.idStyle} onChange={this.changeStyle}>
                <option value="0">Chọn style ...</option>
                {this.state.lsStyle.map((val, key)=><option value={val.ID_STYLE}>{val.TEN_STYLE}</option>)}
              </select>
            </td>
          </tr>
        </table>
      </div>
    );
  }

}

export default SelectBar;