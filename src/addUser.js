import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser, onFilter} from './actions';
let shortid = require('shortid');


class AddUser extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  onSubmit(e) {
    const userInput = document.getElementById('user_input');
    const id = shortid.generate();
    const user = userInput.value;
    console.log(user);
    if(user) {
      this.props.addUser(id,user);
      userInput.value = '';
    }
    e.preventDefault();
  }

  onChange() {
    const userInput = document.getElementById('user_input');
    if(userInput.value) {

      this.props.onFilter(userInput.value);
    }
  }

  render() {
    return (
      <form className="userForm" onSubmit={this.onSubmit}>
        <input id='user_input'
          onChange={ this.onChange }
          type="text" autoFocus />
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    name:state.users.name,
    id:state.users.id
  }
};


const mapDispatchToProps = (dispatch) => {
  onFilter: bindActionCreators(onFilter, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);