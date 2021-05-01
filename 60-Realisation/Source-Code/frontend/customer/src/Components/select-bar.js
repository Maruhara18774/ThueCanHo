import {Component} from 'react';
import Axios from 'axios';

class SelectBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="selectBar-zone">
                <table>
                    <tr>
                        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                    </tr>
                </table>
            </div>
          );
    }

}

export default SelectBar;