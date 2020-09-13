import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Roomate from '../components/Roomate'
import RoomateImage from '../components/RoomateImage'

export default class findingRoomate extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <RoomateImage/>
                <Roomate/>
                <Footer/>
            </div>
        )
    }
}