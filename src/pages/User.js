import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProfileHead from '../components/ProfileHead'
import AccountContainer from '../components/AccountContainer'

export default class User extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <ProfileHead/>
                <AccountContainer/>
                <Footer/>
            </div>
        )
    }
}
