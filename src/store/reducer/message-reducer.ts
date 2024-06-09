import { createReducer } from '@reduxjs/toolkit';
import IMessageState from '../../types/message/IMessageState';
import { setLoadingAuthAction } from '../actions/auth-sync-actions';
import { setDataMessageAction, setIsMessageErrorAction } from '../actions/message-actions';

const initialState: IMessageState = {
  data: null,
  loading: false,
  isError: false,
};

const messageReducer = createReducer(initialState, builder => {
  builder
    .addCase(setDataMessageAction, (state, action) => ({ ...state, data: action.payload }))
    .addCase(setLoadingAuthAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setIsMessageErrorAction, (state, action) => ({ ...state, isError: action.payload }));
});

export default messageReducer;
