import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteUser} from './actions';


class UserItem extends Component {
  render() {
    return (
      <li className="userItem">
        <p>{this.props.user}</p>
        <button 
          onClick={(event) => {
            console.log(event);
          }} 
          value={this.props.userIndex}>Delete
        </button>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: bindActionCreators(deleteUser, dispatch),
  }
};

export default connect(mapDispatchToProps)(UserItem);
