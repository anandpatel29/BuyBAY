import React, { Component } from 'react';
import {Alert, Container, Row, Image, CardColumns, Card,CardDeck, Button} from 'react-bootstrap';
import logo from '../images/logo.png';
import './blog.css'

export default class Products extends Component {
    render() {
        return (
    
                <div className="auth-wrapper">
                  <Container>
                    <section className="article-section">
                      <div className="heading" style={{ float: 'left'}}> The Best Property Voted by Customers </div>
                      </section><br/>
                      <br/><br/>
                      <small className="text-muted"><b>Posted By Web Team 18 on June 20, 2018</b> </small>

                     <Row>
                        <Image src={logo} fluid />
                     </Row><br/> 
                     <div className="heading" style={{ float: 'left'}}> Choosing A Static Demo </div><br/>
                     <p style={{ float: 'left'}}>
                     

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum porttitor blandit. Sed rutrum mi eget turpis varius, non accumsan mi placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum eleifend magna hendrerit gravida. Vestibulum eget odio nec nulla maximus rhoncus. Integer ac vestibulum eros. Morbi malesuada dolor justo, a condimentum augue feugiat sed. Vestibulum eleifend ante ac quam aliquet, eget commodo mauris varius.

Mauris facilisis tellus a odio sollicitudin tincidunt. Pellentesque non massa ac nibh sollicitudin dictum et in erat. Pellentesque maximus elit a sapien placerat, eu fermentum dolor interdum. Duis non turpis turpis. Etiam eget finibus quam. In luctus lacinia consequat. In id tristique nisi, at bibendum dui. Pellentesque pellentesque, lorem vitae blandit laoreet, massa orci consequat orci, dapibus convallis mauris nulla ut ipsum. Praesent sed pulvinar tellus, eget pretium dolor. Cras iaculis aliquet tortor sit amet porta. Suspendisse ac efficitur diam, vitae semper elit. Duis non metus augue. Vivamus aliquam, ligula non posuere euismod, lectus velit venenatis libero, eu dictum nulla sapien ac felis. Suspendisse id purus porttitor, placerat est ut, interdum velit. In hac habitasse platea dictumst.

Integer vel tortor gravida, molestie massa nec, consequat augue. Nam feugiat congue justo sed blandit. Curabitur pulvinar nisi nec commodo ultricies. Fusce gravida odio quis diam egestas dapibus. Fusce porta enim nunc, in pulvinar leo fringilla sed. Aenean mattis nisi at libero tristique, a faucibus magna euismod. Mauris in velit fermentum, sodales magna et, semper nisl. Nullam ut elit quis nisi consectetur pulvinar. Aenean sodales dictum auctor. Donec ac purus vel odio luctus posuere sed sed metus. Duis orci eros, tempus at eleifend vitae, ornare nec mi. Suspendisse consequat elit eget mi finibus ultrices. Morbi vitae ipsum auctor, sollicitudin eros vel, venenatis urna.

Proin dictum nunc at elementum ultrices. Duis turpis elit, aliquam varius erat tincidunt, volutpat congue libero. Quisque tempor efficitur arcu sit amet dapibus. Morbi vitae aliquam libero, tristique viverra purus. Quisque imperdiet elit nunc, nec blandit nulla tempor eget. Duis finibus, quam ut fringilla ornare, erat tellus ultrices nulla, vel blandit mi ipsum eleifend metus. Vestibulum sed tempus velit. Nullam ut dictum sapien, vel sollicitudin velit. Cras eget accumsan orci, sed ultrices lacus. Sed nec velit at mauris scelerisque cursus sed at sapien. Ut blandit purus eget lorem efficitur, eu gravida ipsum tempor. Nullam in orci at velit egestas ullamcorper. Donec placerat, nisl at varius gravida, enim neque ornare odio, non dictum sem diam ut leo.

Curabitur viverra, ante id vestibulum interdum, velit mi blandit nunc, aliquet dignissim mi tellus in leo. Integer suscipit lorem sed ante ullamcorper dignissim at sed elit. Phasellus ultricies viverra libero ac blandit. Integer commodo sit amet justo sed fermentum. Pellentesque vitae purus non justo iaculis interdum nec eget felis. Nulla facilisi. Sed elementum euismod fermentum. Nullam condimentum tellus vitae mi aliquam iaculis. Vestibulum vitae orci hendrerit, sodales felis egestas, tempus erat. In lobortis elit tortor, sit amet ullamcorper dolor facilisis vel. 
</p><br/>
<div className="heading"> Related Articles</div><br/>
 <CardDeck style={{transform: "translate(0rem, -6rem)"}}>
  <Card>
    <Card.Img variant="top" src={logo} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={logo} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={logo} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>

</Container>  
                          

                  </div>     
        );
    }
}