import React, { useReducer, useEffect } from 'react';
import { TodoContext } from '../TodoContext';
import todoReducer from '../../utils/todoReducer';
import TodoList from '../TodoList';
import AddTodoForm from '../AddTodoForm';
import Filter from '../Filter';
import './App.css';

const initialState = {
  todos: [],
  filter: 'all', // all, active, completed
};

function App() {
  // жесткий useReducer

  useEffect(() => {
    //
  }, []);

  return (
    <TodoContext.Provider value={value}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center mb-4">Список дел</h1>
            <AddTodoForm />
            <Filter />
            <TodoList />
          </div>
        </div>
    </div>
  </TodoContext.Provider>
  );
}

export default App;
