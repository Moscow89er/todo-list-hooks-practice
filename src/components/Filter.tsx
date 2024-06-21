import React from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { setFilter } from '../utils/actions';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="btn-group mb-3" role="group" aria-label="Basic example">
      <button onClick={() => dispatch(setFilter('all'))} className="btn btn-secondary">Все</button>
      <button onClick={() => dispatch(setFilter('active'))} className="btn btn-secondary">Активные</button>
      <button onClick={() => dispatch(setFilter('completed'))} className="btn btn-secondary">Выполненные</button>
    </div>
  );
}

export default Filter;
