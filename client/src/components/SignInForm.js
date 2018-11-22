import React, { Component } from 'react';
import axios from 'axios'
// axios is a libray that allows you to make AJAX calls it connects the frontend to the backend
import {Container, Col, FormGroup, Label, Input, Button} from 'reactstrap'

import {Link} from 'react-router-dom'



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

            this.props.history.push(`/user`)
        })
    }
    render() {
        return (
            <Container>
                <form onSubmit={this.submitButton}> 
                <Col>
                <FormGroup>
                    <div>
                        <Label htmlFor="username"> Username</Label>
                        <Input onChange={this.handleInput} value={this.state.username} type="text" name="username" />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input onChange={this.handleInput} value={this.state.password} type="text" name="password" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input onChange={this.handleInput} value={this.state.email} type="email" name="email" />
                    </div>
                    <Link to='/admin'><Button type="submit">Create Account</Button></Link>

                </FormGroup>
                </Col>
                </form>
            </Container>
        );
    }
}

export default SignInForm;