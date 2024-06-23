import { RootState } from '@app/store';

export const isModalOpenSelector = (state: RootState) => state.app.isAppModalOpen;
