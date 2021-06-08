import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import './customer-info.css';

export class CustomerInfoPage extends Component {
    constructor(props){
        super(props);
        this.state={
            chooseNum : 1,
        }
    }
    changeChoose = (num)=>{
        this.state.chooseNum = num;
        this.setState(this);
    }
    render() {
        switch(this.state.chooseNum){
            case 1:{
                return (
                    <div className="customer-info-wrap">
                        <table className="position-wrap">
                            <tr>
                                <td className="menu">
                                    <ul>
                                        <li className="active">Lịch thuê căn hộ</li>
                                        <li onClick={()=>this.changeChoose(2)}>Điểm thưởng</li>
                                        <li onClick={()=>this.changeChoose(3)}>Voucher của bạn</li>
                                        <li onClick={()=>this.changeChoose(4)}>Lịch sử thuê căn hộ</li>
                                        <li onClick={()=>this.changeChoose(5)}>Đổi mật khẩu</li>
                                    </ul>
                                </td>
                                <td className="content">
                                <p>Content</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                )}
        }
        
    }
}

export default CustomerInfoPage;
