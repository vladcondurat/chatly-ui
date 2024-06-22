import { createAction } from '@reduxjs/toolkit';
import { APP__SET_MODAL_OPEN } from '../constants';

export const setAppIsModalOpenAction = createAction<boolean>(APP__SET_MODAL_OPEN);
