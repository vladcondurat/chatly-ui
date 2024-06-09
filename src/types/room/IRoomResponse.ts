import IMessageResponse from '../message/IMessageResponse';

interface IRoomResponse {
  id: string;
  imageUrl: string;
  roomName: string;
  messages: IMessageResponse[];
}

export default IRoomResponse;
