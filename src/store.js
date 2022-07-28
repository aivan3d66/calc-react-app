import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { loadState, saveState } from '@/localStorage'

import { rootReducer } from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  loadState(),
  applyMiddleware(sagaMiddleware),
)

store.subscribe(() => saveState(store.getState()))

sagaMiddleware.run(rootSaga)

export default store
