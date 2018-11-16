import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// importing Link to have links on nav bar react does not use a tags
import styled from 'styled-components'

const NavBarStyles = styled.div `

background: black;

`

class NavBar extends Component {
    render() {
        return (
            <NavBarStyles>
            <div>
                <Link to='/'>Home</Link>
                <Link to=''>Sign In</Link>
                <Link to='/admin'>Admin</Link>
            </div>
            </NavBarStyles>
        );
    }
}

export default NavBar;