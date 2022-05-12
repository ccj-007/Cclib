import { AlertsAction } from './actions';

export default (
  state = {
    type: '',
    content: '',
  },
  action: AlertsAction,
): AlertsAction => {
  switch (action.type) {
    case 'success':
      return {
        type: 'success',
        content: action.content,
      };
    case 'error':
      return {
        type: 'error',
        content: action.content,
      };
    default:
      return {
        type: '',
        content: '',
      };
  }
};
