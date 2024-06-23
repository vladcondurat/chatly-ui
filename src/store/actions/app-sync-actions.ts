import { APP__SET_MODAL_OPEN } from '@app/store/constants';
import { createAction } from '@reduxjs/toolkit';

export const setAppIsModalOpenAction = createAction<boolean>(APP__SET_MODAL_OPEN);
