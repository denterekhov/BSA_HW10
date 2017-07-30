export function addUser(id,name) {
  return {
    type: 'ADD_USER',
    id,
    name
  }
}

export function deleteUser(id) {
  return {
    type: 'DELETE_USER', 
    id
  }
}

export function onFilter(query) {
    return {
      type: 'FILTER_USERS', 
      query
    }
}
