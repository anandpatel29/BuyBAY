import React, { Component } from "react";
import { Navbar, Nav} from 'react-bootstrap';
import {Link}  from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="navbarbg">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">BUYBAY</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav>
                    <Link to="/search">Search</Link>
                </Nav>
              <Link to="/listing">Listings</Link>
              <Link to="/blogpost">Blog</Link>
              <Link to="/profile">Profile</Link>
            </Nav>
            <Nav>
              <Link to="/sign-up">Sign up</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}