import {
  USER_LOGIN_STARTED,
  USER_LOGIN_SUCCEEDED,
  USER_LOGIN_FAILED,
  USER_REGISTER_STARTED,
  USER_REGISTER_SUCCEEDED,
  USER_REGISTER_FAILED,
  USER_LOGOUT
} from './types'

export const logoutUser = () => ({ type: USER_LOGOUT })

export const loginUser = ({ username, password }) => ({
  type: USER_LOGIN_STARTED,
  payload: {
    username,
    password
  }
})
export const loginSuccess = (data) => ({
  type: USER_LOGIN_SUCCEEDED,
  payload: data
})
export const loginError = (error) => ({
  type: USER_LOGIN_FAILED,
  payload: error
})

export const registerUser = ({
  username,
  password,
  first_name,
  last_name,
  phone,
  email
}) => ({
  type: USER_REGISTER_STARTED,
  payload: {
    username,
    password,
    first_name,
    last_name,
    phone,
    email
  }
})
export const registerSuccess = (token) => ({
  type: USER_REGISTER_SUCCEEDED,
  payload: token
})
export const registerError = (error) => ({
  type: USER_REGISTER_FAILED,
  payload: error
})
