import React, { Component } from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import { Jumbotron, Container } from 'reactstrap';

import styled from 'styled-components'
import '../Slider.css'

const Backcolor = styled.div`
 border: solid 20px white;
 height: 900px;
 width: 90rem;
  //  background-image: linear-gradient( #abbaab, #ffffff) ;
   background-image: linear-gradient(  #000000, #434343) ;
  
`



class HomePage extends Component {
  render() {
    return (
      <Backcolor>
        
        <div className='Jumbo'>
        </div>
        <div className='MiniJumbo'>
        <h1>STUDIO U</h1>
        </div>
       <Carousel/>
      </Backcolor>
    );
  }
}

export default HomePage;