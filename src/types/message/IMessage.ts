import IUser from '../user/IUser';
import IMessageContent from './IMessageContent';

interface IMessage {
  id: string;
  content: IMessageContent;
  createdAt: string;
  user: IUser;
}

export default IMessage;
