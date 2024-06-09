import IMessage from '../message/IMessage';
import IRoomDetails from './IRoomDetails';

interface IRoomCard {
  id: string;
  details: IRoomDetails;
  lastMessage: IMessage;
}

export default IRoomCard;
