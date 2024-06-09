import { toString } from 'lodash';
import IMessage from '../types/message/IMessage';
import IMessageContent from '../types/message/IMessageContent';
import { mapUserResponseToUser } from './user-mapper';
import IMessageResponse from '../types/message/IMessageResponse';

export const mapMessageResponseToMessage = (data: Partial<IMessageResponse>): IMessage => {
  const messageContent: IMessageContent = {
    textContent: data?.textContent,
    attachedImageUrl: data?.attachedImageUrl,
  };

  const message: IMessage = {
    id: toString(data?.id),
    content: messageContent,
    createdAt: data?.createdAt,
    user: mapUserResponseToUser(data?.user),
  };

  return message;
};
