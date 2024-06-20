import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoState = {
  todos: Todo[];
  filter: string; // all, active, completed
};

const loadInitialState = (): TodoState => {
  const localData = localStorage.getItem('todos');
  if (localData) {
    try {
      const todos = JSON.parse(localData) as Todo[];
      return { todos, filter: 'all' };
    } catch (error) {
      console.error('Failed to parse todos from localStorage:', error);
    }
  }
  return { todos: [], filter: 'all' };
};

const initialState: TodoState = loadInitialState();

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, setFilter, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
