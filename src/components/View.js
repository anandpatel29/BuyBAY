import React, { Component } from "react";
import { Card, CardDeck, Dropdown } from "react-bootstrap";
import logo from "../images/logo.png";
import image1 from "../images/image1.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image01.png";
import {Link} from 'react-router-dom';

export default class View extends Component {
  render() {
    return (
      <div className="ml-4">
      
      <input type="text" className="mt-5 mb-3 col-xs-12 col-sm-6 offset-sm-3" placeholder="Search Listings..." style={{transform: "translate(-12rem, 7rem)"}}/>
      <div className="row" style={{transform: "translate(0rem, 7rem)"}}>
      <Dropdown className="pr-2 pl-3">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Property Type
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Apartment</Dropdown.Item>
        <Dropdown.Item href="#/action-2">House</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Condos</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown className="pr-2">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Furnished
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Fully Furnished</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Semi-Furnished</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Not Furnished</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown className="pr-2">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Number of Bedrooms
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Any</Dropdown.Item>
        <Dropdown.Item href="#/action-2">1</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
      <hr/>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Example Property 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu suscipit tortor. Curabitur euismod porta lacus non auctor.
                Integer quis nibh nec lectus maximus ultrices.
              </Card.Text>
              <Link to="/property-page">View Property Details</Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title>Example Property 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu suscipit tortor. Curabitur euismod porta lacus non auctor.
                Integer quis nibh nec lectus maximus ultrices.
              </Card.Text>
              <Link to="/property-page">View Property Details</Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Example Property 3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu suscipit tortor. Curabitur euismod porta lacus non auctor.
                Integer quis nibh nec lectus maximus ultrices.
              </Card.Text>
              <Link to="/property-page">View Property Details</Link>
            </Card.Body>
          </Card>
        </CardDeck>

        <br />
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Example Property 4</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu suscipit tortor. Curabitur euismod porta lacus non auctor.
                Integer quis nibh nec lectus maximus ultrices.
              </Card.Text>
              <Link to="/property-page">View Property Details</Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={image5} />
            <Card.Body>
              <Card.Title>Example Property 5</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu suscipit tortor. Curabitur euismod porta lacus non auctor.
                Integer quis nibh nec lectus maximus ultrices.
              </Card.Text>
              <Link to="/property-page">View Property Details</Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Example Property 6</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu suscipit tortor. Curabitur euismod porta lacus non auctor.
                Integer quis nibh nec lectus maximus ultrices.
              </Card.Text>
              <Link to="/property-page">View Property Details</Link>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}