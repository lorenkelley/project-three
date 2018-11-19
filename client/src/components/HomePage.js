import React, { Component } from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import { Jumbotron, Container } from 'reactstrap';

import styled from 'styled-components'
import '../Slider.css'

 const Backcolor = styled.div `
 border: solid 20px white;
 height: 700px;
 width: 90rem;
 
 background-image: linear-gradient( #bdc3c7, #2c3e50) ;
`
const Jumbo = styled.Jumbotron`
background-image: ./images/U.jpg

`

class HomePage extends Component {
    render() {
        return (
            <Backcolor>
            
            <div>
      <Jumbotron fluid className='Jumbo'>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          
        </Container>
      </Jumbotron>
    </div>

        
            </Backcolor>
        );
    }
}

export default HomePage;