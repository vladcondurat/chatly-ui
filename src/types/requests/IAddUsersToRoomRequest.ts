import IUserIds from '@app/types/user/IUserIds';

interface IAddUsersToRoomRequest {
  userIds: IUserIds;
  roomId: string;
}

export default IAddUsersToRoomRequest;
