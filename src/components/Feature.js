import React, { Component } from 'react'
import images from '../images/image1.png'

export default class Feature extends Component {
    render() {
        return (
        <section class="feature-section" style={{transform: "translate(-1rem, -16rem)"}}>
            <div class="feature-card">
                <img src={images} class="card-img" alt="cardtext"/>
                <div text-container> 
                    <p class="text-title">2 Bedroom Apartments</p>
                    <p class="text-main">She counted. One. She could hear the steps coming closer. 
                        Two. Puffs of breath could be seen coming from his mouth. 
                        Three. He stopped beside her. Four. She pulled the trigger of the gun.
                    </p>
                    <p class="text-price">$1,900
                        <span class="text-tile">/ month</span>
                    </p>
                </div>
            </div>
            <div class="feature-card">
                <img src={images} class="card-img" alt="cardtext"/>
                <div text-container> 
                    <p class="text-title">2 Bedroom Apartments</p>
                    <p class="text-main">She counted. One. She could hear the steps coming closer. 
                        Two. Puffs of breath could be seen coming from his mouth. 
                        Three. He stopped beside her. Four. She pulled the trigger of the gun.
                    </p>
                    <p class="text-price">$1,900
                        <span class="text-tile">/ month</span>
                    </p>
                </div>
            </div>
            <div class="feature-card">
                <img src={images} class="card-img" alt="cardtext"/>
                <div text-container> 
                    <p class="text-title">2 Bedroom Apartments</p>
                    <p class="text-main">She counted. One. She could hear the steps coming closer. 
                        Two. Puffs of breath could be seen coming from his mouth. 
                        Three. He stopped beside her. Four. She pulled the trigger of the gun.
                    </p>
                    <p class="text-price">$1,900
                        <span class="text-tile">/ month</span>
                    </p>
                </div>
            </div>

            

        </section>
        )
    }
}
