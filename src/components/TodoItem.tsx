import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, setTodoDeadline } from '../utils/actions';
import { Todo } from '../utils/types';
import { AppDispatch } from '../store/store';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [deadline, setDeadline] = useState<string>('');

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleSetDeadline = () => {
    if (deadline) {
      const deadlineDate = new Date(deadline);
      dispatch(setTodoDeadline({ id: todo.id, deadline: deadlineDate }));
    }
  };

  useEffect(() => {
    if (todo.deadline) {
      const interval = setInterval(() => {
        const now = new Date();
        const timeDifference = Math.max(0, (new Date(todo.deadline!).getTime() - now.getTime()) / 1000);
        setTimeLeft(timeDifference);

        if (timeDifference <= 0) {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [todo.deadline]);

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'text-decoration-line-through' : ''}`}>
      <div>
        <input className="form-check-input me-2" type="checkbox" checked={todo.completed} onChange={handleToggle} />
        {todo.text}
        {todo.deadline && (
          <small className="text-muted"> (Deadline: {new Date(todo.deadline).toLocaleTimeString()})</small>
        )}
        {timeLeft !== null && (
          <small className="text-danger"> (Time left: {Math.floor(timeLeft / 60)}:{Math.floor(timeLeft % 60).toString().padStart(2, '0')})</small>
        )}
      </div>
      <div>
        <input 
          type="datetime-local" 
          value={deadline} 
          onChange={(e) => setDeadline(e.target.value)} 
          className="form-control mr-2" 
        />
        <button onClick={handleSetDeadline} className="btn btn-warning btn-sm">Set Deadline</button>
        <button onClick={handleRemove} className="btn btn-danger btn-sm ms-2">Удалить</button>
      </div>
    </li>
  );
}

export default TodoItem;
