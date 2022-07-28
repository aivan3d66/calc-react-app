import {
  ADD_VALUE,
  SET_ERROR,
  EVALUATE,
  SHOW_HISTORY,
  CLEAR_HISTORY,
  DELETE_VALUE,
  GET_LOCAL_STORE,
  TOGGLE_THEME,
  ADD_TO_HISTORY,
} from '@/constants'

export const addValue = value => ({ type: ADD_VALUE, payload: { value } })
export const deleteValue = () => ({ type: DELETE_VALUE })
export const evaluate = value => ({ type: EVALUATE, payload: { value } })
export const addToHistory = value => ({ type: ADD_TO_HISTORY, payload: { value } })
export const clearHistory = () => ({ type: CLEAR_HISTORY })
export const getShowHistory = value => ({ type: SHOW_HISTORY, payload: { value } })
export const setError = value => ({ type: SET_ERROR, payload: { value } })
export const toggleTheme = value => ({ type: TOGGLE_THEME, payload: { value } })
export const getLocalStorage = value => ({ type: GET_LOCAL_STORE, payload: { value } })
