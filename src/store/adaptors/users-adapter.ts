import { createEntityAdapter } from '@reduxjs/toolkit';
import IUser from '../../types/user/IUser';

const usersAdapter = createEntityAdapter<IUser>();

export default usersAdapter;
