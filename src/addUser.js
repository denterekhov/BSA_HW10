import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser} from './actions';
let shortid = require('shortid');


let AddUser = ({ dispatch }) => {
  return (
    <form 
      className="userForm" 
      onSubmit={(event) => {
        const userInput = document.getElementById('user_input');
        const user = userInput.value;
        userInput.value = '';
        dispatch(addUser({
          id: shortid.generate(),
          name: user
      }));
        event.preventDefault();
      }}>
        <input id='user_input'
          onChange={ this.onChange }
          type="text" autoFocus />
        <button type="submit">Add</button>
    </form>
  )
}



AddUser = connect()(AddUser);

export default AddUser;
