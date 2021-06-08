import React, { Component } from 'react'
import { Link  } from 'react-router-dom'

export default class TitleBrand extends Component {
    render() {
        return (
            <div>
                <Link to ="/" className="navbar-brand" style={{fontWeight: "500"}}>{this.props.title}</Link>
            </div>
        )
    }
}
