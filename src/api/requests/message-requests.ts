import { AxiosResponse } from 'axios';

import IMessageResponse from '../../types/responses/IMessageResponse';
import { getApi } from '../Api';

export const postMessageRequest = async (
  data: FormData,
  roomId: string
): Promise<Partial<IMessageResponse>> => {
  const response: AxiosResponse<Partial<IMessageResponse>> = await getApi().post(
    `/messages/${roomId}`,
    data
  );
  return response.data;
};

export const updateMessageRequest = async (
  data: FormData,
  messageId: string
): Promise<Partial<IMessageResponse>> => {
  const response: AxiosResponse<Partial<IMessageResponse>> = await getApi().put(
    `/messages/${messageId}`,
    data
  );
  return response.data;
};

export const deleteMessageRequest = async (messageId: string): Promise<void> => {
  await getApi().delete(`/messages/${messageId}`);
};
