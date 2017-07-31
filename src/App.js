import React, { Component } from 'react';
import UserList from './userList';
import AddUser from './addUser';
import './App.css';

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
