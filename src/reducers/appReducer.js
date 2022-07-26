import { calculation, control, getNormalizeNumber } from '@/helpers'
import {
  SET_ERROR,
  EVALUATE,
  SHOW_HISTORY,
  CLEAR,
  CLEAR_HISTORY,
  ADD_VALUE,
  DELETE_VALUE,
  THEME_TOGGLE,
  GET_LOCAL_STORE,
  TOGGLE_THEME,
} from '@/constants'

const initialState = {
  calcString: '',
  history: [],
  historyList: [],
  showHistory: true,
  themeValue: 'Light theme',
  isDisableBtn: false,
  errorString: '',
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_VALUE:
      return {
        ...state,
        calcString: control(state.calcString += payload.value),
      }
    case DELETE_VALUE:
      return {
        ...state,
        calcString: state.calcString.substr(0, state.calcString.length - 1),
      }
    case CLEAR:
      return {
        ...state,
        calcString: '',
        isDisableBtn: false,
      }
    case EVALUATE:
      return {
        ...state,
        calcString: state.calcString + '=' + getNormalizeNumber(calculation(state.calcString)),
        historyList: [...state.historyList, state.calcString],
        isDisableBtn: true,
      }
    case THEME_TOGGLE:
      return {
        ...state,
        themeValue: payload.value,
      }
    case CLEAR_HISTORY:
      return {
        ...state,
        historyList: [],
        calcString: '',
      }
    case SHOW_HISTORY:
      return {
        ...state,
        showHistory: payload.value,
      }
    case SET_ERROR:
      return {
        ...state,
        errorString: payload.value,
      }
    case TOGGLE_THEME:
      return {
        ...state,
        themeValue: payload.value,
      }
    case GET_LOCAL_STORE:
      return {
        ...state,
        ...payload.value,
      }
    default:
      return state
  }
}
