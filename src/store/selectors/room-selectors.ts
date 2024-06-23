import { RootState } from '@app/store';
import roomsAdapter from '@app/store/adaptors/rooms-adapter';

const roomsSelectors = roomsAdapter.getSelectors<RootState>(state => state.room);

export const selectedRoomSelector = (state: RootState) => state.room.selectedRoom;
export const isLoadingRoomSelector = (state: RootState): boolean => state.room.loading;
export const isErrorRoomSelector = (state: RootState): boolean => state.room.isError;
export const roomsSelector = roomsSelectors.selectAll;
