import React, { Component } from 'react'
import Axios from 'axios'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Navbar from '../../Components/navbar'
import TitlePages from '../../Components/titlePages'

import District from '../Location/district.js'
import Country from '../Location/country.js'
import City from '../Location/city.js'

class Location extends Component {
    constructor(props) {
        super(props);      
    }
    render() {
        return (
            <div>
               <div className="sticky-top">               
                    <Navbar />
                </div>
                <div className="container">
                    <div className="py-4">
                    <TitlePages title="QUẢN LÝ VỊ TRÍ"/>
                        <Tabs defaultActiveKey="district" variant="tabs">
                            <Tab eventKey="district" title="Quận" >
                                <District/>
                            </Tab>
                            <Tab eventKey="country" title="Quốc gia">
                                <Country/>
                            </Tab>
                            <Tab eventKey="city" title="Thành phố">
                                <City/>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default Location
