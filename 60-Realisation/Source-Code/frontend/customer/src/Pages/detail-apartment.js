import React, { Component} from 'react';
import imageDefault from '../Images/as.jpg';
import image1 from '../Images/house1.jpg';
import image2 from '../Images/house2.jpg';
import image3 from '../Images/pool1.jpg';
import image4 from '../Images/pool2.jpg';
import image5 from '../Images/pool3.jpg';
import image6 from '../Images/room1.jpg';
import image7 from '../Images/room2.jpg';
import image8 from '../Images/yard1.jpg';
import Axios from 'axios';
import './detail-apartment.css';


export default class DetailApartment extends Component {
    constructor(props){
        super(props); 
        this.state ={
            idApartment: document.location.pathname.substring(16),
            apartmentInfo: {},
            lsImage: [imageDefault,image1,image2,image3,image4,image5,image6,image7,image8],
            typeApartment: "",
        }
        this.getApartmentInfo();
    }
    getApartmentInfo = ()=>{
        Axios.post('http://localhost:33456/api/customer/getDetailApartment',{id: this.state.idApartment}).then(
            (response) => {
                this.state.apartmentInfo = response.data[0];
                console.log(response.data);
                this.setState(this,()=>{
                    this.getType(this.state.apartmentInfo.ID_LOAINHA.toString());
                });
            });
    }
    getType = (idLoaiNha) =>{
        console.log(this.state.apartmentInfo.ID_LOAINHA);
        Axios.post('http://localhost:33456/api/customer/getTypeApartment',{idType: idLoaiNha}).then(
            (response) => {
                this.state.typeApartment = response.data;
                this.setState(this);
            });
    }
    render() {
        this.getType();
        return (
            <div className="detail-apartment-position">
                <div className="detail-apartment-wrap">
                    <div className="header">
                        <table>
                            <tr>
                                <td className="header-left">
                                    <p className="nameApartment">{this.state.apartmentInfo.TEN_NHA}</p>
                                </td>
                                <td  className="header-right">
                                    <i class="far fa-bookmark saveApartment"></i>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p className = "sticker">{this.state.typeApartment}</p>
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        )
    }
}
