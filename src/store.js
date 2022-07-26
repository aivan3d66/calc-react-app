import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

import { rootReducer } from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(
    store.getState(),
  )
})

export default store
