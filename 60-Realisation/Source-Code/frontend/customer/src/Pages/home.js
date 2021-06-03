import {Component,createRef} from 'react';
import Banner from '../Components/banner';
import FooterCustom from '../Components/footer';
import SearchingForm from '../Components/form-search';
import WhyTravelokaPartial from '../Components/why-traveloka';

class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Banner/>
                    <WhyTravelokaPartial/>
                <FooterCustom/>
            </div>
            
          );
    }

}

export default HomePage;
// <SearchingForm/>