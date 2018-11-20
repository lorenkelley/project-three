// import React, { Component } from 'react';
// import axios from 'axios'

// class UserProfile extends Component {

//     state ={
//         user:[]
//     }
//     handleDelete = userId => {
//         axios.delete(`/api/users/${userId}`).then(() => {
//           const deletedUser = [...this.state.users];
//           const filtered = deletedUser.filter(user => {
//             return user._id !== userId;
//           });
//           this.setState({ users: filtered });
//         });
//       };
   

//     render() {

        
          
//         return (
    
//             <div>
//                 <button onClick={() => this.handleDelete(user._id)}>
//              Delete this user
//            </button>
//             </div>
//         );
//     }
// }

// export default UserProfile;