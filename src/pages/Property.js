import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Properties from '../components/Property'

export default class Property extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Properties/>
                <Footer/>
            </div>
        )
    }
}
