import { createStore, Store, Action, applyMiddleware } from 'redux';
import countReducers from './count/countReducers';
import alertsReducers from './alerts/alertsReducers';
import loadReducers from './load/loadReducers';
import loginInfoReducers from './loginInfo/loginInfoReducers';
import themeReducers from './setTheme/themeReducers';
import layoutReducers from './setLayout/layoutReducers';

import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
//@ts-ignore
const rootReducer = combineReducers({
  alertsReducers: alertsReducers,
  countReducers: countReducers,
  loadReducers: loadReducers,
  loginInfoReducers: loginInfoReducers,
  themeReducers: themeReducers,
  layoutReducers: layoutReducers,
});
const store: Store<any, Action<any>> = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
export type RootState = ReturnType<typeof store.getState>;

export default store;
