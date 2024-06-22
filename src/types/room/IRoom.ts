import IMessage from '../message/IMessage';
import IRoomDetails from './IRoomDetails';

interface IRoom {
  id: string;
  isGroup: boolean;
  details: IRoomDetails;
  messages: IMessage[];
}

export default IRoom;
