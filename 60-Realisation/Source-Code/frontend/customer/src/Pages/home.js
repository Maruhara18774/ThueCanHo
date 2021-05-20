import {Component,createRef} from 'react';
import Axios from 'axios';
import Banner from '../Components/banner';
import FooterCustom from '../Components/footer';
import SearchingForm from '../Components/form-search';


class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Banner/>
                <SearchingForm/>
                <FooterCustom/>
            </div>
            
          );
    }

}

export default HomePage;