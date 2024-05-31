import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { mapAccountResponseToAccount } from '../../mappers/account-mapper';
import { accountGetRequest } from '../../api/requests/account-requests';
import { ACCOUNT_FETCH, ACCOUNT_SET_DATA, ACCOUNT__SET_LOADING } from '../constants';
import { RootState } from '..';
import IAccountData from '../../types/account/IAccountData';
import IAccountResponse from '../../types/account/IAccountResponse';

export const setDataAccountAction = createAction<IAccountData>(ACCOUNT_SET_DATA);
export const setLoadingAccountAction = createAction<boolean>(ACCOUNT__SET_LOADING);

export const fetchAccountAsyncAction = createAsyncThunk<void, never, { state: RootState }>(ACCOUNT_FETCH, async (__, thunkApi) => {
  thunkApi.dispatch(setLoadingAccountAction(true));
  try {
    const accountResponse: IAccountResponse = await accountGetRequest();
    const account = mapAccountResponseToAccount(accountResponse);
    thunkApi.dispatch(setDataAccountAction(account.data));
  } catch (err) {
    // swallow exception
  } finally {
    thunkApi.dispatch(setLoadingAccountAction(false));
  }
});
