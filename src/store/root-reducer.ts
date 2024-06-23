import { combineReducers } from '@reduxjs/toolkit';

import appReducer from './reducer/app-reducer';
import authReducer from './reducer/auth-reducer';
import messageReducer from './reducer/message-reducer';
import roomReducer from './reducer/room-reducer';
import userReducer from './reducer/user-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
  room: roomReducer,
  message: messageReducer,
});

export default rootReducer;
