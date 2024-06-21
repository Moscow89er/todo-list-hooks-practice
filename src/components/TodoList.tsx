import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import TodoItem from './TodoItem';
import { Todo } from '../utils/types';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);

  const filteredTodos = todos.filter((todo: Todo) => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <ul className="list-group">
      {filteredTodos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
