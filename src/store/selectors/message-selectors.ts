import { RootState } from '@app/store';
import IMessage from '@app/types/message/IMessage';

export const dataMessageSelector = (state: RootState): IMessage => state.message.data;
export const isLoadingMessageSelector = (state: RootState): boolean => state.message.loading;
export const isErrorMessageSelector = (state: RootState): boolean => state.message.isError;
