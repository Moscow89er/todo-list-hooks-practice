function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {id: Date.now(), text: action.payload, completed: false}]
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