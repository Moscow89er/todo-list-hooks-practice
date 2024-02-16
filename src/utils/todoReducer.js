function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        //
      };
    case 'REMOVE_TODO':
      return {
        //
      };
    case 'SET_FILTER':
      return {
        //
      };
    case 'TOGGLE_TODO':
      return {
        //
      };
    default:
      return state;
  }
}

export default todoReducer;