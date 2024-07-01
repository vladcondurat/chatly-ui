import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import {
  fetchRoomsRealTimeAsyncAction,
  fetchSelectedRoomAsyncAction,
} from '@app/store/actions/room-actions';
import { authBearerTokenSelector } from '@app/store/selectors/auth-selectors';
import * as signalR from '@microsoft/signalr';

const useSignalR = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(authBearerTokenSelector);

  useEffect(() => {
    const startSignalRConnection = async () => {
      const connection = new signalR.HubConnectionBuilder()
        .withUrl('http://localhost:5003/messageHub', {
          accessTokenFactory: () => token,
        })
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
  }, [dispatch, token]);
};

export default useSignalR;
