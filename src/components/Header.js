import React, { Component } from 'react'
import images from '../images/image1.png'

export default class Header extends Component {
    render() {
        return (
            <section>
                <div class="header-text">
                    <h1 style={{transform: "translate(1.5rem, 16rem)"}}>Luxury Apartment in Halifax Downtown</h1>
                    <p style={{transform: "translate(4rem, 17rem)"}}>
                        She counted. One. She could hear the steps coming closer. 
                        Two. Puffs of breath could be seen coming from his mouth. 
                        Three. He stopped beside her. Four. She pulled the trigger 
                        of the gun.
                    </p>
                </div>
                <img class="launch" src={images} alt="launch page" style={{transform: "translate(20rem, -3rem)"}}/>
            </section>
        )
    }
}
