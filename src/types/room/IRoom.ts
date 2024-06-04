import IMessage from '../message/IMessage';

interface IRoom {
  id: number;
  imageUrl: string;
  roomName: string;
  lastMessageTime: string;
  lastMessage: IMessage;
}

export default IRoom;
