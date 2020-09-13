import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <section class="search-section" style={{transform: "translate(-3rem, 9rem)"}}>
                <div class="search-container">
                <div class="search-box">
                    <input class="search-term" type="text" placeholder="Search for Apartments"/>
                    <buttons type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </buttons>
                </div>
                </div>
            </section>
        )
    }
}
