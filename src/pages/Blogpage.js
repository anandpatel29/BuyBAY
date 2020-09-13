import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Blog from '../components/Blog'

export default class Blogpage extends Component {
  render() {
    return (
      <div>
                <Navbar/>
                <Blog/>
                <Footer/>
      </div>
    )
  }
}
