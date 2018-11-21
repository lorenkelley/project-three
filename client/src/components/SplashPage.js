import React, { Component } from 'react';
import styled from 'styled-components'
import JumboTron from './JumboTron'

const Backcolor = styled.div`

 border: solid 20px white;
 height: 500px;
 width: 90rem;
 background:linear-gradient(0deg, 
    #dae2f8c0
    , #d6a4a4d5)

`
const Studio = styled.h1`
    font-size: 150px;
`

class SplashPage extends Component {
    render() {
        return (
        <Backcolor>
            <div className='heading'>
         <div className='homeText'>
         <Studio>
         STUDIO   U
          </Studio>
         </div>  
         </div>
         <JumboTron/>
         </Backcolor>
        );
    }
}

export default SplashPage;