import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { state } = useContext(TodoContext);
  
  // логика фильтрации filtedTodo

  return (
    <ul className="list-group">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
