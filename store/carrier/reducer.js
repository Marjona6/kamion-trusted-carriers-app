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

const initialState = {
  carrierList: []
}

const carrier = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case ADD_CARRIER_STARTED:
      return {
        ...state,
        carrierList: payload
      }
    default:
      return state
  }
}

export default carrier
