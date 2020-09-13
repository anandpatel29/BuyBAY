import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import Apartlist from '../components/Apartlist'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <SearchBar/>
                <Apartlist/>
                <Footer/>
            </div>
        )
    }
}
