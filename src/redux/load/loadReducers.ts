import { loadType } from './actions';

export default (state = false, action: loadType): boolean => {
  switch (action.type) {
    case true:
      return true;
    case false:
      return false;
    default:
      return false;
  }
};
