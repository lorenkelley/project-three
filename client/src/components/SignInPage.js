import React, { Component } from 'react';
// import axios from 'axios'
import SignInForm from './SignInForm'

class SignInPage extends Component {

    // state = {
    //     // components can store info about their current status this is the state,
      
    // }
    render() {
        return (
            <div>
             
            <SignInForm {...this.props}/>
                        {/* the spread operator is cloning  */}
            </div>
        );
    }
}

export default SignInPage;