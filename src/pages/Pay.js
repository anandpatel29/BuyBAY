import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProcessPay from '../components/SubscriptionPage'

export default class Pay extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <ProcessPay/>
                <Footer/>
            </div>
        )
    }
}
