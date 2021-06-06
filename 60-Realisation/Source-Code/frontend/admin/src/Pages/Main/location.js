import React, { Component } from 'react'
import Axios from 'axios'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Navbar from '../../Components/navbar'

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
                <Navbar/>
                <div className="container">
                    <div className="py-4">
                        <h1>Location Management</h1>
                        <Tabs defaultActiveKey="district" variant="tabs" unmountOnExit>
                            <Tab eventKey="district" title="District" >
                                <District/>
                            </Tab>
                            <Tab eventKey="nation" title="Nation">
                                <Country/>
                            </Tab>
                            <Tab eventKey="city" title="City">
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
