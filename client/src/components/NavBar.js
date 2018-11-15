import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// importing Link to have links on nav bar react does not use a tags
import styled from 'styled-components'

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to=''>Sign In</Link>
            </div>
        );
    }
}

export default NavBar;