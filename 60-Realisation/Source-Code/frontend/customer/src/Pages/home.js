import {Component,createRef} from 'react';
import Axios from 'axios';
import Banner from '../Components/banner'


class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Banner/>
            </div>
            
          );
    }

}

export default HomePage;