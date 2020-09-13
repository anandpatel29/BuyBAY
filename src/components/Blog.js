import React, { Component } from 'react';
import {Card,CardDeck, Button, Jumbotron,Image, Figure, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import "./style.css";
import './blog.css';

export default class View extends Component {
    render() {
        return (
        <div className="auth-wrapper">
        <div>
          <h1 className="float-left">Our Top Stories<b> </b>
          </h1>
          </div>
        <CardDeck style={{transform: "{translate(-9rem, 2rem)"}}>
            <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                     <Card.Title> Post Title
                        <Button variant="primary" style={{ float: 'right' }} > Ratings <Badge variant="light">5</Badge>
                        <span className="sr-only">unread messages</span>
                         </Button>
                         </Card.Title> <br/>
                         <Card.Subtitle className="mb-2 text-muted">Posted By Web Team 18 on June 20, 2018</Card.Subtitle>
                        <Card.Text>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi eu suscipit tortor. 
                             Curabitur euismod porta lacus non auctor. 
                        </Card.Text>
                 </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                   <p style={{ float: 'right' }}>
                      <Link to="/blogpost"> <Button variant="primary">Learn more</Button> </Link>
                 </p>      
                </Card.Footer>
            </Card>
         <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                     <Card.Title> Post Title
                        <Button variant="primary" style={{ float: 'right' }} > Ratings <Badge variant="light">5</Badge>
                        <span className="sr-only">unread messages</span>
                         </Button>
                         </Card.Title> <br/>
                         <Card.Subtitle className="mb-2 text-muted">Posted By Web Team 18 on June 20, 2018</Card.Subtitle>
                        <Card.Text>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi eu suscipit tortor. 
                             Curabitur euismod porta lacus non auctor. 
                        </Card.Text>
                 </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                   <p style={{ float: 'right' }}>
                 <Link to="/blogpost"> <Button variant="primary">Learn more</Button> </Link></p>      
                </Card.Footer>
            </Card>
              <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                     <Card.Title> Post Title
                        <Button variant="primary" style={{ float: 'right' }} > Ratings <Badge variant="light">5</Badge>
                        <span className="sr-only">unread messages</span>
                         </Button>
                         </Card.Title> <br/>
                         <Card.Subtitle className="mb-2 text-muted">Posted By Web Team 18 on June 20, 2018</Card.Subtitle>
                        <Card.Text>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi eu suscipit tortor. 
                             Curabitur euismod porta lacus non auctor. 
                        </Card.Text>
                 </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                   <p style={{ float: 'right' }}>
                 <Link to="/blogpost"> 
                    <Button variant="primary">Learn more</Button> 
                 </Link>
                 </p>      
                </Card.Footer>
            </Card>
</CardDeck>
        
             </div>
            );
} }