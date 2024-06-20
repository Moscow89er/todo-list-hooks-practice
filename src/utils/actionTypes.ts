import { Todo } from "./types";
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_FILTER = 'SET_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_TODOS = 'SET_TODOS';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

interface SetTodosAction {
  type: typeof SET_TODOS;
  payload: Todo[];
}

export type TodoActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | SetFilterAction
  | ToggleTodoAction
  | SetTodosAction;
