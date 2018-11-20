import React, { Component } from 'react';
import axios from 'axios'

class UserProfile extends Component {

    state ={
        // user:{},
        users:[]
    }

    getAllUsers = () => {
        axios.get('/api/users').then((res) => {
            this.setState({users: res.data})
        })
    }

    handleDelete = userId => {
        axios.delete(`/api/users/${userId}`).then(() => {
          const deletedUsers = [...this.state.users];
          const filtered = deletedUsers.filter(user => {
            return user._id !== userId;
          });
          this.setState({ users: filtered });
        });
      };
   
  
    render() {

        
          
        return (
    
            <div>
                <button onClick={() => this.handleDelete(this.state.user._id)}>
                {/* reference state(the user) */}
             Delete this user
           </button>
            </div>
        );
    }
}

export default UserProfile;