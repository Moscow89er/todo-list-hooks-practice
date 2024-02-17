import React, { useEffect, useReducer } from 'react';
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
  const [state, dispatch] = useReducer(todoReducer, initialState, (initialState) => {
    const localTodo = localStorage.getItem("todo");

    return localTodo ? JSON.parse(localTodo) : initialState;
  });

  console.log(state);

  useEffect(() => {
    //
  }, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center mb-4">Список дел</h1>
            <AddTodoForm onDispatch={dispatch}/>
            <Filter />
            <TodoList todos={state.todos}/>
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
