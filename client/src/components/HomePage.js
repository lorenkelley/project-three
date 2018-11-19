import React, { Component } from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import { Container, Row, Col } from 'reactstrap'
import U from '../images/U.jpg'
import styled from 'styled-components'

 const Backcolor = styled.div `
 border: solid;
 height: 700px;
 width: 90rem;
 
 background-image: linear-gradient( #FDFBFB, #EBEDEE) ;

`


class HomePage extends Component {
    render() {
        return (
            <Backcolor>
            <div>
                  <NavBar/>
                
     <Container>
        <Row>
          <Col>.col</Col>
        </Row>
      
        <img src={U} alt="logo"/>
        
        {/* <Carousel/> */}
        
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
      </Container>
 
            </div>
            </Backcolor>
        );
    }
}

export default HomePage;