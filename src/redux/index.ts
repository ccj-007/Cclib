import { createStore } from 'redux';
import countReducers from "./count/countReducers";

const store = createStore(countReducers);
export type RootState = ReturnType<typeof store.getState>

export default store;