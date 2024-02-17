import React, { useRef } from 'react';

function AddTodoForm({ onDispatch }) {
  const inputTodo = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onDispatch({ type: 'ADD_TODO', payload: inputTodo.current.value });
    console.log(inputTodo.current.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline mb-4">
      <input
        ref={inputTodo}
      />
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  );
}

export default AddTodoForm;
