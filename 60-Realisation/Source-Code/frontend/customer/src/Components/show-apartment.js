import {Component} from 'react';
import Axios from 'axios';

class ListApartment extends Component{
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
            <div>
                <div className="Apartments">
            {this.state.myList.map((val,key)=>{
                console.log(val);
                return(
                  <div className="AnApartment">
                      <hr/>
                      <h1>{val.THUTU_NHA} - {val.ID_NHA} - {val.ID_TAIKHOAN}</h1>
                      <p>Khu tiếp tân: {val.KHUTIEPTAN === true ? "co" : "khong"}</p>
                  </div>
              )
            })}
      </div>
            </div>
            
          );
    }

}

export default ListApartment;