import { RootState } from '..';

export const isModalOpenSelector = (state: RootState) => state.app.isAppModalOpen;
