import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../utils/todoReducer';

const store = configureStore({
  reducer: todoReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;