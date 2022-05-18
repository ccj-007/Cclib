import { LayoutObj, LayoutActions } from './actions';
export default (
  state = {
    leftSidebar: true,
  },
  action: LayoutActions,
): LayoutObj => {
  switch (action.type) {
    case 'change':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
