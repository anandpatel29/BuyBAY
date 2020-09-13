import React, { Component } from 'react'
import images from '../images/user-hobbies.png'

export default class About extends Component {
    render() {
        return (
            <section class="about">
                <div class="user-detail">
                <h1>About</h1>
                <p class="user-paragraph">
                    Her eyebrows were a shade darker than her hair. They were thick and almost horizontal,
                    emphasizing the depth of her eyes. She was rather 
                    handsome than beautiful. Her face was captivating by reason of 
                    a certain frankness of expression and a contradictory subtle play of features. 
                    Her manner was engaging.
                </p>
            </div>
            <div class="user-job">
                <h2>Working at</h2>
                <p class="position">
                    Rock Music
                </p>
            </div>

            <div class="user-hobbies">
                <h3>Hobbies</h3>
                <img src={images} alt class="hobbies-img"/>
                <p class="hobb">Yoga</p>
            </div>
            </section>
        )
    }
}
