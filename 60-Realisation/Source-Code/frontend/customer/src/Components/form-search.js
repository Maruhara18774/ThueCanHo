import React, { Component } from 'react';
import './form-search.css';
export default class SearchingForm extends Component {
    render() {
        return (
            <div className="searchFrom-warp">
                <table>
                <tr>
                    <td>
                        <a>Các nơi lưu trú vừa xem</a>
                    </td>
                </tr>
                <tr>
                    <th>Thành phố, địa điểm đến hoặc tên nơi lưu trú</th>
                </tr>
                <tr>
                    <td>
                        <input></input>
                    </td>
                </tr>
                </table>
            </div>
        )
    }
}
