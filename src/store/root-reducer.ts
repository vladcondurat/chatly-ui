import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducer/auth-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
