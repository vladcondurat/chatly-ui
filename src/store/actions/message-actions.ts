import {
  deleteMessageRequest,
  postMessageRequest,
  updateMessageRequest,
} from '@app/api/requests/message-requests';
import { mapMessageResponseToMessage } from '@app/mappers/message-mappers';
import alertService from '@app/services/alert-service';
import { RootState } from '@app/store';
import {
  MESSAGE__DELETE,
  MESSAGE__POST,
  MESSAGE__SET_DATA,
  MESSAGE__SET_IS_ERROR,
  MESSAGE__SET_LOADING,
  MESSAGE__UPDATE,
} from '@app/store/constants';
import ApiException from '@app/types/api/ApiException';
import IMessage from '@app/types/message/IMessage';
import IPostMessageRequest from '@app/types/requests/IPostMessageRequest';
import IUpdateMessageRequest from '@app/types/requests/IUpdateMessageRequest';
import IMessageResponse from '@app/types/responses/IMessageResponse';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const setDataMessageAction = createAction<IMessage>(MESSAGE__SET_DATA);
export const setLoadingMessageAction = createAction<boolean>(MESSAGE__SET_LOADING);
export const setIsErrorMessageAction = createAction<boolean>(MESSAGE__SET_IS_ERROR);

export const postMessageAsyncAction = createAsyncThunk<
  void,
  IPostMessageRequest,
  { state: RootState }
>(MESSAGE__POST, async ({ messageContent, roomId }, thunkApi) => {
  thunkApi.dispatch(setLoadingMessageAction(true));
  // thunkApi.dispatch(setDataMessageAction(mapMessageResponseToMessage(messageContent)));
  try {
    const messageResponse: Partial<IMessageResponse> = await postMessageRequest(
      messageContent,
      roomId
    );
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

export const updateMessageAsyncAction = createAsyncThunk<
  void,
  IUpdateMessageRequest,
  { state: RootState }
>(MESSAGE__UPDATE, async ({ messageContent, messageId }, thunkApi) => {
  thunkApi.dispatch(setLoadingMessageAction(true));
  // thunkApi.dispatch(setDataMessageAction(mapMessageResponseToMessage(messageContent)));
  try {
    const messageResponse: Partial<IMessageResponse> = await updateMessageRequest(
      messageContent,
      messageId
    );
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

export const deleteMessageAsyncAction = createAsyncThunk<void, string, { state: RootState }>(
  MESSAGE__DELETE,
  async (messageId, thunkApi) => {
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
  }
);
