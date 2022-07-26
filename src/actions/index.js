import {
  ADD_VALUE,
  CLEAR,
  SET_ERROR,
  EVALUATE,
  SHOW_HISTORY,
  CLEAR_HISTORY,
  DELETE_VALUE,
  THEME_TOGGLE,
} from '@/constants'

export const addValue = value => ({ type: ADD_VALUE, payload: { value } })
export const deleteLastValue = () => ({ type: DELETE_VALUE })
export const clearAll = () => ({ type: CLEAR })
export const evaluate = () => ({ type: EVALUATE })
export const clearHistory = () => ({ type: CLEAR_HISTORY })
export const getShowHistory = value => ({ type: SHOW_HISTORY, payload: { value } })
export const setToggleTheme = value => ({ type: THEME_TOGGLE, payload: { value } })
export const setError = value => ({ type: SET_ERROR, payload: { value } })
