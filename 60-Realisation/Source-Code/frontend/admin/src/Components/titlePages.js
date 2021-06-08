import React, { Component } from 'react'

export default class TitlePages extends Component {
    render() {
        return (
            <h3 className="text-white pb-3 text-center">
                <span className="border-top border-bottom px-1 border-primary">
                    <span className="border-right border-left px-1 border-primary bg-primary">
                        <span className="border-bottom border-top py-1 border-warning">
                            <span className="border-right border-left py-2 px-1 border-primary">
                                    {this.props.title}
                            </span>
                        </span>
                    </span>
                </span>
            </h3>
        )
    }
}
