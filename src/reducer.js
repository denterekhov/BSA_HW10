const initialState = {
  users: [],
  usersToDisplay: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_USER': {
      const allUsers = state.users.concat([{id: action.id, user: action.name}]);
      return {
        users: allUsers,
        usersToDisplay:allUsers
      }
    }

    case 'DELETE_USER': {
      let index = action.id;
      const allUsersRemained = state.users.filter((userObj) => {
        return userObj.id !== index;
      });    
      const filteredUsersRemained = state.usersToDisplay.filter((userObj) => {
        return userObj.id !== index;
      });
      return {
        users: allUsersRemained,
        usersToDisplay:filteredUsersRemained
      }
    }

    case 'FILTER_USERS': {
      const displayUsers = state.users;
      const value = action.value;
      if(state.users.length > 0) {
        const usersFiltered = state.users.filter((userObj) => {
          return userObj.user.indexOf(value) !== -1;
        });
        return {
          users:state.users,
          usersToDisplay:usersFiltered
        }
      }
    }

    default:
      return state;
  }
}
