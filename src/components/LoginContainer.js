import React, { Component } from 'react'
import {Link}  from 'react-router-dom';

export default class LoginContainer extends Component {
    render() {
        return (
            <div class="signup-container">
            <div class="left-panel">
              <h1 class="sign-title">Log In</h1>
            </div>
            <div class="right-panel">
              <form class="signup-form" action="signup.html" method="post">
                <div class="input">
                  <label for="username">Username</label>
                  <input type="text" name="username" id="username" />
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password" />
                </div>
                <input class="button" type="submit" name="submit" value="Log In" />
              </form>
            </div>
          </div>
        )
    }
}
