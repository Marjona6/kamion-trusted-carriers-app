import { takeLatest, call, put, all } from 'redux-saga/effects'
import axios from 'axios'

import {
  ADD_CARRIER_STARTED,
  UPDATE_CARRIER_STARTED,
  GET_CARRIER_LIST_STARTED
} from './types'

import {
  addCarrierError,
  addCarrierSuccess,
  getCarrierListError,
  getCarrierListSuccess,
  updateCarrierError,
  updateCarrierSuccess
} from './actions'

import { BASE_URL } from '../../config'

function* getCarriersTask(action) {
  const { payload } = action
  const { token, page = 1 } = payload
  try {
    const response = yield call(
      axios.get,
      `${BASE_URL}/api/shipper/carrier?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    yield put(getCarrierListSuccess(response.data))
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

function* updateCarrierTask(action) {
  const { payload } = action
  const { token, formData, carrierId } = payload
  try {
    const response = yield call(
      axios.post,
      `${BASE_URL}/api/shipper/update-carrier/${carrierId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    const { data } = response
    yield put(updateCarrierSuccess(data))
  } catch (e) {
    console.log(e)
    yield put(updateCarrierError(e))
  }
}

function* watchGetCarriers() {
  yield takeLatest(GET_CARRIER_LIST_STARTED, getCarriersTask)
}

function* watchAddCarrier() {
  yield takeLatest(ADD_CARRIER_STARTED, addCarrierTask)
}

function* watchUpdateCarrier() {
  yield takeLatest(UPDATE_CARRIER_STARTED, updateCarrierTask)
}

export default function* saga() {
  yield all([watchGetCarriers(), watchAddCarrier(), watchUpdateCarrier()])
}
