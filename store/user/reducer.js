import { HYDRATE } from 'next-redux-wrapper'
import {
  USER_LOGOUT,
  USER_LOGIN_STARTED,
  USER_LOGIN_SUCCEEDED,
  USER_LOGIN_FAILED,
  USER_REGISTER_STARTED,
  USER_REGISTER_SUCCEEDED,
  USER_REGISTER_FAILED
} from './types'

const initialState = {
  token: '',
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: ''
}

const user = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case HYDRATE: // required by next-redux-wrapper
      return { ...state }
    case USER_LOGOUT:
      return { ...state, user: {} }
    case USER_LOGIN_STARTED:
      return {
        ...state,
        isLoading: true
      }
    case USER_LOGIN_SUCCEEDED:
      return {
        ...state,
        token: payload.data.token,
        username: payload.data.username,
        firstName: payload.data.first_name,
        lastName: payload.data.last_name,
        email: payload.data.email,
        id: payload.data.id,
        phoneNumber: payload.data.phone,
        isLoading: false
      }
    case USER_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: {
          user: payload // TODO check
        }
      }
    case USER_REGISTER_STARTED:
      return {
        ...state,
        isLoading: true
      }
    case USER_REGISTER_SUCCEEDED:
      return {
        ...state,
        isLoading: false
      }
    case USER_REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: {
          user: payload // TODO check
        }
      }

    default:
      return state
  }
}

export default user
