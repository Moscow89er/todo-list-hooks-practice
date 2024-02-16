import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { state } = useContext(TodoContext);
  
  const filteredTodos = state.todos.filter(todo => {
    switch (state.filter) {
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
