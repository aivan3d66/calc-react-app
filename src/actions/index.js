import { ACTIONS } from '@/constants'

export const actions = {
  addValue: value => ({ type: ACTIONS.ADD_VALUE, payload: { value } }),
  deleteLastValue: () => ({ type: ACTIONS.DELETE_VALUE }),
  clearAll: () => ({ type: ACTIONS.CLEAR }),
  evaluate: () => ({ type: ACTIONS.EVALUATE }),
  clearHistory: () => ({ type: ACTIONS.CLEAR_HISTORY }),
  getShowHistory: value => ({ type: ACTIONS.SHOW_HISTORY, payload: { value } }),
  setToggleTheme: value => ({ type: ACTIONS.THEME_TOGGLE, payload: { value } }),
}
