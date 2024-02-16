import React from 'react';

function TodoItem({ todo }) {
  
  const toggleTodo = () => {
    //
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'text-decoration-line-through' : ''}`}>
      <div>
        <input className="form-check-input me-2" type="checkbox" checked={todo.completed} onChange={toggleTodo} />
        {todo.text}
      </div>
      <button onClick={() => {}} className="btn btn-danger btn-sm">Удалить</button>
    </li>
  );
}

export default TodoItem;
