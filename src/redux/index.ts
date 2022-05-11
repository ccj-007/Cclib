import { createStore, Store, Action } from 'redux';
import countReducers from "./count/countReducers";
import alertsReducers from "./alerts/alertsReducers";
import { combineReducers } from "@reduxjs/toolkit";

//@ts-ignore
const rootReducer = combineReducers({
  alertsReducers: alertsReducers,
  countReducers: countReducers,
})
const store: Store<any, Action<any>> = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>

export default store;