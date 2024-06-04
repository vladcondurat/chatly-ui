import IUser from '../user/IUser';

interface IMessage {
  id: number;
  attachedImageUrl: string;
  textContent: string;
  userId: number;
  user: IUser;
}

export default IMessage;
