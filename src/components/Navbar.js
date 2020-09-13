import React, { Component } from 'react'
import {Link}  from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <header class="nav-home">
                <div class="nav-container">
                    <h1 class="nav-logo" style={{transform: "translate(-53rem, 46px)"}}>
                        <Link class="link" to="/">BuyBAY</Link>
                    </h1>
                    {/* <Link class="link Search" to="/search">
                        <button style={{transform: "translate(61rem, -1rem)"}}>Search</button>
                    </Link> */}
                    <Link class="link sign-up" to="/signup">
                        <button style={{transform: "translate(61rem, -1rem)"}}>Sign Up</button>
                    </Link>
                    <Link class="link Upgrade" to="/upgrade">
                        <button style={{transform: "translate(37rem, -1rem)"}}>Upgrade</button>
                    </Link>
                    <Link class="link User" to="/profile">
                        <button style={{transform: "translate(21rem, -1rem)"}}>Profile</button>
                    </Link>
                    <Link class="link Blog" to="/blogpage">
                        <button style={{transform: "translate(7rem, -1rem)"}}>Blog</button>
                    </Link>
                    <Link class="link roomate" to="/findroomate">
                        <button style={{transform: "translate(-10rem, -1rem)"}}>Find Roomate</button>
                    </Link>
                    <Link class="link listing" to="/listing">
                        <button style={{transform: "translate(13rem, -1rem)"}}>Listing</button>
                    </Link>
                </div>
            </header>
        )
    }
}
