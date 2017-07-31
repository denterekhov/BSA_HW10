import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteUser} from './actions';
import {bindActionCreators} from 'redux';
import UserItem from './userItem';


class UserList extends Component {
  render() {
    const userList = this.props.usersToDisplay.map(obj => 
      <UserItem key={obj.id} user={obj.user} id={obj.id} deleteUser={this.props.deleteUser} />,
    )
    return (
      <ol className="userList">
        {userList}
      </ol>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    usersToDisplay: state.usersToDisplay
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: bindActionCreators(deleteUser, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
