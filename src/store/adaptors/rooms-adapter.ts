import IRoomCard from '@app/types/room/IRoomCard';
import { createEntityAdapter } from '@reduxjs/toolkit';

const roomsAdapter = createEntityAdapter<IRoomCard>();

export default roomsAdapter;
