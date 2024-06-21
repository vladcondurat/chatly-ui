import { createAsyncThunk } from '@reduxjs/toolkit';
import { MESSAGE__DELETE, MESSAGE__POST, MESSAGE__SET_DATA, MESSAGE__SET_IS_ERROR, MESSAGE__SET_LOADING, MESSAGE__UPDATE } from '../constants';
import { RootState } from '..';
import { createAction } from '@reduxjs/toolkit';
import IMessageContent from '../../types/message/IMessageContent';
import { mapMessageResponseToMessage } from '../../mappers/message-mappers';
import { deleteMessageRequest, postMessageRequest, updateMessageRequest } from '../../api/requests/message-requests';
import IMessage from '../../types/message/IMessage';
import ApiException from '../../types/api/ApiException';
import alertService from '../../services/alert-service';

export const setDataMessageAction = createAction<IMessage>(MESSAGE__SET_DATA);
export const setLoadingMessageAction = createAction<boolean>(MESSAGE__SET_LOADING);
export const setIsErrorMessageAction = createAction<boolean>(MESSAGE__SET_IS_ERROR);

interface IPostMessageParams {
  messageContent: Partial<IMessageContent>;
  roomId: string;
}

interface IUpdateMessageParams {
  messageContent: Partial<IMessageContent>;
  messageId: string;
}

export const postMessageAsyncAction = createAsyncThunk<void, IPostMessageParams, { state: RootState }>(MESSAGE__POST, async ({ messageContent, roomId }, thunkApi) => {
  thunkApi.dispatch(setLoadingMessageAction(true));
  thunkApi.dispatch(setDataMessageAction(mapMessageResponseToMessage(messageContent)));
  try {
    const messageResponse: IMessage = await postMessageRequest(messageContent, roomId);
    const message = mapMessageResponseToMessage(messageResponse);
    thunkApi.dispatch(setDataMessageAction(message));
  } catch (err) {
    if (err instanceof ApiException) {
      thunkApi.dispatch(setIsErrorMessageAction(true));
    }
  } finally {
    thunkApi.dispatch(setLoadingMessageAction(false));
  }
});

export const updateMessageAsyncAction = createAsyncThunk<void, IUpdateMessageParams, { state: RootState }>(MESSAGE__UPDATE, async ({ messageContent, messageId }, thunkApi) => {
  thunkApi.dispatch(setLoadingMessageAction(true));
  thunkApi.dispatch(setDataMessageAction(mapMessageResponseToMessage(messageContent)));
  try {
    const messageResponse: IMessage = await updateMessageRequest(messageContent, messageId);
    const message = mapMessageResponseToMessage(messageResponse);
    thunkApi.dispatch(setDataMessageAction(message));
  } catch (err) {
    if (err instanceof ApiException) {
      thunkApi.dispatch(setIsErrorMessageAction(true));
    }
  } finally {
    thunkApi.dispatch(setLoadingMessageAction(false));
  }
});

export const deleteMessageAsyncAction = createAsyncThunk<void, string, { state: RootState }>(MESSAGE__DELETE, async (messageId, thunkApi) => {
  thunkApi.dispatch(setLoadingMessageAction(true));
  try {
    await deleteMessageRequest(messageId);
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: err.data.detail });
    }
  } finally {
    thunkApi.dispatch(setLoadingMessageAction(false));
  }
});
