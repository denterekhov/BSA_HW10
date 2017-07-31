const initialState = {
  users: [],
  usersToDisplay: [],
  query: ''
};


export default function reducer(state = initialState, action) {
    switch (action.type) {

        case 'ADD_USER': {
          const allUsers = state.users.concat([{id: action.id, user: action.name}]);
            console.log(state.usersToDisplay);
            console.log(state.users);
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
        }

        default:
          return state;
    }
}




