import { createStore, Store, Action, applyMiddleware } from 'redux';
import countReducers from './count/countReducers';
import alertsReducers from './alerts/alertsReducers';
import loadReducers from './load/loadReducers';
import loginInfoReducers from './loginInfo/loginInfoReducers';

import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
//@ts-ignore
const rootReducer = combineReducers({
  alertsReducers: alertsReducers,
  countReducers: countReducers,
  loadReducers: loadReducers,
  loginInfoReducers: loginInfoReducers,
});
const store: Store<any, Action<any>> = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
export type RootState = ReturnType<typeof store.getState>;

export default store;
