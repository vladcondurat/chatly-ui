import IMessageResponse from '../message/IMessageResponse';

interface IRoomResponse {
  id: string;
  imageUrl: string;
  roomName: string;
  isGroup: boolean;
  messages: IMessageResponse[];
}

export default IRoomResponse;
