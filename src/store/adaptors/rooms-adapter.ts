import { createEntityAdapter } from '@reduxjs/toolkit';
import IRoomCard from '../../types/room/IRoomCard';

const roomsAdapter = createEntityAdapter<IRoomCard>();

export default roomsAdapter;
