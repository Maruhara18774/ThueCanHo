import React, { Component } from 'react';
import './form-search.css';

export default class SearchingForm extends Component {
    constructor(props){
        super(props);
        var date = new Date();
        this.state={
            numPeople: 0,
            numRoom: 0,
        }
    }
    increaseValuePeople = (event) => {
        event.preventDefault();
        this.state.numPeople++;
        this.setState(this);
    }

    decreaseValuePeople = (event) => {
        this.state.numPeople--;
        this.setState(this);
    }
    increaseValueRoom = (event) => {
        this.state.numRoom++;
        this.setState(this);
    }

    decreaseValueRoom = (event) => {
        
        this.state.numRoom--;
        this.setState(this);
    }
    render() {
        return (
            <div className="position-searchFrom-warp">
                <div className="searchFrom-warp">
                    <table>
                        <tr>
                            <td colSpan="3">
                                <a className="link"> <i class="fas fa-undo-alt"></i> Các nơi lưu trú vừa xem</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="3">Thành phố, địa điểm đến hoặc tên nơi lưu trú</th>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-map-marked-alt"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Thành phố, căn hộ, biệt thự hoặc nơi đến ..." aria-describedby="basic-addon1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Nhận phòng</th>
                            <th>Số đêm</th>
                            <th>Trả phòng</th>
                        </tr>
                        <tr>
                            <td>
                                <input type="date" class="form-control" aria-describedby="basic-addon1" />
                            </td>
                            <td>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="far fa-moon"></i></span>
                                    </div>
                                    <input type="number" class="form-control" placeholder="Nhập số đêm" aria-describedby="basic-addon1" />
                                </div>
                            </td>
                            <td>
                                <p>Ngày trả phòng</p>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">Khách và Phòng</th>
                        </tr>
                        <tr>
                            <td rowSpan="2" colSpan="2">
                                <div className="SelectNumberPeople">
                                    <table>
                                        <tr>
                                            <td><i class="fas fa-user-plus"></i> Số người</td>
                                            <td>
                                                <form>
                                                    <div class="value-button" id="decrease" onclick={this.decreaseValuePeople}><i class="fas fa-minus"></i></div>
                                                    <input type="number" id="number" value={this.state.numPeople} readOnly />
                                                    <div class="value-button" id="increase" onclick={() => alert("Hi")}><i class="fas fa-plus"></i></div>

                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i class="fas fa-th-large"></i> Số phòng</td>
                                            <td>
                                                <form>
                                                    <div class="value-button" id="decrease" onclick={this.decreaseValueRoom}><i class="fas fa-minus"></i></div>
                                                    <input type="number" id="number" value={this.state.numRoom} readOnly />
                                                    <div class="value-button" id="increase" onclick={this.increaseValueRoom}><i class="fas fa-plus"></i></div>
                                                </form>
                                            </td>
                                        </tr>
                                    </table>

                                </div>
                    </td>
                    <td rowSpan="2">
                        <button type="button" class="btn btn-warning" onClick={()=> alert("Hi")}><span><i class="fas fa-search"></i></span> Tìm nơi lưu trú</button>
                    </td>
                </tr>
                </table>
            </div>
            </div>
        )
    }
}
