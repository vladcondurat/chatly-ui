import IMessageResponse from '../message/IMessageResponse';

interface IRoomCardResponse {
  id: string;
  imageUrl: string;
  roomName: string;
  lastMessage: IMessageResponse;
}

export default IRoomCardResponse;
