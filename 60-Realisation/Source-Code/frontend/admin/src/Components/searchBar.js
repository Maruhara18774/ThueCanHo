import React from 'react'
import './searchBar.css'
import * as FaIcons from 'react-icons/fa'

export default function searchBar() {
    return (
        <div>
            <div className="search-box">
                <input className="search-bar"></input>
                <button><FaIcons.FaSearch/></button>
            </div>
        </div>
    )
}
