import { createAction } from '@reduxjs/toolkit';
import { Todo } from './types';

export const addTodo = createAction<string>('ADD_TODO');
export const removeTodo = createAction<number>('REMOVE_TODO');
export const toggleTodo = createAction<number>('TOGGLE_TODO');
export const setFilter = createAction<string>('SET_FILTER');
export const setTodos = createAction<Todo[]>('SET_TODOS');
export const setTodoDeadline = createAction<{ id: number; deadline: Date }>('SET_TODO_DEADLINE');
