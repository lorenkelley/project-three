import React, { Component } v from 'react';

class Edit extends Component {
    render() {
        onDelete() {
            let userId = this.state.user._id;
            axios
              .delete(`http://localhost:3000/api/users/${userId}`)
              .then(response => {
                this.props.history.push("/profiles");
              })
              .catch(err => console.log(err));
          }
        return (
            <div>
          <button onClick={this.onDelete.bind(this)}>Delete User</button>

            </div>
        );
    }
}

export default Edit;