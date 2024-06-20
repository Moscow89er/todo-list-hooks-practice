import { ADD_TODO, REMOVE_TODO, SET_FILTER, TOGGLE_TODO, SET_TODOS } from './actionTypes';
import { Todo } from './types';

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const setFilter = (filter: string) => ({
  type: SET_FILTER,
  payload: filter,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const setTodos = (todos: Todo[]) => ({
  type: SET_TODOS,
  payload: todos,
});
