import { Component } from 'react';
import Axios from 'axios';
import './apartment-info-card.css';
import imageDefault from '../Images/as.jpg';
import DetailApartment from '../Pages/detail-apartment';
import {BrowserRouter as Router,Switch,Route, Link, BrowserRouter} from 'react-router-dom';

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            image: [],
            address: "",
            price: [],
            type: ""
        }
        this.getAddress();
    }
    getImage = ()=>{
        Axios.post('http://localhost:33456/api/customer/getImageOfApartment',{idApartment: this.props.model.ID_NHA.toString()}).then(
            (response) => {
                this.state.image = response.data;
                this.setState(this);
            });
        
    }
    getAddress = () =>{
        Axios.post('http://localhost:33456/api/customer/getAddressApartment',{id: this.props.model.ID_NHA.toString()}).then(
            (response) => {
                this.state.address = response.data;
                this.setState(this);
            });
            this.getPrice();
            this.getType();
    }
    getPrice = () => {
        Axios.post('http://localhost:33456/api/customer/getApartmentPrice',{idPrice: this.props.model.ID_BANGGIA.toString()}).then(
            (response) => {
                this.state.price = response.data;
                this.setState(this);
            });
            
    }
    getType = () =>{
        Axios.post('http://localhost:33456/api/customer/getTypeApartment',{idType: this.props.model.ID_LOAINHA.toString()}).then(
            (response) => {
                this.state.type = response.data;
                this.setState(this);
            });
    }
    getComponent = ()=>{
        return <DetailApartment/>
    }
    render() {
        return (
            <div>
                
                <Link to={"/listApartments/" + this.props.model.ID_NHA.toString()} className="apartment-info-card-warp">
                <div className="apartment-info-card">
                    <div class="container">
                        <img src={imageDefault} className="imageMain"></img>
                        <div>
                            <div class="row">
                                <div class="col-md-7 left">

                                    <h5 className="title">{this.props.model.TEN_NHA}</h5>
                                    <p className="tag">{this.state.type}</p>
                                    <p className="location">
                                        <span><i class="fas fa-map-marker-alt mrg5"></i></span>
                                        {this.state.address}
                                    </p>
                                </div>
                                <div class="col-md-4 right">
                                    {this.props.model.FREE_CANCEL === true ? <p className="bonus"><span className="mrg5"><i class="fas fa-clinic-medical"></i></span> Miễn phí hủy đặt</p> : <div className="blank"></div>}
                                    {this.state.price.KHUYENMAI == "0" ? <div>
                                         <p className="original"> </p>
                                        <p className="reduce">{this.state.price.MUCGIA_MOT} VNĐ</p>
                                    </div> : <div>
                                        <p className="original">{this.state.price.MUCGIA_MOT} VNĐ</p>
                                        <p className="reduce">{this.state.price.MUCGIA_MOT - this.state.price.KHUYENMAI} VNĐ</p>
                                    </div>}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </Link>
                
            </div>
        );
    }

}


export default InfoCard;