import { takeEvery, put } from 'redux-saga/effects'
import { ACTIONS } from '@/constants'
import { actions } from '@/actions'

// BLL
export function* addDigitSaga(value) {
  // yield put(actions.addDigit(value))
}

// ACTION SEARCH
export function* watchClickSaga() {
  // yield takeEvery(ACTIONS.ADD_VALUE, addDigitSaga)
}

export default function* rootSaga() {
  yield watchClickSaga()
}
