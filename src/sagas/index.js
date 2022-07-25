import { takeEvery, put, fork, all } from 'redux-saga/effects'

import { ACTIONS } from '@/constants'
import { actions } from '@/actions'

const {
  ADD_VALUE,
  CLEAR,
  CLEAR_HISTORY,
  DELETE_VALUE,
  EVALUATE,
  SHOW_HISTORY,
  THEME_TOGGLE,
} = ACTIONS

const {
  setError,
} = actions

export function* addNewValue() {
  try {
    yield console.log('Value was added')
  } catch {
    yield put(setError('Error adding new value'))
  }
}

export function* deleteLastValue() {
  try {
    yield console.log('Last value was deleted')
  } catch {
    yield put(setError('Error deleting the last value'))
  }
}

export function* clearValue() {
  try {
    yield console.log('Value was cleared')
  } catch {
    yield put(setError('Error clearing the value'))
  }
}

export function* evaluateValue() {
  try {
    yield console.log('Evaluated successful')
  } catch {
    yield put(setError('Error in evaluating'))
  }
}

export function* historyClear() {
  try {
    yield console.log('History was cleared')
  } catch {
    yield put(setError('Error in history cleaning'))
  }
}

export function* historyVisibleToggle() {
  try {
    yield console.log('History visible changed')
  } catch {
    yield put(setError('Error in history visible change'))
  }
}

export function* themeToggle() {
  try {
    yield console.log('App theme was changed')
  } catch {
    yield put(setError('Error in change App theme'))
  }
}

export function* watchAddValueSaga() {
  yield takeEvery(ADD_VALUE, addNewValue)
}

export function* watchDeleteLastValueSaga() {
  yield takeEvery(DELETE_VALUE, deleteLastValue)
}

export function* watchClearValueSaga() {
  yield takeEvery(CLEAR, clearValue)
}

export function* watchEvaluateSaga() {
  yield takeEvery(EVALUATE, evaluateValue)
}

export function* watchHistoryClearSaga() {
  yield takeEvery(CLEAR_HISTORY, historyClear)
}

export function* watchHistoryToggleSaga() {
  yield takeEvery(SHOW_HISTORY, historyVisibleToggle)
}

export function* watchThemeToggleSaga() {
  yield takeEvery(THEME_TOGGLE, themeToggle)
}

export default function* rootSaga() {
  yield all([
    fork(watchAddValueSaga),
    fork(watchDeleteLastValueSaga),
    fork(watchClearValueSaga),
    fork(watchEvaluateSaga),
    fork(watchHistoryClearSaga),
    fork(watchHistoryToggleSaga),
    fork(watchThemeToggleSaga),
  ])
}
