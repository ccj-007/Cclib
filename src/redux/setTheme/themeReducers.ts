import { ThemeObj, ThemeActions } from './actions';
import { themeOptions } from '@/options/theme';
export default (state = themeOptions, action: ThemeActions): ThemeObj => {
  switch (action.type) {
    case 'modify':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
