import IUser from '../user/IUser';

interface IMessageResponse {
  id: string;
  attachedImageUrl: string;
  textContent: string;
  createdAt: string;
  user: IUser;
}

export default IMessageResponse;
