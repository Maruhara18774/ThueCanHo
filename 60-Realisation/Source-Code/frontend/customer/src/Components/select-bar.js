import { Component } from 'react';
import Axios from 'axios';

class SelectBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lsCity: []
    };
  }
  getListCity = () =>{
    Axios.post('http://localhost:33456/api/customer/getListCity',{}).then(
            (response) => {
                this.state.lsCity = response.data;
                this.setState(this);
            });
  }
  render() {
    return (
      <div className="selectBar-zone">
        <table>
          <tr>
            <td>Thành phố: </td>
            <td>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Chọn thành phố ...
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {this.state.lsCity.map((val, key)=><a class="dropdown-item">{val.TEN_THANHPHO}</a>)}
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }

}

export default SelectBar;