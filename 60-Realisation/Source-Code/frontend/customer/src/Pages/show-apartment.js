import { Component } from 'react';
import Axios from 'axios';
import SearchBox from '../Components/search-apartment';
import SelectBar from '../Components/select-bar';

class ListApartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myList: []
        };
        this.getList()
    }
    getList = (() => {
        Axios.get('http://localhost:33456/api/customer/getListApartment').then(
            (response) => {
                this.state.myList = response.data;
                this.setState(this);
            });
    })
    render() {
        return (

            <div>
                <table>
                    <tr>
                        <td colSpan="2">
                            <SelectBar />
                        </td>
                        <td>
                            <SearchBox />
                        </td>
                    </tr>
                    <tr>
                        <div className="Apartments">
                            {this.state.myList.map((val, key) => {
                                return (
                                    <div className="AnApartment">
                                        <hr />
                                        <h1>{val.THUTU_NHA} - {val.ID_NHA} - {val.ID_TAIKHOAN}</h1>
                                        <p>Khu tiếp tân: {val.KHUTIEPTAN === true ? "co" : "khong"}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </tr>
                </table>


            </div>

        );
    }

}

export default ListApartment;