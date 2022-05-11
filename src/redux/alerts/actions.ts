export type AlertsAction = {
  type: 'success' | 'error' | ''
}

export type AlertsType = 'success' | 'error' | ''

// 增加 state 次数的方法
export const setAlerts = (alert: AlertsType): AlertsAction => ({
  type: alert,
})

