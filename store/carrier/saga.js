import { takeLatest, call, put, all } from 'redux-saga/effects'
import axios from 'axios'
import Router from 'next/router'

import {
  ADD_CARRIER_STARTED,
  ADD_CARRIER_SUCCEEDED,
  ADD_CARRIER_FAILED,
  UPDATE_CARRIER_STARTED,
  UPDATE_CARRIER_SUCCEEDED,
  UPDATE_CARRIER_FAILED,
  GET_CARRIER_LIST_STARTED,
  GET_CARRIER_LIST_SUCCEEDED,
  GET_CARRIER_LIST_FAILED
} from './types'

import {
  addCarrierError,
  addCarrierSuccess,
  getCarrierList,
  getCarrierListError,
  getCarrierListSuccess
} from './actions'

import { BASE_URL } from '../../config'

function* getCarriersTask(action) {
  const { payload } = action
  const { token } = payload
  try {
    const response = yield call(axios.get, `${BASE_URL}/api/shipper/carrier`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const { data } = response
    yield put(getCarrierListSuccess(data))
  } catch (e) {
    console.log(e)
    yield put(getCarrierListError(e))
  }
}

function* addCarrierTask(action) {
  const { payload } = action
  const { token, formData } = payload
  try {
    const response = yield call(
      axios.post,
      `${BASE_URL}/api/shipper/carrier`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    const { data } = response
    yield put(addCarrierSuccess(data))
  } catch (e) {
    console.log(e)
    yield put(addCarrierError(e))
  }
}

function* watchGetCarriers() {
  yield takeLatest(GET_CARRIER_LIST_STARTED, getCarriersTask)
}

function* watchAddCarrier() {
  yield takeLatest(ADD_CARRIER_STARTED, addCarrierTask)
}

export default function* saga() {
  yield all([watchGetCarriers(), watchAddCarrier()])
}
