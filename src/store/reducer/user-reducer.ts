import {
  setAllDataUserAction,
  setDataInsideRoomUserAction,
  setDataOutsideRoomUserAction,
  setDataUserAction,
  setLoadingUserAction,
} from '@app/store/actions/user-sync-actions';
import usersAdapter from '@app/store/adaptors/users-adapter';
import IUserState from '@app/types/user/IUserState';
import { createReducer } from '@reduxjs/toolkit';

const initialState: IUserState = {
  users: [],
  details: null,
  loading: false,
};

const userReducer = createReducer(usersAdapter.getInitialState(initialState), builder =>
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
