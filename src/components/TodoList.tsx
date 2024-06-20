import React from 'react';
import { useAppSelector } from '../hooks/hooks';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useAppSelector(state => state.todos.todos);
  const filter = useAppSelector(state => state.todos.filter);

  const filteredTodos = todos.filter(todo => {
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
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
