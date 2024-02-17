import React, { useContext, useState } from 'react';
// import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';

function TodoList({todos}) {
  // const { state } = useContext(TodoContext);
  
  // логика фильтрации filtedTodo

  // const [filteredTodos, setFilteredTodos] = useState([{id: 1, text: "test", completed: true}, {id: 2, text: "test", completed: false}]);

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
