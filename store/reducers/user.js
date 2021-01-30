import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

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

console.log(typeof user)

const makeStore = () => createStore(user, composeWithDevTools())

export const wrapper = createWrapper(makeStore, { debug: true })

// export default user
