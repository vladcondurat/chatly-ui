import IMessageResponse from './IMessageResponse';

interface IRoomResponse {
  id: string;
  imageUrl: string;
  roomName: string;
  isGroup: boolean;
  lastActive: string;
  messages: IMessageResponse[];
}

export default IRoomResponse;
