import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducer/auth-reducer';
import userReducer from './reducer/user-reducer';
import roomReducer from './reducer/room-reducer';
import messageReducer from './reducer/message-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  room: roomReducer,
  message: messageReducer,
});

export default rootReducer;
