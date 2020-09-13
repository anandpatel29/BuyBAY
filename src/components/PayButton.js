import React, { Component } from 'react'
import {Link}  from 'react-router-dom';

export default class PayButton extends Component {
    render() {
        return (
            <div class="paybuttons">
                {/* <input class="paybutton" type="submit" name="submit" value="Process and Pay" /> */}
                <Link to ="/processpay" class="inline">
                    <button class="paybutton" >Process and Pay</button>
                </Link>
            </div>
        )
    }
}
