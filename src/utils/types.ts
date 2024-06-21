export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  deadline?: Date;
}

export interface TodoState {
  todos: Todo[];
  filter: string; // all, active, completed
}
