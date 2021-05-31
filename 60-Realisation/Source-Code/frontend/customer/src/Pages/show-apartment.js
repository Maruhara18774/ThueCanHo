import { Component } from 'react';
import Axios from 'axios';
import SearchBox from '../Components/search-apartment';
import SelectBar from '../Components/select-bar';
import './show-apartment.css';
import InfoCard from '../Components/apartment-info-card';

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
    handleCallback = (newList) =>{
        this.state.myList = newList;
        console.log("Callback: ");
        this.setState(this);
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (

            <div className="lsApartments">
                <div className="search">
                    <div className="box">
                        <SearchBox callback={this.handleCallback}/>
                    </div>
                    <div className="bar">
                        <SelectBar callback={this.handleCallback}/>
                    </div>
                </div>
                
                {this.state.myList.length == 0?
                <div className="mainListApm">Không có kết quả</div>:
                <div className="mainListApm">
                        {this.state.myList.map((val, key) => {
                    return (
                        <div>
                            <InfoCard model={val}/>
                        </div>
                    )
                })}
            </div>
}

            </div>

        );
    }

}

export default ListApartment;