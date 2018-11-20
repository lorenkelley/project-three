import React, { Component } from 'react'
import Carousel from './Carousel'
import DropDownn from './DropDownn'
import styled from 'styled-components'
import '../Slider.css'

const Backcolor = styled.div`
 border: solid 20px white;
 height: 500px;
 width: 90rem;
 background-image: linear-gradient( #ece9e6 , #ffffff) ;
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