import { createReducer } from '@reduxjs/toolkit';
import IUserState from '../../types/user/IUserState';
import usersAdapter from '../adaptors/users-adapter';
import {
  setAllDataUserAction,
  setDataInsideRoomUserAction,
  setDataOutsideRoomUserAction,
  setDataUserAction,
  setLoadingUserAction,
} from '../actions/user-sync-actions';

const initialState: IUserState = {
  users: [],
  details: null,
  loading: false,
};

const userReducer = createReducer(
  usersAdapter.getInitialState(initialState),
  builder =>
    builder
      .addCase(setAllDataUserAction, usersAdapter.setAll)
      .addCase(setDataInsideRoomUserAction, usersAdapter.setAll)
      .addCase(setDataOutsideRoomUserAction, usersAdapter.setAll)
      .addCase(setLoadingUserAction, (state, action) => ({
        ...state,
        loading: action.payload,
      }))
      .addCase(setDataUserAction, (state, action) => ({
        ...state,
        details: action.payload,
      }))
);

export default userReducer;
