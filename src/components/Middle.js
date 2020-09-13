import React, { Component } from 'react'
import images from '../images/image1.png'

export default class Middle extends Component {
    render() {
        return (
            <section class="middle-container">
                <div class="middle-text">
                    <p style={{transform: "translate(35rem, -5rem)"}}>
                        She counted. One. She could hear the steps coming closer. 
                        Two. Puffs of breath could be seen coming from his mouth. 
                        Three. He stopped beside her. Four. She pulled the trigger 
                        of the gun.
                    </p>
                </div>
                <img class="middleimg" src={images} alt="launch page" style={{transform: "translate(-32rem, -14.3rem)"}}/>
            </section>
        )
    }
}
