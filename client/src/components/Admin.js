import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import EditUser from './EditUser'
import styled from 'styled-components'
import DropDownn from './DropDownn'

const Backcolor = styled.div`
 border: solid 20px white;
 height: 900px;
 width: 80rem;
 background-image: linear-gradient( #ece9e6 , #ffffff) ;
 font-family: 'minaxihairline_text';
 font-size: 20px;
 text-align: center;
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
            <Backcolor>
            <div> 
           <div className='Jumbo'>
        </div>
        <div className='MiniJumbo'>
        <h1 className='Word'>STUDIO U</h1>
      <div className='down'>
        <DropDownn/>
        </div>
        </div>
                {this.state.users.map((user) => (
                    // .map
                    <div key={user._id}>
                   <Link to={`/users/${user._id}`}>{user.username}</Link> <br/>
                    {user.email}
                    <button className='btn btn-light' onClick={() => this.handleDelete(user._id)}>
                    Delete User
           </button>
            <EditUser {...this.props}/>
                    </div>
                  
                ))}

            </div>
            </Backcolor>
        );
    }
}

export default Admin;