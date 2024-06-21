import { TodoState, Todo } from './types';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { addTodo, removeTodo, toggleTodo, setFilter, setTodos, setTodoDeadline } from './actions';

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

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action: PayloadAction<string>) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
    })
    .addCase(removeTodo, (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    })
    .addCase(toggleTodo, (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    })
    .addCase(setFilter, (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    })
    .addCase(setTodos, (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    })
    .addCase(setTodoDeadline, (state, action: PayloadAction<{ id: number; deadline: Date }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.deadline = action.payload.deadline;
      }
    })
    // .addCase(fetchTodos.pending, (state) => {
    //   console.log('Fetching todos...');
    // })
    // .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
    //   state.todos = action.payload;
    //   console.log('Fetched todos successfully');
    // })
    // .addCase(fetchTodos.rejected, (state, action) => {
    //   console.error('Failed to fetch todos:', action.error.message);
    // });
});

export default todoReducer;
