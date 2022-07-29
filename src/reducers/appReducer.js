import {
  SET_ERROR,
  EVALUATE,
  SHOW_HISTORY,
  CLEAR_HISTORY,
  ADD_VALUE,
  DELETE_VALUE,
  TOGGLE_THEME,
  ADD_TO_HISTORY,
  OPERATOR_CHANGE, ADD_TO_EXPRESSION_HISTORY,
} from '@/constants'

const initialState = {
  expressionHistory: '',
  expression: '',
  historyList: [],
  showHistory: true,
  themeValue: 'Light theme',
  errorString: '',
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_VALUE:
      return {
        ...state,
        expression: state.expression + payload.value,
      }
    case DELETE_VALUE:
      return {
        ...state,
        expression: '',
      }
    case EVALUATE:
      return {
        ...state,
        expression: payload.value,
      }
    case ADD_TO_EXPRESSION_HISTORY:
      return {
        ...state,
        expressionHistory: payload.value,
      }
    case ADD_TO_HISTORY:
      return {
        ...state,
        historyList: [
          ...state.historyList,
          payload.value,
        ],
      }
    case CLEAR_HISTORY:
      return {
        ...state,
        historyList: [],
        expression: '',
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
    case OPERATOR_CHANGE:
      return {
        ...state,
        expression: payload.value,
      }

    default:
      return state
  }
}
