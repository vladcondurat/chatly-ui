import IUser from '../user/IUser';
import IMessageContent from './IMessageContent';

interface IMessage {
  id: number;
  content: IMessageContent;
  userId: number;
  user: IUser;
}

export default IMessage;
