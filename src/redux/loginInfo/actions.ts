import { ThunkAction } from 'redux-thunk';
import { RootState } from '../';
import { login } from '@/request/api/login';

export interface LoginInfoAction {
  type: 'LOGIN_INFO_SUCCESS';
  payload: any;
}

export const loginInfoFnAction = (payload: any): LoginInfoAction => {
  return {
    type: 'LOGIN_INFO_SUCCESS',
    payload: payload,
  };
};

type InitType = {
  username: string;
  password: string;
};
export const LoginInfoCreator =
  (params: InitType): ThunkAction<void, RootState, any, LoginInfoAction> =>
  async (dispatch, getState) => {
    try {
      const res = await login(params);
      console.log('异步获取数据', res.data);
      dispatch(loginInfoFnAction(res.data));
      return res;
    } catch (error) {
      dispatch(loginInfoFnAction(error));
      return error;
    }
  };
