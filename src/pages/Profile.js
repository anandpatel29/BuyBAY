import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import UserContainer from '../components/UserContainer'
import About from '../components/About'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <UserContainer/>
                <About/>
                <Footer/>
            </div>
        )
    }
}
