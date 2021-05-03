import {Component,createRef} from 'react';
import Axios from 'axios';
import './search-apartment.css'

class SearchBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            myList : [],
            searchText: ""
        };
        this.getList()
    }
    getList = () =>{
        Axios.post('http://localhost:33456/api/customer/searchApartmentWithText',{text: this.state.searchText}).then(
            (response) => {
                this.state.myList = response.data;
                this.setState(this);
            });
        }
        //https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs
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