import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Admin extends Component {
    state ={
        // state is dynamtic information that can be changed 
        users: [],
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


    render() {
        return (
            <div>
                <h3>ALL USERS</h3>
                {this.state.users.map((user) => (
                    // .map
                    
                    <div key={user._id}>
                   <Link to={`/users/${user._id}`}>{user.username}</Link> 
                    {user.email}
                

                    </div>
                ))}

            </div>
        );
    }
}

export default Admin;