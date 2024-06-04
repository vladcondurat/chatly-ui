import IRoomDetails from './IRoomDetails';

interface IPostRoomRequest {
  details: IRoomDetails;
  userIds: number[];
}

export default IPostRoomRequest;
