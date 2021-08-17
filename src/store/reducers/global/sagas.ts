import { put } from 'redux-saga/effects'
import { store } from '../../index'

// TYPES
import { Alert } from './types'

// ACTIONS
import { newAlert, storeAlert, clearAlert, nextAlert  } from './actions'

interface AlertActionType {
  type: string,
  payload: {
    alert: Alert 
  }
}

export function* createAlert(action: AlertActionType) { 
  if(!action) return

  const { alert } = action.payload
  const { getState } = store
  const { globalState } = getState()

  if (globalState.hasAlert) {
    yield put(storeAlert(alert))
  } else {
    yield put(newAlert(alert))
  }
}

export function* deleteAlert() { 
  const { getState } = store
  const { globalState } = getState()

  yield put(clearAlert())

  if (globalState.nextAlert.length) {
    yield put(nextAlert())
  }
}