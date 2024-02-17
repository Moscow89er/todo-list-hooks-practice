import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);
  
  const toggleTodo = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'text-decoration-line-through' : ''}`}>
      <div>
        <input className="form-check-input me-2" type="checkbox" checked={todo.completed} onChange={toggleTodo} />
        {todo.text}
      </div>
      <button onClick={() => dispatch({ type: 'REMOVE_TODO',  payload: todo.id })} className="btn btn-danger btn-sm">Удалить</button>
    </li>
  );
}

export default TodoItem;
