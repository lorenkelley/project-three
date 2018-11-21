import React, { Component } from 'react';
import axios from 'axios'
import DropDownn from './DropDownn'
import { Jumbotron, Container } from 'reactstrap'
import styled from 'styled-components'
import '../Slider.css'

const Backcolor = styled.div`
 border: solid 20px white;
 height: 500px;
 width: 90rem;
 background-image: linear-gradient( #ece9e6 , #ffffff) ;
`

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
               
                <Backcolor>
               
     <div className='Jumbo'>
     </div>
     <div className='MiniJumbo'>
     <h1 className='Word'>STUDIO U</h1>
   <div className='down'>
     <DropDownn/>
     </div>
     </div>
     
     
     <div>
     
     </div>
     <div>
      <Jumbotron className='trom2'>
      
          <h1 className="display-3">Hello {this.state.user.username}</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
       <div className='location1'>
           
       </div>
       <div className='location2'>
           
       </div>
       {/* <img src={"./images/locationlist.png"} height={300} width={400}></img> */}
      </Jumbotron>
    </div>
   </Backcolor>
            </div>
        );
    }
}

export default UserProfile;