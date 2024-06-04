import { AxiosResponse } from 'axios';
import { getApi } from '../Api';
import IMessage from '../../types/message/IMessage';
import IMessageContent from '../../types/message/IMessageContent';

export const postMessageRequest = async (data: Partial<IMessageContent>, roomId: string): Promise<IMessage> => {
  const response: AxiosResponse<IMessage> = await getApi().post(`/messages/${roomId}`, data);
  return response.data;
};

export const updateMessageRequest = async (data: Partial<IMessageContent>, messageId: string): Promise<IMessage> => {
  const response: AxiosResponse<IMessage> = await getApi().put(`/messages/${messageId}`, data);
  return response.data;
};

export const deleteMessageRequest = async (messageId: string): Promise<void> => {
  await getApi().delete(`/messages/${messageId}`);
};
