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

export const getCarrierList = (token) => ({
  type: GET_CARRIER_LIST_STARTED,
  payload: token
})
export const getCarrierListSuccess = (data) => ({
  type: GET_CARRIER_LIST_SUCCEEDED,
  payload: data
})
export const getCarrierListError = (error) => ({
  type: GET_CARRIER_LIST_FAILED,
  payload: error
})
