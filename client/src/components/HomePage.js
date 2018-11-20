import React, { Component } from 'react'
import NavBar from './NavBar'
// import Carousel from './Carousel'
import DropDownn from './DropDownn'
import styled from 'styled-components'
import '../Slider.css'

const Backcolor = styled.div`
 border: solid 20px white;
 height: 900px;
 width: 90rem;

//  background-image: linear-gradient( #8e9eab
// , #eef2f3) ;
 //background-image: linear-gradient(  #000000, #434343) ;
 background-image: linear-gradient( #dbe6f6, 
  #c5796d) ;

`


class HomePage extends Component {
  render() {
    return (
      <Backcolor>
        <div className='places'>

        </div>
        <div className='Jumbo'>
        <h1>hello</h1>
        </div>
        <div className='MiniJumbo'>
        <h1 className='Word'>STUDIO U</h1>
      <div className='down'>
        <DropDownn/>
        </div>
        </div>
       {/* <Carousel/> */}
      </Backcolor>
    );
  }
}

export default HomePage;