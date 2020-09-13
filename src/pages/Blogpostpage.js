import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Blogpost from '../components/Blogpost'

export default class Blogpostpage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Blogpost/>
                <Footer/>
            </div>
        )
    }
}
