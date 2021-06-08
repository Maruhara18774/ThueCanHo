import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route, Link, BrowserRouter} from 'react-router-dom';

export class CustomerInfoPage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Lịch thuê căn hộ</li>
                    <li>Điểm thưởng</li>
                    <li>Voucher của bạn</li>
                    <li>Lịch sử thuê căn hộ</li>
                    <li>Đổi mật khẩu
                    </li>
                </ul>
            </div>
        )
    }
}

export default CustomerInfoPage;
