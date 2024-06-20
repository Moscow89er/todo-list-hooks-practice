import { TodoState } from './types';
import { TodoActionTypes, ADD_TODO, REMOVE_TODO, SET_FILTER, TOGGLE_TODO, SET_TODOS } from './actionTypes';

const loadInitialState = (): TodoState => {
  const localData = localStorage.getItem('todos');
  if (localData) {
    try {
      const parsedData = JSON.parse(localData);
      if (Array.isArray(parsedData)) {
        return {
          todos: parsedData,
          filter: 'all',
        };
      }
    } catch (error) {
      console.error('Failed to parse todos from localStorage:', error);
    }
  }
  return {
    todos: [],
    filter: 'all',
  };
};

const initialState: TodoState = loadInitialState();

function todoReducer(state = initialState, action: TodoActionTypes): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case SET_TODOS:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          todos: action.payload,
        };
      } else {
        console.error('Expected payload to be an array, but got:', action.payload);
        return state;
      }
    default:
      return state;
  }
}

export default todoReducer;
