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
            address: "",
            price: ""
        }
        this.getName();
        this.getAddress();
        this.getPrice();
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
    getPrice = () => {
        Axios.post('http://localhost:33456/api/customer/getApartmentPrice',{idPrice: this.props.model.ID_BANGGIA.toString()}).then(
            (response) => {
                this.state.price = response.data;
                this.setState(this);
            });
    }
    render() {
        return (
            <div className="apartment-info-card">
                <div class="container">
                    <img src={imageDefault} className="imageMain"></img>
                    <div>
                        <div class="row">
                            <div class="col-md-7 left">

                                <h5 className="title">{this.state.name}</h5>
                                <p className="tag">Căn hộ</p>
                                <p className="location">
                                    <span><i class="fas fa-map-marker-alt"></i></span>
                                    {this.state.address}
                                </p>
                            </div>
                            <div class="col-md-4 right">
                                {this.props.model.KHUTIEPTAN === true ? <p className="bonus"><span className="mrg5"><i class="fas fa-clinic-medical"></i></span> Có bàn tiếp tân</p>:<div className="blank"></div>}
                                <p className="original">{(this.state.price * 110) / 100} VNĐ</p>
                                <p className="reduce">{this.state.price} VNĐ</p></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default InfoCard;