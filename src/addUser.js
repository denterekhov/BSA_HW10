import React from 'react';
import {connect} from 'react-redux';
import {addUser,onFilter} from './actions';
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
          onChange={(event) => {
            const userInput = document.getElementById('user_input');
            dispatch(onFilter(userInput.value)); 
          }}
          type="text" autoFocus />
        <button type="submit">Add</button>
    </form>
  )
}

AddUser = connect()(AddUser);

export default AddUser;
