import IUser from '@app/types/user/IUser';
import { createEntityAdapter } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter<IUser>();

export default usersAdapter;
