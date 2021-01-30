import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

const makeStore = (initialState = {}) => {
  return createStore(reducers, initialState, composeWithDevTools())
}

export const wrapper = createWrapper(makeStore, { debug: true })
