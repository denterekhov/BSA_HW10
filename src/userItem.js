import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    console.log(this.props);
    return (
      <li className="userItem">
        <p>{this.props.user}</p>
        <button onClick={() => this.props.deleteUser(this.props.id)} value={this.props.id}>Delete</button>
      </li>
    )
  }
}

export default UserItem