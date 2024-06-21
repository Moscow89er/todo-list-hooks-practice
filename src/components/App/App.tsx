import React, { useEffect } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../store/store';
import TodoList from '../TodoList';
import AddTodoForm from '../AddTodoForm';
import Filter from '../Filter';
import './App.css';

const App: React.FC = () => {
  const todos = useAppSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
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
  );
}

export default App;
