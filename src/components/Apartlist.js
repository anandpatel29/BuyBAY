import React, { Component } from 'react'
import images from '../images/image1.png'

export default class Apartlist extends Component {
    render() {
        return (
            <section class="aprtlist-section" style={{transform: "translate(10rem, 15rem)"}}>
                <div class="apprtment-lists">
                    <div class="apart-card">
                        <img src={images} class="card-img" alt="apartshowcases"/>
                        <div class="apart-text">
                        <p class="apart-title">Luxery Apartment in Halifax Downtown</p>
                        <p class="apart-main">She counted. One. She could hear the steps coming closer.</p>
                        <p class="apart-price">$2,200
                        <span class="text-tile">/ month</span>
                        </p>
                    </div>
                    <div>
                        <a href="/apart">
                        <button style={{transform: "translate(9px, 19px)"}}>
                        Search
                        </button>
                        </a>
                    </div>
                    </div>
                    <div class="apart-card">
                        <img src={images} class="card-img" alt="apartshowcases"/>
                        <div class="apart-text">
                        <p class="apart-title">Luxery Apartment in Halifax Downtown</p>
                        <p class="apart-main">She counted. One. She could hear the steps coming closer.</p>
                        <p class="apart-price">$2,200
                        <span class="text-tile">/ month</span>
                        </p>
                    </div>
                    <div>
                        <a href="/apart">
                        <button style={{transform: "translate(9px, 19px)"}}>
                        Search
                        </button>
                        </a>
                    </div>
                    </div>
                    <div class="apart-card">
                        <img src={images} class="card-img" alt="apartshowcases"/>
                        <div class="apart-text">
                        <p class="apart-title">Luxery Apartment in Halifax Downtown</p>
                        <p class="apart-main">She counted. One. She could hear the steps coming closer.</p>
                        <p class="apart-price">$2,200
                        <span class="text-tile">/ month</span>
                        </p>
                    </div>
                    <div>
                        <a href="/apart">
                        <button style={{transform: "translate(9px, 19px)"}}>
                        Search
                        </button>
                        </a>
                    </div>
                    </div>
                    <div class="apart-card">
                        <img src={images} class="card-img" alt="apartshowcases"/>
                        <div class="apart-text">
                        <p class="apart-title">Luxery Apartment in Halifax Downtown</p>
                        <p class="apart-main">She counted. One. She could hear the steps coming closer.</p>
                        <p class="apart-price">$2,200
                        <span class="text-tile">/ month</span>
                        </p>
                    </div>
                    <div>
                        <a href="/apart">
                        <button style={{transform: "translate(9px, 19px)"}}>
                        Search
                        </button>
                        </a>
                    </div>
                    </div>
                    <div class="apart-card">
                        <img src={images} class="card-img" alt="apartshowcases"/>
                        <div class="apart-text">
                        <p class="apart-title">Luxery Apartment in Halifax Downtown</p>
                        <p class="apart-main">She counted. One. She could hear the steps coming closer.</p>
                        <p class="apart-price">$2,200
                        <span class="text-tile">/ month</span>
                        </p>
                    </div>
                    <div>
                        <a href="/apart">
                        <button style={{transform: "translate(9px, 19px)"}}>
                        Search
                        </button>
                        </a>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}
