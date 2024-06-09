import { createReducer } from '@reduxjs/toolkit';
import IUserState from '../../types/user/IUserState';
import { setDataUserAction, setLoadingUserAction } from '../actions/user-actions';

const initialState: IUserState = {
  details: null,
  loading: false,
};

const userReducer = createReducer(initialState, builder =>
  builder
    .addCase(setLoadingUserAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setDataUserAction, (state, action) => ({ ...state, details: action.payload })),
);

export default userReducer;
