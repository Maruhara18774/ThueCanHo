import {Component,createRef} from 'react';
import Axios from 'axios';
import './search-apartment.css'

class SearchBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ""
        };
        this.getList()
    }
    getList = () =>{
        Axios.post('http://localhost:33456/api/customer/searchApartmentWithText',{text: this.state.searchText}).then(
            (response) => {
                this.props.callback(response.data);
            });
        }
    setSearchText=(event)=>{
        this.state.searchText=event.target.value;
    }
    render(){
        return (
            <div className="seachingBoxWrap position-fixed">
                <input placeholder="Tìm kiếm ..." onChange={this.setSearchText}/>
                <i class="fa fa-search button" onClick={()=>this.getList()}></i>
            </div>
            
          );
    }

}

export default SearchBox;