import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Register from '../components/RegistrationPage'

export default class Signup extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Register/>
          <Footer/>
      </div>
    )
  }
}


