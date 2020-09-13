import React, { Component } from 'react'

export default class AccountContainer extends Component {
    render() {
        return (
            <div class="account-container">
                    <label for="username">Account</label>
                    <label for="password">Change Password</label>
                    <input type="password" name="password" id="password" />
            </div>
        )
    }
}
