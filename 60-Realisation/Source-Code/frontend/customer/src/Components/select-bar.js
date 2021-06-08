import { Component } from 'react';
import Axios from 'axios';
import './select-bar.css'

class SelectBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lsCountry:[],
      idCountry:0,
      lsCity: [],
      idCity: 0,
      lsDistrict: [],
      idDistrict: 0,
      lsStyle:[],
      idStyle: 0,
      minBudget: 0,
      lsShow: [],
      lsFull: []
    };
    this.getListCountry();
    this.getListStyle();
    this.sortApartment();
  }
  getListCountry = () =>{

    Axios.post('http://localhost:33456/api/customer/getListCountry',{}).then(
            (response) => {
                this.state.lsCountry = response.data;
                this.setState(this);
            });
  }
  getListCity = () =>{
    Axios.post('http://localhost:33456/api/customer/getListCity',{countryId: this.state.idCountry}).then(
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
  changeCountry = (event) =>{
    this.state.idCountry= event.target.value;
    this.setState(this);
    this.getListCity();
  }
  changeCity = (event) =>{
    this.state.idCity = event.target.value;
    this.setState(this);
    this.getListDistrict();
  }
  changeDistrict = (event)=>{
    this.state.idDistrict = event.target.value;
    this.setState(this);
    this.sortApartment();
  }
  changeStyle = (event)=>{
    this.state.idStyle = event.target.value;
    this.setState(this);
    this.sortApartment();
  }
  getMinBudget =(event)=>{
    this.state.minBudget = event.target.value;
    this.state.lsShow = [];
    this.state.lsFull.forEach(item=>{
      this.state.lsShow.push(item);
    })
    
    this.state.lsShow.forEach(item => {
        if((parseFloat(item.GIA) - parseFloat(item.KHUYENMAI))<parseFloat(this.state.minBudget)){
          
          this.state.lsShow.pop(item)
        }
      });
      
      this.setState(this);
      this.props.callback(this.state.lsShow);
  }
  sortApartment = () => {
    console.log(this.state.idDistrict + " - " + this.state.idStyle + " - " + this.state.minBudget);
    Axios.post('http://localhost:33456/api/customer/searchApartmentWithDetail', {
      "idDistrict": this.state.idDistrict.toString(),
      "idStyle": this.state.idStyle.toString()
    }).then((response) => {
      this.state.lsFull = response.data;
      this.setState(this);
      this.props.callback(this.state.lsFull);
    });
  }
  render() {
    return (
      <div className="selectBar-zone">
        <table>
          <tr className="spacing"/>
          <tr>
            <td className="title">Quốc gia: </td>
            <td className="content">
              <select value={this.state.idCountry} onChange={this.changeCountry}>
                <option value="0">Chọn quốc gia ...</option>
                {this.state.lsCountry.map((val, key)=><option value={val.ID_QUOCGIA}>{val.TEN_QUOCGIA}</option>)}
              </select>
            </td>
          </tr>
          <tr className="spacing"/>
          <tr>
            <td className="title">Thành phố: </td>
            <td className="content">
              <select value={this.state.idCity} onChange={this.changeCity}>
                <option value="0">Chọn thành phố ...</option>
                {this.state.lsCity.map((val, key)=><option value={val.ID_THANHPHO}>{val.TEN_THANHPHO}</option>)}
              </select>
            </td>
          </tr>
          <tr className="spacing"/>
          <tr>
            <td className="title">Quận: </td>
            <td className="content">
              <select value={this.state.idDistrict} onChange={this.changeDistrict}>
                <option value="0">Chọn quận ...</option>
                {this.state.lsDistrict.map((val, key)=><option value={val.ID_QUAN}>{val.TEN_QUAN}</option>)}
              </select>
            </td>
          </tr>
          <tr className="spacing"/>
          <tr>
            <td className="title">Phong cách: </td>
            <td className="content">
              <select value={this.state.idStyle} onChange={this.changeStyle}>
                <option value="0">Chọn style ...</option>
                {this.state.lsStyle.map((val, key)=><option value={val.ID_STYLE}>{val.TEN_STYLE}</option>)}
              </select>
            </td>
          </tr>
          <tr className="spacing"/>
          <tr>
            <td className="title">Mức giá từ: </td>
            <td className="content">
              <input type="range" class="form-range" min="0" max="20000000" range="200000" onChange={this.getMinBudget}/>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="content"><b className="emphasis">{this.state.minBudget} VND</b> trở lên.</td>
          </tr>
          <tr className="spacing"/>
        </table>
      </div>
    );
  }

}

export default SelectBar;