import IUserIds from '../user/IUserIds';

interface IRemoveUsersFromRoomRequest {
  userIds: IUserIds;
  roomId: string;
}

export default IRemoveUsersFromRoomRequest;
