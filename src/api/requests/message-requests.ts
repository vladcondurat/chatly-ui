import { AxiosResponse } from 'axios';
import { getApi } from '../Api';
import IMessage from '../../types/message/IMessage';
import IMessageRequest from '../../types/message/IMessageRequest';

export const postMessageRequest = async (data: IMessageRequest, roomId: string): Promise<IMessage> => {
  const response: AxiosResponse<IMessage> = await getApi().post(`/messages/${roomId}`, data);
  return response.data;
};

export const updateMessageRequest = async (data: IMessageRequest, messageId: string): Promise<IMessage> => {
  const response: AxiosResponse<IMessage> = await getApi().put(`/messages/${messageId}`, data);
  return response.data;
};

export const deleteMessageRequest = async (messageId: string): Promise<void> => {
  await getApi().delete(`/messages/${messageId}`);
};
