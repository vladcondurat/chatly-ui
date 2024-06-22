import { isArray, toString } from 'lodash';
import IRoom from '../types/room/IRoom';
import IGetRoomsResponse from '../types/room/IGetRoomsResponse';
import IRoomCard from '../types/room/IRoomCard';
import IRoomDetails from '../types/room/IRoomDetails';
import IRoomCardResponse from '../types/room/IRoomCardResponse';
import { mapMessageResponseToMessage } from './message-mappers';
import IRoomResponse from '../types/room/IRoomResponse';

export const mapRoomResponseToRoom = (data: Partial<IRoomResponse>): IRoom => {
  const roomDetails: IRoomDetails = {
    roomName: data?.roomName,
    imageUrl: data?.imageUrl,
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
