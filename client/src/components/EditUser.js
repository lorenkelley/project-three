import React, { Component } from 'react';
import axios from "axios";

class EditUser extends Component {
    state = {
        user: {}
        
      };

    
    componentDidMount(){
      axios.get('/api/users').then((res) => {
        this.setState({user: res.data})
        console.log(res.data)
    })
    }
    // componentDidMount() {
    //     // make an api call to get one single user
    //     // On the server URL is '/api/users/:userId'
    //     const userId = this.props.match.params.userId
    //     axios.get(`/api/users/${userId}`).then(res => {
    //       console.log(res.data)
    //       this.setState({ user: res.data })
    //     })
    //   }
    handleChange = event => {
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        const updatedNewUser = { ...this.state.user };
        // event target name wil be either 'username or password'
        updatedNewUser[event.target.name] = event.target.value;
        this.setState({ user: updatedNewUser });
      };
      handleSubmit = userId => {
          const updatedNewUser = this.state.user
          // const userId = this.props.match.params.userId
        // make post request to our api to create new user
        axios.patch(`/api/users`, updatedNewUser)
          .then(res => {
            this.props.history.push(`/admin`)
          })
          .catch(err => {
            console.log(err);
          });
        // when we get that data back, we need to navigate to the new users page
      };
    render() {
        return (
            
            <div>
                <h1>Edit Your Profile Login</h1>
                <form onSubmit={() => this.handleSubmit(this.state.user._id)}>
          <div>
            <label htmlFor="username">User Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.username}
              type="text"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.password}
              type="password"
              name="password"
            />
                    </div>
                    
          <button type="submit">Edit User</button>
        </form>
            </div>
        );
    }
}

export default EditUser;