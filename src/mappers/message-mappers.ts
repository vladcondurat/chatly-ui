import IMessage from '@app/types/message/IMessage';
import IMessageContent from '@app/types/message/IMessageContent';
import IMessageResponse from '@app/types/responses/IMessageResponse';
import { toString } from 'lodash';

import { mapUserResponseToUser } from './user-mapper';

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
