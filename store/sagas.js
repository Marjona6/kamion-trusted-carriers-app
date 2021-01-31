import { all } from 'redux-saga/effects'

import userSaga from './user/saga'
import carrierSaga from './carrier/saga'

export default function* sagas() {
  yield all([userSaga(), carrierSaga()])
}
