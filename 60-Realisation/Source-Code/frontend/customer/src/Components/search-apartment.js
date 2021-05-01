import {Component} from 'react';
import Axios from 'axios';

class SearchBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            myList : []
        };
        this.getList()
    }
    getList =( () =>{
        Axios.get('http://localhost:33456/api/customer/getListApartment').then(
            (response) => {
                this.state.myList = response.data;
                this.setState(this);
            });
    })
    render(){
        return (
            <div className="seachingBoxWrap">
                <input placeholder="Tìm kiếm ..."/>
            </div>
            
          );
    }

}

export default SearchBox;