import { getApi } from '@app/api/Api';
import IMessageResponse from '@app/types/responses/IMessageResponse';
import { AxiosResponse } from 'axios';

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
