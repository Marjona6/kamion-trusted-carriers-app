import { HYDRATE } from 'next-redux-wrapper'

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
    case 'USER_LOGIN':
      return {
        ...state,
        token: payload.token,
        username: payload.username,
        firstName: payload.firstName
      }
    case 'USER_LOGOUT':
      return { ...state, token: '', username: '' }
    default:
      return state
  }
}

export default user
