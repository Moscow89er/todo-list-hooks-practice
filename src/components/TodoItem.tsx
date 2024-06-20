import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, Todo } from '../store/todoSlice';
import { AppDispatch } from '../store/store';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();
  
  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'text-decoration-line-through' : ''}`}>
      <div>
        <input className="form-check-input me-2" type="checkbox" checked={todo.completed} onChange={handleToggle} />
        {todo.text}
      </div>
      <button onClick={handleRemove} className="btn btn-danger btn-sm">Удалить</button>
    </li>
  );
}

export default TodoItem;
