/*jshint esversion: 6 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import reducer from './reducer';
import UserList from './userList';
import AddUser from './addUser';
import './App.css';

const store = createStore(reducer);


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddUser />
        <UserList />
      </div>
    );
  }
}

export default App;