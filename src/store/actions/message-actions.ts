import { createAsyncThunk } from '@reduxjs/toolkit';
import { MESSAGE__POST, MESSAGE__SET_DATA, MESSAGE__SET_IS_ERROR, MESSAGE__SET_LOADING } from '../constants';
import { RootState } from '..';
import { createAction } from '@reduxjs/toolkit';
import IMessageContent from '../../types/message/IMessageContent';
import { mapMessageResponseToMessage } from '../../mappers/message-mappers';
import { postMessageRequest } from '../../api/requests/message-requests';
import IMessage from '../../types/message/IMessage';
import ApiException from '../../types/api/ApiException';

export const setDataMessageAction = createAction<IMessage>(MESSAGE__SET_DATA);
export const setLoadingMessageAction = createAction<boolean>(MESSAGE__SET_LOADING);
export const setIsMessageErrorAction = createAction<boolean>(MESSAGE__SET_IS_ERROR);

interface PostMessageParams {
  messageContent: Partial<IMessageContent>;
  roomId: string;
}

export const postMessageAsyncAction = createAsyncThunk<void, PostMessageParams, { state: RootState }>(MESSAGE__POST, async ({ messageContent, roomId }, thunkApi) => {
  thunkApi.dispatch(setLoadingMessageAction(true));
  try {
    const messageResponse: IMessage = await postMessageRequest(messageContent, roomId);
    const message = mapMessageResponseToMessage(messageResponse);
    thunkApi.dispatch(setDataMessageAction(message));
  } catch (err) {
    if (err instanceof ApiException) {
      thunkApi.dispatch(setIsMessageErrorAction(true));
    }
  } finally {
    thunkApi.dispatch(setLoadingMessageAction(false));
  }
});
