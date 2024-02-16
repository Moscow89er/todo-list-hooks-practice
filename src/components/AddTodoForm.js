import React from 'react';

function AddTodoForm() {

  const handleSubmit = (e) => {
    //
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline mb-4">
      <input
        //
      />
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  );
}

export default AddTodoForm;
