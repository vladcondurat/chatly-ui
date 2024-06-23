import { setAppIsModalOpenAction } from '@app/store/actions/app-sync-actions';
import IAppState from '@app/types/app/IAppState';
import { createReducer } from '@reduxjs/toolkit';

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
