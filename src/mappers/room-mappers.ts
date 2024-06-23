import IGetRoomsResponse from '@app/types/responses/IGetRoomsResponse';
import IRoomCardResponse from '@app/types/responses/IRoomCardResponse';
import IRoomResponse from '@app/types/responses/IRoomResponse';
import IRoom from '@app/types/room/IRoom';
import IRoomCard from '@app/types/room/IRoomCard';
import IRoomDetails from '@app/types/room/IRoomDetails';
import { isArray, toString } from 'lodash';

import { mapMessageResponseToMessage } from './message-mappers';

export const mapRoomResponseToRoom = (data: Partial<IRoomResponse>): IRoom => {
  const roomDetails: IRoomDetails = {
    roomName: data?.roomName,
    imageUrl: data?.imageUrl,
    lastActive: data?.lastActive,
  };

  const room: IRoom = {
    id: toString(data?.id),
    isGroup: data?.isGroup,
    details: roomDetails,
    messages: data?.messages?.map(message => mapMessageResponseToMessage(message)),
  };

  return room;
};

export const mapRoomCardResponseToRoomCard = (data: Partial<IRoomCardResponse>): IRoomCard => {
  const roomDetails: IRoomDetails = {
    roomName: data?.roomName,
    imageUrl: data?.imageUrl,
    lastActive: data?.lastActive,
  };

  const room: IRoomCard = {
    id: toString(data?.id),
    details: roomDetails,
    lastMessage: mapMessageResponseToMessage(data?.lastMessage),
  };

  return room;
};

export const mapRoomsResponseToRooms = (data: IGetRoomsResponse): IRoomCard[] => {
  if (!data || !isArray(data.rooms)) {
    return [];
  }

  return data.rooms.map(room => mapRoomCardResponseToRoomCard(room));
};
