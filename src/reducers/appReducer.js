import { ACTIONS } from '@/constants'
import { calculation, control } from '@/helpers'

const initialState = {
  calcString: '',
  history: [],
  historyList: [],
  showHistory: true,
  themeValue: 'Light theme',
  isDisableBtn: false,
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_VALUE:
      return {
        ...state,
        calcString: control(state.calcString += payload.value),
      }
    case ACTIONS.DELETE_VALUE:
      return {
        ...state,
        calcString: state.calcString.substr(0, state.calcString.length - 1),
      }
    case ACTIONS.CLEAR:
      return {
        ...state,
        calcString: '',
        isDisableBtn: false,
      }
    case ACTIONS.EVALUATE:
      return {
        ...state,
        calcString: state.calcString + '=' + calculation(state.calcString).toPrecision(3),
        historyList: [...state.historyList, state.calcString],
        isDisableBtn: true,
      }
    case ACTIONS.THEME_TOGGLE:
      return {
        ...state,
        themeValue: payload.value,
      }
    case ACTIONS.CLEAR_HISTORY:
      return {
        ...state,
        historyList: [],
      }
    case ACTIONS.SHOW_HISTORY:
      return {
        ...state,
        showHistory: payload.value,
      }

    default:
      return state
  }
}
