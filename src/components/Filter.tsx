import React from 'react';
import { useDispatch } from 'react-redux';
import { SET_FILTER } from '../utils/actionTypes';
import { AppDispatch } from '../store/store';

const Filter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="btn-group mb-3" role="group" aria-label="Basic example">
      <button onClick={() => dispatch({ type: SET_FILTER, payload: 'all' })} className="btn btn-secondary">Все</button>
      <button onClick={() => dispatch({ type: SET_FILTER, payload: 'active' })} className="btn btn-secondary">Активные</button>
      <button onClick={() => dispatch({ type: SET_FILTER, payload: 'completed' })} className="btn btn-secondary">Выполненные</button>
    </div>
  );
}

export default Filter;
