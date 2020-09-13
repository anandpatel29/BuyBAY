import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Middle from '../components/Middle'
import Feature from '../components/Feature'
import Footer from '../components/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Header/>
                <Middle/>
                <Feature/>
                <Footer/>
            </div>
        )
    }
}
