import React, { Component } from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import DropDownn from './DropDownn'
import styled from 'styled-components'
import '../Slider.css'

const Backcolor = styled.div`
 border: solid 20px white;
 height: 900px;
 width: 90rem;
//  background-image: linear-gradient( #abbaab, #ffffff) ;
  //  background-image: linear-gradient(  #000000, #434343) ;
  background-image: linear-gradient( 
    #ada996 , #f2f2f2, #dbdbdb, #eaeaea);  

`


class HomePage extends Component {
  render() {
    return (
      <Backcolor>
        
        <div className='Jumbo'>
        
        </div>
        <div className='MiniJumbo'>
        <h1 className='Word'>STUDIO U</h1>
      <div className='down'>
        <DropDownn/>
        </div>
        </div>
       <Carousel/>
      </Backcolor>
    );
  }
}

export default HomePage;