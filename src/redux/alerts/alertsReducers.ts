import { AlertsAction } from './actions';

export default (state = '', action: AlertsAction): string => {
  switch (action.type) {
    case 'success':
      return 'success'
    case 'error':
      return 'error'
    default:
      return ''
  }
}
