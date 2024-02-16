import React, { useState, useContext, useRef } from 'react';
import { TodoContext } from './TodoContext';

function AddTodoForm() {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'ADD_TODO', payload: text });
    setText('');
    inputRef.current.focus();
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
      />
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  );
}

export default AddTodoForm;
