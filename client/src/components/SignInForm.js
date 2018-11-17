import React, { Component } from 'react';
import axios from 'axios'
// axios is a libray that allows you to make AJAX calls it connects the frontend to the backend


class SignInForm extends Component {
    state = {
        username: '',
        // set as empty string
        password: ''
    }
    handleInput = (event) => {
        const { name, value } = event.target
        //name is being referenced to from the input name="....."
        this.setState({ [name]: value })
    }
    submitButton = (event) => {
        event.preventDefault()

        axios.post('/api/users', this.state).then(res => {


            console.log(res.data)

            this.props.history.push(`/users`)
            // (`/users/${res.data._id}`)
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitButton}>
                    <div>
                        <label htmlFor="username"> Username</label>
                        <input onChange={this.handleInput} value={this.state.username} type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleInput} value={this.state.password} type="text" name="password" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handleInput} value={this.state.email} type="email" name="email" />
                    </div>
                    <button type="submit">Create Account</button>

                </form>
            </div>
        );
    }
}

export default SignInForm;