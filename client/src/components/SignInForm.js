import React, { Component } from 'react';

class SignInForm extends Component {
    state ={
        username: '',
        // set as empty string
        password: ''
    }

    submitButton = (event) => {
        event.preventDefault()

        axios.post('/users' , this.state).then(res =>{

            console.log(res.data)
            
            this.props.history.push(`/users/${res.data._id}`)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitButton}>
                <div>
                <label htmlFor="username"> Username</label>
                <input type="text" name="username"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password"/>
                </div>
                <button>Create Account</button>
                
                </form>
            </div>
        );
    }
}

export default SignInForm;