import { loginInfoFnAction, LoginInfoAction } from './actions';

type LoginInfoState = typeof defaultState;

export const defaultState = {
  username: '',
  password: '',
  uid: '',
  nickname: 'your name ！',
  avatar: '',
  create_time: '',
};

export default (state = defaultState, action: LoginInfoAction) => {
  switch (action.type) {
    case 'LOGIN_INFO_SUCCESS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
