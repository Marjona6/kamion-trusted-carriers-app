import { combineReducers } from 'redux'
import user from './user/reducer'
import carrier from './carrier/reducer'

export default combineReducers({
  user,
  carrier
})
