import React, { Component } from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import { Container, Row, Col } from 'reactstrap'



class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Homepage</h1>
                  <NavBar/>
                
        <Container>
        <Row>
        <Carousel/>
      
        </Row>  
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
      </Container>
 
            </div>
            
        );
    }
}

export default HomePage;