import IRoom from './IRoom';
import IRoomCard from './IRoomCard';

interface IRoomState {
  rooms: IRoomCard[];
  selectedRoom: IRoom | null;
  loading: boolean;
  chatBarLoading: boolean;
  isError: boolean;
}

export default IRoomState;
