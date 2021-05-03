import { Component } from 'react';
import Axios from 'axios';
import './apartment-info-card.css';
import imageDefault from '../Images/as.jpg';

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            image: []
        }
    }
    getImage = ()=>{
        Axios.post('http://localhost:33456/api/customer/getImageOfApartment',{idApartment: this.props.model.ID_NHA}).then(
            (response) => {
                this.state.image = response.data;
                this.setState(this);
                console.log(response.data);
            });
        
    }
    render() {
        return (
            <div className="apartment-info-card">
                <img src={imageDefault} className="imageMain"></img>
                <h1>{this.props.model.THUTU_NHA} - {this.props.model.ID_NHA} - {this.props.model.ID_TAIKHOAN}</h1>
                <p>Khu tiếp tân: {this.props.model.KHUTIEPTAN === true ? "co" : "khong"}</p>
            </div>
        );
    }

}

export default InfoCard;