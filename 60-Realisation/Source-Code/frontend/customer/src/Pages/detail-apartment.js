import React, { Component } from 'react';
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
import { Link } from 'react-router-dom';
import FooterCustom from '../Components/footer';

export default class DetailApartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idApartment: document.location.pathname.substring(16),
            apartmentInfo: {},
            lsImage: [imageDefault, image1, image2, image3, image4, image5, image6, image7, image8],
            imgActive: 0,
            address: "",
            numStar: 5,
            lsRoom: []
        }
        this.getApartmentInfo();
    }
    getApartmentInfo = () => {
        Axios.post('http://localhost:33456/api/customer/getDetailApartment', { id: this.state.idApartment }).then(
            (response) => {
                this.state.apartmentInfo = response.data[0];
                this.setState(this, () => {
                    this.getAddress(this.state.apartmentInfo.ID_NHA.toString());
                    this.getListRoom(this.state.apartmentInfo.ID_NHA.toString());
                });
            });
    }
    getAddress = (idNha) => {
        Axios.post('http://localhost:33456/api/customer/getAddressApartment', { id: idNha }).then(
            (response) => {
                this.state.address = response.data;
                this.setState(this);
            });
    }
    getListRoom = (idNha) => {
        Axios.post('http://localhost:33456/api/customer/getListRoom', { idApartment: idNha }).then(
            (response) => {
                this.state.lsRoom = response.data;
                console.log(response.data)
                this.setState(this);
            });
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentDidUpdate() {
        setTimeout(() => this.changeImgActive(this.state.imgActive), 6000);
    }
    changeImgActive = (current) => {
        if (current + 1 == this.state.lsImage.length) {
            this.state.imgActive = 0;
            this.setState(this);
        }
        else {
            this.state.imgActive = current + 1;
            this.setState(this);
        }
    }
    getImageNum = (number) => {
        const numNow = number % this.state.lsImage.length;
        if (numNow + 1 >= this.state.lsImage.length) {
            return 0;
        }
        return numNow + 1;
    }
    renderRateStar = () => {
        switch (this.state.numStar) {
            case 5:
                return (
                    <div>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                    </div>
                )
            case 4:
                return (
                    <div>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                    </div>
                )
            case 3:
                return (
                    <div>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                    </div>
                )
            case 2:
                return (
                    <div>

                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                    </div>
                )
            default:
                return (
                    <div>

                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <path style={{ fill: "#FFDC64" }} d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97  L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348  L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922  C516.225,203.78,511.532,189.337,499.92,188.26z" />
                            <path style={{ fill: "#FFC850" }} d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26  c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979  c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z" />
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                    </div>
                )
        }
    }

    render() {
        return (
            <div className="detail-apartment-position">
                <div className="detail-apartment-wrap">
                    <div className="header">
                        <table>
                            <tr>
                                <td className="header-left">
                                    <p className="nameApartment">{this.state.apartmentInfo.TEN_NHA}</p>
                                    <p className="sticker">Biệt thự</p>
                                    <p className="location">
                                        <span><i class="fas fa-map-marker-alt mrg5"></i></span>
                                        {this.state.address}
                                    </p>
                                </td>
                                <td className="header-right">
                                    <i class="far fa-bookmark saveApartment"></i>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <hr />
                    <div className="images">
                        <table>
                            <tr>
                                <td className="header-left" rowSpan="4">
                                    <img src={this.state.lsImage[this.state.imgActive]} width="750px" height="500px" className="imageWrapMain" />

                                </td>
                                <td className="header-right">
                                    <img src={this.state.lsImage[this.getImageNum(this.state.imgActive + 1)]} width="200px" height="120px"
                                        className="imageWrapChild" />

                                    <img src={this.state.lsImage[this.getImageNum(this.state.imgActive + 2)]} width="200px" height="120px"
                                        className="imageWrapChild" />

                                    <img src={this.state.lsImage[this.getImageNum(this.state.imgActive + 3)]} width="200px" height="120px"
                                        className="imageWrapChild" />

                                    <img src={this.state.lsImage[this.getImageNum(this.state.imgActive + 4)]} width="200px" height="120px"
                                        className="imageWrapChild" />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="booking">
                        <table>
                            <tr>
                                <td className="header-left">
                                    <p>Đánh giá</p>
                                    <p> {this.renderRateStar()}
                                    </p>
                                </td>
                                <td className="header-right">
                                    <p>Giá mỗi đêm từ</p>
                                    <p className="priceRental">{this.state.apartmentInfo.GIA - this.state.apartmentInfo.KHUYENMAI} VND</p>
                                    <Link to={"/booking/" + this.state.idApartment} className="bookNowBtn">Đặt ngay</Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                {this.state.lsRoom.map((val, key) => {
                    return (
                        <div className="detail-apartment-wrap">
                            <div className="roomzone-wrap">
                                <table>
                                    <tr>
                                        <th colSpan="2"><h3>{val.TEN_PHONG}</h3></th>
                                    </tr>
                                    <tr>
                                        <td>{val.MOTA}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={this.state.lsImage[0]} height="150px" />
                                        </td>
                                        <td className="contain">
                                            <ul>
                                                <li>Diện tích: <span><i class="fas fa-ruler-combined"></i></span> {val.CHIEUDAI_PHONG*val.CHIEURONG_PHONG} m2 ({val.CHIEUDAI_PHONG} x {val.CHIEURONG_PHONG})</li>
                                                <li>Loại phòng: {val.ID_LOAIPHONG_LOAIPHONG.TEN_LOAIPHONG} ({val.SONGUOITOIDA} người)</li>
                                                <li>Loại giường: {val.ID_LOAIGIUONG_LOAIGIUONG.TEN_LOAIGIUONG}</li>
                                                <li>Số giường phụ: {val.SOGIUONG_PHU}</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>

                            </div>
                        </div>
                    )
                })}
                <div className="else-wrap">
                    <table>
                        <tr>
                           <th className="title">Mô tả chung</th>
                           <td>
                                <ul>
                                    <li><b>Vị trí</b></li>
                                    <li>Địa chỉ: {this.state.address}</li>
                                    <li>Diện tích: {this.state.apartmentInfo.DIENTICH} m2</li>
                                    <li>Khoảng cách đến trung tâm thành phố: {this.state.apartmentInfo.KHOANGCACH_TRUNGTAMTP}</li>
                                </ul>   
                                <ul>
                                    <li><b>Giờ nhận phòng và trả phòng</b></li>
                                    <li>Giờ nhận phòng: {this.state.apartmentInfo.CHECKIN}</li>
                                    <li>Giờ trả phòng: {this.state.apartmentInfo.CHECKOUT}</li>
                                </ul>  
                            </td> 
                        </tr>
                    </table>
                </div>
                <FooterCustom/>
            </div>
        )
    }
}
