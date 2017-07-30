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
      console.log(action);
    }


    case 'FILTER_USERS': {
      console.log(action);
    }

    default:
      return state;
  }
}