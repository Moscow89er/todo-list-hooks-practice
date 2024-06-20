import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/todoSlice';
import { AppDispatch } from '../store/store';

const Filter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="btn-group mb-3" role="group" aria-label="Basic example">
      <button onClick={() => dispatch(setFilter('all'))} className="btn btn-secondary">Все</button>
      <button onClick={() => dispatch(setFilter('active'))} className="btn btn-secondary">Активные</button>
      <button onClick={() => dispatch(setFilter('completed'))} className="btn btn-secondary">Выполненные</button>
    </div>
  );
}

export default Filter;
