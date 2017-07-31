/*jshint esversion: 6 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import UserList from './userList';
import AddUser from './addUser';
import './App.css';

const store = createStore(reducer);


class App extends Component {
/*  constructor() {
    super();
    this.state = {
      users: [],
      usersToDisplay: []
    };
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.handleFilterUser = this.handleFilterUser.bind(this);
  }
*/

/*  handleAddUser([{id, user}]) {
    const allUsers = this.state.users.concat([{id, user}]);
    this.setState({
      users:allUsers,
      usersToDisplay:allUsers
    });

  }*/

/*  handleDeleteUser(e) {
    let index = e.target.value;
    const allUsersRemained = this.state.users.filter((userObj) => {
      return userObj.id !== index;
    });    
    const filteredUsersRemained = this.state.usersToDisplay.filter((userObj) => {
      return userObj.id !== index;
    });
    this.setState({
      users:allUsersRemained,
      usersToDisplay:filteredUsersRemained
    });
  }


  handleFilterUser(value) {
    const displayUsers = this.state.users;
    if(displayUsers.length > 0) {
      const usersFiltered = this.state.users.filter((userObj) => {
        return userObj.user.indexOf(value) !== -1;
      });
      this.setState({
        usersToDisplay:usersFiltered
      });
      
    }
  }*/


  render() {
    return (
      <div className="App">
        <AddUser />
        <UserList />
      </div>
    );
  }
        // <AddUser onSubmit={this.handleAddUser} onFilter={this.handleFilterUser}/>
        // <UserList users={this.state.usersToDisplay} deleteUser={this.handleDeleteUser} />
}

export default App;

/*ReactDOM.render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById('root')
)*/