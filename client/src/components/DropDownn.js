import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../Slider.css'
import {Link} from 'react-router-dom'

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
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
        <Link to='/'> <DropdownItem> HOME</DropdownItem> </Link> 
        <DropdownItem> SIGN IN</DropdownItem>
        <DropdownItem>ADMIN</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

