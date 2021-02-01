import { applyMiddleware, createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(sagas)

  return store
}

export const wrapper = createWrapper(makeStore, { debug: false })
