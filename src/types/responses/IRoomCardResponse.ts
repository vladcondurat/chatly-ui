import IMessageResponse from './IMessageResponse';

interface IRoomCardResponse {
  id: string;
  imageUrl: string;
  roomName: string;
  lastActive: string;
  lastMessage: IMessageResponse;
}

export default IRoomCardResponse;
