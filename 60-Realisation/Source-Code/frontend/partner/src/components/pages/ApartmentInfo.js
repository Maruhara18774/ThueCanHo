/* eslint-disable react/no-direct-mutation-state */
import axios from 'axios';
import React from 'react'

class ApartmentInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idApartment: 0,
      apartmentInfo: {},
    }
    this.getApartmentInfo();
  }
  getApartmentInfo = ()=>{
    axios.post('http://localhost:33456/api/customer/getDetailApartment',{id: this.state.idApartment}).then(
        (response) => {
            this.state.apartmentInfo = response.data[0];
            console.log(response.data);
            this.setState(this,()=>{
                this.getType(this.state.apartmentInfo.ID_LOAINHA.toString());
                this.getAddress(this.state.apartmentInfo.ID_NHA.toString());
                this.getPrice(this.state.apartmentInfo.ID_BANGGIA.toString());
            });
        });
}
  getType = (idLoaiNha) =>{
    console.log(this.state.apartmentInfo.ID_LOAINHA);
    axios.post('http://localhost:33456/api/customer/getTypeApartment',{idType: idLoaiNha}).then(
        (response) => {
            this.state.typeApartment = response.data;
            this.setState(this);
        });
}
getAddress = (idNha) =>{
  axios.post('http://localhost:33456/api/customer/getAddressApartment',{id: idNha}).then(
        (response) => {
            this.state.address = response.data;
            this.setState(this);
        });
}
getPrice = (idPrice) => {
    axios.post('http://localhost:33456/api/customer/getApartmentPrice',{idPrice: idPrice}).then(
        (response) => {
            this.state.price = response.data;
            this.setState(this);
        });
        
}
  render(){
    return (
      <div>
        
      </div>
    )
  }
}

export default ApartmentInfo
