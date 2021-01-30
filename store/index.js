import { createStore, combineReducers } from 'redux'
import user from './reducers/user'

const makeStore (initialState = {}, context) => {
  console.log({ user, initialState })
  return createStore(
    combineReducers({
      user
    }),
    initialState
  )
}

export default makeStore
