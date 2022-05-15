import { loginInfoFnAction, LoginInfoAction } from './actions';

type LoginInfoState = {
  username: string;
  password: string;
  uid: string;
  nickname: string;
  avatar: string;
};

export const defaultState: LoginInfoState = {
  username: '',
  password: '',
  uid: '',
  nickname: 'your name ！',
  avatar: '',
};

export default (state = defaultState, action: LoginInfoAction) => {
  switch (action.type) {
    case 'LOGIN_INFO_SUCCESS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
