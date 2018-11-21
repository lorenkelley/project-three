import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../Slider.css'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const DropChange = styled.div`
background-color: black;
`


export default class DropDownn extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
  
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle  caret>
        </DropdownToggle>
        

        <DropdownMenu>
        <Link to='/'> <DropdownItem> HOME</DropdownItem> </Link> 
        <Link to='/sign-in'><DropdownItem> SIGN IN</DropdownItem></Link> 
        <Link to='/user'><DropdownItem>ADMIN</DropdownItem></Link>  
        <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
       

      </Dropdown>
 
    );
  }
}

