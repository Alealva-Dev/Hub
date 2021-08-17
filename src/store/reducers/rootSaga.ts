import { all, takeLatest, takeEvery } from 'redux-saga/effects'

// TYPES
import { ActionTypes as AuthActionTypes} from './auth/types'
import { ActionTypes as AlertActionTypes} from './global/types'

// SAGAS
import { requestUserProfileUpdate, requestUserPassUpdate, requestChangeApp, requestChangeClient } from './auth/sagas'
import { createAlert, deleteAlert } from './global/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthActionTypes.REQUEST_UPDATE_USER_PROFILE, requestUserProfileUpdate),
    takeLatest(AuthActionTypes.REQUEST_UPDATE_USER_PASS, requestUserPassUpdate),
    takeLatest(AuthActionTypes.REQUEST_CHANGE_APP, requestChangeApp),
    takeLatest(AuthActionTypes.REQUEST_CHANGE_CLIENT, requestChangeClient),
    takeEvery(AlertActionTypes.SET_ALERT, createAlert),
    takeEvery(AlertActionTypes.REMOVE_ALERT, deleteAlert)
  ])
}