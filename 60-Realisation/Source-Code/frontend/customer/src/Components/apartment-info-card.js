import { Component } from 'react';
import Axios from 'axios';
import './apartment-info-card.css';
import imageDefault from '../Images/as.jpg';

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            image: [],
            name:"",
            address: ""
        }
        this.getName();
        this.getAddress();
    }
    getImage = ()=>{
        Axios.post('http://localhost:33456/api/customer/getImageOfApartment',{idApartment: this.props.model.ID_NHA}).then(
            (response) => {
                this.state.image = response.data;
                this.setState(this);
            });
        
    }
    getName = () =>{
        Axios.post('http://localhost:33456/api/customer/getNameApartment',{id: this.props.model.ID_NHA}).then(
            (response) => {
                this.state.name = response.data;
                this.setState(this);
            });
    }
    getAddress = () =>{
        Axios.post('http://localhost:33456/api/customer/getAddressApartment',{id: this.props.model.ID_NHA}).then(
            (response) => {
                this.state.address = response.data;
                this.setState(this);
            });
    }
    render() {
        return (
            <div className="apartment-info-card">
                <img src={imageDefault} className="imageMain"></img>
                <h5>{this.state.name}</h5>
                <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <p>{this.state.address}</p>
                </div>
                <p>Khu tiếp tân: {this.props.model.KHUTIEPTAN === true ? "co" : "khong"}</p>
            </div>
        );
    }

}

export default InfoCard;