import React, { Component } from "react";
import WOW from "wowjs";
class Skills extends Component {
  
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div>
       <h1>Stuff to move</h1>
      </div>
    )
   }
}
export default Skills;
