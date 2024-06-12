import IMessage from '../../types/message/IMessage';
import { RootState } from '../index';

export const dataMessageSelector = (state: RootState): IMessage => state.message.data;
export const isLoadingMessageSelector = (state: RootState): boolean => state.message.loading;
export const isErrorMessageSelector = (state: RootState): boolean => state.message.isError;
