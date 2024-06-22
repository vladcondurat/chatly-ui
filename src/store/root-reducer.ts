import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducer/auth-reducer';
import userReducer from './reducer/user-reducer';
import roomReducer from './reducer/room-reducer';
import messageReducer from './reducer/message-reducer';
import appReducer from './reducer/app-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
  room: roomReducer,
  message: messageReducer,
});

export default rootReducer;
