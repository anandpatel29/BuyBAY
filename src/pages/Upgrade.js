import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PaymentHead from '../components/PaymentHead'
import PaymentCard from '../components/PaymentCard'
import PayButton from '../components/PayButton'

export default class Upgrade extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <PaymentHead/>
                <PaymentCard/>
                <PayButton/>
                <Footer/>
            </div>
        )
    }
}
