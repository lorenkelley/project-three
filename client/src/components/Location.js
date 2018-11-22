import React, { Component } from 'react';
import styled from 'styled-components'


const Backcolor = styled.div`
 border: solid 20px white;
 height: 900px;
 width: 90rem;
 background:linear-gradient(0deg,#dae2f8c0
    , #d6a4a4d5);

background-size: fill;
`



class Location extends Component {
    render() {
        return (
            <Backcolor>
                <h1> Atlanta </h1>
            </Backcolor>
        );
    }
}

export default Location;