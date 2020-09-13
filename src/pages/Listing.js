import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Views from '../components/View'

export default class Listing extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Views/>
                <Footer/>
            </div>
        )
    }
}
