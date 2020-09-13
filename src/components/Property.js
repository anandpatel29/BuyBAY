import React, { Component } from "react";
import Prop from "../images/propimg.png";
import Card from "react-bootstrap/Card";
import { Button, Modal } from "react-bootstrap";
import { FaPhoneAlt, FaMailBulk, FaHeart } from "react-icons/fa";
import img01 from "../images/image01.png";
import img02 from "../images/image02.png";
import img03 from "../images/image03.png";
import Carousel from "react-bootstrap/Carousel";
import Comments from "./Comments";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }
  handleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  render() {
    const { showModal } = this.state;
    return (
      <div className="mt-3">
          <div className="row" style={{transform: "translate(-2rem, 9rem)"}}>
          <Carousel className="col-xs-3 col-sm-6 offset-sm-1">
            <Carousel.Item>
              <img className="d-block w-100" src={Prop} alt="First slide" />
              <Carousel.Caption>
                <h3>lorem ispusm</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img02} alt="First slide" />
              <Carousel.Caption>
                <h3>lorem ispusm</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img03} alt="Third slide" />

              <Carousel.Caption>
                <h3>interdum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img01} alt="Third slide" />

              <Carousel.Caption>
                <h3>Lorem ipsum</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="col-xs-3 col-sm-4">
          <h2>Description</h2>
          <br/>
            <p>
            Phasellus dictum pretium urna, ac hendrerit turpis fermentum ut. Nulla tincidunt nunc sit amet lorem convallis, a ornare nulla eleifend. Morbi finibus tincidunt nisi sed vulputate. Vivamus et tincidunt odio. Curabitur pellentesque eu ipsum cursus aliquam. Vestibulum non justo quis mauris cursus semper. Aenean varius enim id tellus malesuada, ornare luctus leo sagittis. Nullam ut laoreet diam, a cursus mi. Morbi mattis iaculis diam, sed facilisis mi luctus ut. Integer vitae leo in sem finibus condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas faucibus feugiat ante at dictum. Fusce in ante sapien.

Morbi aliquam enim quis arcu auctor dapibus. Curabitur efficitur diam et lorem vestibulum, quis cursus erat molestie. Nam eget euismod est. Nunc vel eleifend orci. Nunc sed ex risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed accumsan orci vel odio ultrices, at maximus erat porta. Donec commodo.
            </p>
          </div>
        </div>
        <hr />
        <div className="row mt-5" style={{transform: "translate(-1rem, 9rem)"}}>
          <div className="col-xs-2 col-sm-6 offset-sm-1">
            <ps>Property Summary
            </ps>
            <hr />
            <div className="row">
              <div className="col-sm-4 col-xs-1">
                <h6>Type</h6>
                <f>Apartment</f>
              </div>
              <div className="col-sm-4 col-xs-1">
                <h6>Neighbourhood Name</h6>
                <f>Bayers street</f>
              </div>
              <div className="col-sm-4">
                <h6>Rent</h6>
                <f>$1200</f>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-sm-4">
                <h6>Lease</h6>
                <f>Yearly</f>
              </div>
              <div className="col-sm-4">
                <h6>Area</h6>
                <f>1200 sq.ft.</f>
              </div>
              <div className="col-sm-4">
                <h6>Parking Type</h6>
                <f>Parking Space(s) (3), Garage</f>
              </div>
            </div>
          </div>
          <div className="col-xs-1 col-sm-4" style={{transform: "translate(4rem, -8rem)"}}>
            <Card className="row">
              <Card.Body>
                <Card.Title>Contact Seller</Card.Title>
                <Card.Text>Jane Doe</Card.Text>
                <Card.Text>
                  <FaPhoneAlt /> <span>902-989-908</span>
                </Card.Text>
                <Card.Text>
                  <FaMailBulk /> jane.doe@mail.com
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Button variant="warning" onClick={()=>{this.handleModal()}}>
             <FaHeart/>  Favourite
            </Button>
            <Modal show={showModal} onHide={()=>{this.handleModal()}}>
              <Modal.Header closeButton>
                <Modal.Title>
                    Notification
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohooo!! This listing is added to favourites.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={()=>{this.handleModal()}}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <hr/>
        <div className="commentscard"> <Comments/></div>
      </div>
    );
  }
}
