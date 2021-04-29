import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Login from './login'
import Register from './register'

const Auth = (props) => {
    return (
        <div>
            <div className="container">
                <div className ="col-md-6">
                    <Login setToken = {props.setToken}/>
                </div>     
                <div className ="col-md-6">
                    <Register setToken = {props.setToken}/>
                </div>               
            </div>
        </div>
    )
}

export default Auth

