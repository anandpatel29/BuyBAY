import React, { Component } from 'react'
import {Link}  from 'react-router-dom';

const emailtoken = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );


export default class SignupContainer extends Component {
    constructor() {
        super();
    
        this.state = {
          username: undefined,
          email: undefined,
          password: undefined,
          result: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

    onChange = e => {
        const { name, value } = e.target;
        let formError = this.state.formError;
        switch (name) {
          case 'username':
            formError.username = value.length < 3 ? 'minimum 3 characters required' : '';
            break;
          case 'email':
            formError.email = emailtoken.test(value) ? '' : 'invalid email address';
            break;
          case 'password':
            formError.password = value.length < 6 ? 'minimum 6 characters required' : '';
            break;
          default:
            break;
        }
        this.setState({ formError, [name]: value });
      }
    
      formValid = ({ formError, ...rest }) => {
        let valid = true;
        Object.values(formError).forEach(val => { val.length > 0 && (valid = false) });
        Object.values(rest).forEach(val => { val === undefined && (valid = false) });
        return valid;
      }
    
    handleChange(e){
        let target = e.target
        let name = target.name
        let value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name] : value
        });

    }

    handleSubmit(e){
        e.preventDefault()

        console.log('Submitted')
        console.log(this.state)
    }
    render() {
        return (
            <div class="signup-container">
            <div class="left-panel">
              <h1 class="sign-title">Sign Up</h1>
            </div>
            <div class="right-panel">
              <form class="signup-form" action="signup.html" method="post" onSubmit={this.handleSubmit}>
                <div class="input">
                  <label for="username">Username</label>
                  <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange}/>
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <input class="button" type="submit" name="submit" value="Sign Up" />
                <Link to="/login"><button class="button">Log In</button></Link>
              </form>
            </div>
          </div>
        )
    }
}
