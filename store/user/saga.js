import { takeLatest, call, put, all } from 'redux-saga/effects'
import axios from 'axios'
import Router from 'next/router'
import Cookies from 'universal-cookie'
import get from 'lodash/get'

import { USER_LOGIN_STARTED, USER_REGISTER_STARTED, USER_LOGOUT } from './types'
import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError
} from './actions'

import { BASE_URL } from '../../config'

const cookies = new Cookies()

function* loginUserTask(action) {
  const { payload } = action
  const { username, password } = payload
  try {
    const response = yield call(axios.post, `${BASE_URL}/api/shipper/login`, {
      username,
      password
    })
    const { data } = response
    yield put(loginSuccess(data))
    cookies.set('kamionTrustedCarriersApp', get(data, 'data.token'), {
      path: '/'
    })
    Router.push({
      pathname: '/list'
    })
  } catch (e) {
    yield put(loginError(e))
    console.log({ e })
  }
}

function* registerUserTask(action) {
  const { payload } = action
  const { username, password, first_name, last_name, phone, email } = payload
  try {
    const response = yield call(
      axios.post,
      `${BASE_URL}/api/shipper/register`,
      {
        username,
        password,
        first_name,
        last_name,
        phone,
        email
      }
    )
    const { data } = response
    yield put(registerSuccess(data))
  } catch (e) {
    yield put(registerError(e))
    console.log({ e })
  }
}

function* logoutUserTask() {
  yield cookies.remove('kamionTrustedCarriersApp')
}

function* watchLoginUser() {
  yield takeLatest(USER_LOGIN_STARTED, loginUserTask)
}
function* watchRegisterUser() {
  yield takeLatest(USER_REGISTER_STARTED, registerUserTask)
}

function* watchLogoutUser() {
  yield takeLatest(USER_LOGOUT, logoutUserTask)
}

export default function* saga() {
  yield all([watchLoginUser(), watchRegisterUser(), watchLogoutUser()])
}
