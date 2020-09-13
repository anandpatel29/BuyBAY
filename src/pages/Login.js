import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoginPage from '../components/LoginPage'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <LoginPage/>
                <Footer/>
            </div>
        )
    }
}
