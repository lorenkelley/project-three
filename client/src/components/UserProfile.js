import React, { Component } from 'react';
import axios from 'axios'



class UserProfile extends Component {

    state = {
        user: []
    }

    componentDidMount() {
            // make an api call to get one single user
             // On the server URL is '/api/users/:userId'
             const userId = this.props.match.params.userId
             axios.get(`/api/users/${userId}`).then(res => {
              console.log(res.data)
               this.setState({ user: res.data })
             })
          }
    render() {
        return (
            <div>
                {this.state.user.username}
               <h1>yhjjmmk</h1>
            </div>
        );
    }
}

export default UserProfile;