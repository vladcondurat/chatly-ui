import {
  setDataMessageAction,
  setIsErrorMessageAction,
  setLoadingMessageAction,
} from '@app/store/actions/message-actions';
import IMessageState from '@app/types/message/IMessageState';
import { createReducer } from '@reduxjs/toolkit';

const initialState: IMessageState = {
  data: null,
  loading: false,
  isError: false,
};

const messageReducer = createReducer(initialState, builder => {
  builder
    .addCase(setDataMessageAction, (state, action) => ({ ...state, data: action.payload }))
    .addCase(setLoadingMessageAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setIsErrorMessageAction, (state, action) => ({ ...state, isError: action.payload }));
});

export default messageReducer;
