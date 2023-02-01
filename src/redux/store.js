import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import usersReducer from './slices/usersSlice';

const reducer = combineReducers({
  Users: usersReducer,
});
const store = configureStore({
  reducer,
});

export default store;
