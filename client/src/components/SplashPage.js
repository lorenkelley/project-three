import React, { Component } from 'react';
import styled from 'styled-components'


const Backcolor = styled.div`
 border: solid 20px white;
 height: 900px;
 width: 90rem;
 background:linear-gradient(0deg,#dae2f8c0
    , #d6a4a4d5),url('https://66.media.tumblr.com/615fb30dd18a58231fb67fde7717216d/tumblr_phi4thgHFP1w3y4ilo1_640.gif');

background-size: fill;
`


class SplashPage extends Component {
    render() {
        return (
        <Backcolor>
            <div className='heading'>
         <div className='homeText'>
          <h1>STUDIO U</h1>
         
         </div>  
         {/* <h2 className='homeTextH1'> The Perfect Tool For Creatives</h2> */}
         </div>
         </Backcolor>
        );
    }
}

export default SplashPage;