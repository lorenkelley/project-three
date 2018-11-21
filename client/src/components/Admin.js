import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import EditUser from './EditUser'
import {Container, Col, FormGroup, Label, Input, Button} from 'reactstrap'
import styled from 'styled-components'


const Backcolor = styled.div`
 border: solid 20px white;
 height: 900px;
 width: 90rem;
 background:linear-gradient(0deg,#dae2f8c0
    , #d6a4a4d5);

background-size: fill;
`



class Admin extends Component {
    state ={
        // state is dynamtic information that can be changed 
        users: []
        // set empty array so that it can be filled with data
    }

    getAllUsers = () => {
        axios.get('/api/users').then((res) => {
            this.setState({users: res.data})
        })
    }
    
    componentDidMount(){
        this.getAllUsers()
    }
    
    handleDelete = userId => {
        axios.delete(`/api/users/${userId}`).then(() => {
          const deletedUsers = [...this.state.users]
          const filtered = deletedUsers.filter(user => {
            return user._id !== userId;
          })
          this.setState({ users: filtered })
        })
      }
      handleChange = event => {
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        const updatedNewUser = { ...this.state.newUser };
        // event target name wil be either 'username or password'
        updatedNewUser[event.target.name] = event.target.value;
        this.setState({ newUser: updatedNewUser });
      }

    render() {
        return (
            <div> 
                <Backcolor>
                {this.state.users.map((user) => (
                    // .map
                    
                    <div key={user._id}>
                   <Link to={`/users/${user._id}`}>{user.username}</Link> <br/>
                    {user.email}
                
                    <button onClick={() => this.handleDelete(user._id)}>
                    Delete User
           </button>
            <EditUser {...this.props}/>
                    </div>
                ))}
</Backcolor>
            </div>
        );
    }
}

export default Admin;