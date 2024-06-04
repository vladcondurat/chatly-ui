import IMessage from '../message/IMessage';
import IRoomDetails from './IRoomDetails';

interface IRoom {
  id: number;
  details: IRoomDetails;
  lastMessageTime: string;
  lastMessage: IMessage;
}

export default IRoom;
