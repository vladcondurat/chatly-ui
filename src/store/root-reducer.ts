import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducer/auth-reducer';
import userReducer from './reducer/user-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
