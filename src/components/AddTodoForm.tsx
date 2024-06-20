import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../utils/actionTypes';
import { AppDispatch } from '../store/store';

const AddTodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: ADD_TODO, payload: text });
    setText('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline mb-4">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
        className="form-control mr-2"
        style={{ width: "74%" }}
      />
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  );
}

export default AddTodoForm;
