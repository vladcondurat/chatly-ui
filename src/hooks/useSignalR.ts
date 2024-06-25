import { useEffect } from 'react';

import { useAppDispatch } from '@app/hooks/store-hooks';
import {
  fetchRoomsRealTimeAsyncAction,
  fetchSelectedRoomAsyncAction,
} from '@app/store/actions/room-actions';
import * as signalR from '@microsoft/signalr';

const useSignalR = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const startSignalRConnection = async () => {
      const connection = new signalR.HubConnectionBuilder()
        .withUrl('http://localhost:5003/messageHub')
        .withAutomaticReconnect()
        .build();

      connection.on('ReceiveMessage', message => {
        dispatch(fetchSelectedRoomAsyncAction({ roomId: message.roomId }));
        dispatch(fetchRoomsRealTimeAsyncAction());
      });

      try {
        await connection.start();
      } catch (err) {
        console.error('Connection error: ', err);
      }
    };

    startSignalRConnection();
  }, [dispatch]);
};

export default useSignalR;
