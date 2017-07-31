import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteUser} from './actions';
import {bindActionCreators} from 'redux';
import UserItem from './userItem';


class UserList extends Component {
z
  render() {
    const userList = this.props.users.map(obj => 
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
    users: state.users
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: bindActionCreators(deleteUser, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
