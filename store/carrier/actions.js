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

export const getCarrierList = ({ token, page }) => ({
  type: GET_CARRIER_LIST_STARTED,
  payload: { token, page }
})
export const getCarrierListSuccess = (data) => ({
  type: GET_CARRIER_LIST_SUCCEEDED,
  payload: data
})
export const getCarrierListError = (error) => ({
  type: GET_CARRIER_LIST_FAILED,
  payload: error
})

export const addCarrier = (data) => ({
  type: ADD_CARRIER_STARTED,
  payload: data
})
export const addCarrierSuccess = (data) => ({
  type: ADD_CARRIER_SUCCEEDED,
  payload: data
})
export const addCarrierError = (error) => ({
  type: ADD_CARRIER_FAILED,
  payload: error
})

export const updateCarrier = (token) => ({
  type: UPDATE_CARRIER_STARTED,
  payload: token
})
export const updateCarrierSuccess = (data) => ({
  type: UPDATE_CARRIER_SUCCEEDED,
  payload: data
})
export const updateCarrierError = (error) => ({
  type: UPDATE_CARRIER_FAILED,
  payload: error
})
