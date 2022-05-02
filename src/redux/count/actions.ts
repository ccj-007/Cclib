import { DECREMENT, INCREMENT } from './constants'

export interface IINCREMENTAction {
  type: INCREMENT;
}

export interface IDECREMENTAction {
  type: DECREMENT;
}

export type ModifyAction = IINCREMENTAction | IDECREMENTAction;


// 增加 state 次数的方法
export const increment = (): IINCREMENTAction => ({
  type: INCREMENT,
})

// 减少 state 次数的方法
export const decrement = (): IDECREMENTAction => ({
  type: DECREMENT
})
