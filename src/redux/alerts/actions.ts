export type AlertsAction = {
  type: 'success' | 'error' | '';
  content: string;
};
export type AlertsType = {
  type: 'success' | 'error' | '';
  content: string;
};

// 增加 state 次数的方法
export const setAlerts = (obj: AlertsType): AlertsAction => ({
  type: obj.type,
  content: obj.content,
});
