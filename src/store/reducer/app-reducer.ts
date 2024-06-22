import { createReducer } from '@reduxjs/toolkit';
import { setAppIsModalOpenAction } from '../actions/app-sync-actions';
import IAppState from '../../types/app/IAppState';

const initialState: IAppState = {
  isAppModalOpen: false,
};

const appReducer = createReducer(initialState, builder =>
  builder.addCase(setAppIsModalOpenAction, (state, action) => ({
    ...state,
    isAppModalOpen: action.payload,
  }))
);

export default appReducer;
