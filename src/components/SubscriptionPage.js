import React, { Component } from "react";
import "./LoginSignUpCss.css";

const validEmailRegex = RegExp(
  /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class SubscriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: null,
      password: null,
      errors: {
        email: "",
        password: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 6 ? "Name must be 6 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, errors } = this.state;
    if (!email) {
      errors.email = "Please fill out Email!";
    }
    if (!password) {
      errors.password = "Please fill out Password!";
    }
    if (validateForm(errors)) {
      alert("Subscribed successfully. Backend Development in Progress");
    } else {
      alert("Invalid Email or Name's format");
    }
    this.setState({ errors, errors });
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <br /><br /><br/><br/><br/>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8 auth-wrapper">
            <div className="auth-inner">
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="form-group">
                  <h2>SUBSCRIBE</h2>
                  <p>
                    Subscribe to our website to stay informed about latest news
                    and listings, updates, and offers in the world of real
                    estate.
                  </p>
                </div>

                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control" name="password" onChange={this.handleChange} type="text" placeholder="Name" required />
                  {errors.password.length > 0 && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input className="form-control" name="email" type="text" onChange={this.handleChange} noValidate placeholder="Email address" required />
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>
                  <input type="checkbox" checked="checked" name="subscribe" id="subscribe"/> <t></t>
                  <label for="subscribe" >Weekly Newsletter</label> 
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubscriptionPage;

/*https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_newsletter*/

/*<div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="body1 ">
              <h2>SUBSCRIBE</h2>
              <form className="form1" action="/subscribe">
                <div class="container">
                  <h2>Subscribe to our WebSite</h2>
                  <p>
                    Subscribe to website to stay informed about latest news and
                    listings, updates, and offers in the world of real estate.
                  </p>
                </div>

                <div class="container">
                  <input
                    class="textorsubmit1"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <input
                    type="text"
                    class="textorsubmit1"
                    placeholder="Email address"
                    name="mail"
                    required
                  />
                  <label>
                    <input
                      class="checkbox1"
                      type="checkbox"
                      checked="checked"
                      name="subscribe"
                    />{" "}
                    Daily Newsletter
                  </label>
                </div>

                <div class="container">
                  <input
                    class="textorsubmit1 submit1"
                    type="submit"
                    value="Subscribe"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>*/
