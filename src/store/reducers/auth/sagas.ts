import { call, put } from 'redux-saga/effects'
import { store } from '../../index'

// TYPES
import { User, Client } from './types'

// SERVICES
import { updateUserProfile, updateUserPass, changeApplicationToken, changeClient } from '../../../services/plataform'

// ACTIONS
import { changeApp, setToken, setClient } from './actions'
import { stopLoading, setLoading, setAlert } from '../global/actions'

interface UserProfileUpdateActionType {
  type: string,
  payload: {
    client_id: string, 
    user: User
  }
}

interface UserPassUpdateActionType {
  type: string,
  payload: {
    password: string,
    new_password: string,
    user_id: string
  }
}

interface AppChangeActionType {
  type: string,
  payload: {
    user: User,
    newApp: string
  }
}

interface ClientChangeActionType {
  type: string,
  payload: {
    user: User,
    client: Client
  }
}

export function* requestUserProfileUpdate(action: UserProfileUpdateActionType) { 
  try {
    const {client_id, user} = action.payload

    yield put(setLoading())

    yield updateUserProfile(client_id, user)
    
    yield put(setAlert({title: "Sucesso", text: "Alteração feita com sucesso!", timed: true, timedAmmount: 3000}))
  } catch (error) {
    console.error(error)

    yield put(setAlert({title: "Ops", text: "Um erro ocorreu ao processar seu pedido, por favor tente novamente ou entre em contato com o suporte.", timed: true, timedAmmount: 5000}))
  }
    
  yield put(stopLoading())
}

export function* requestUserPassUpdate(action: UserPassUpdateActionType) { 
  try {
    const {password, new_password, user_id} = action.payload

    yield put(setLoading())

    yield updateUserPass(password, new_password, user_id)
    
    yield put(setAlert({title: "Sucesso", text: "Alteração feita com sucesso!", timed: true, timedAmmount: 3000}))
  } catch (error) {
    yield put(setAlert({title: "Ops", text: (error.response.data.error || "Um erro ocorreu ao processar seu pedido, por favor tente novamente ou entre em contato com o suporte."), timed: true, timedAmmount: 5000}))
  }
    
  yield put(stopLoading())
}

export function* requestChangeApp(action: AppChangeActionType) { 
  yield put(setLoading())

  try {
    const {newApp, user} = action.payload
    const { getState } = store
    const { globalState } = getState()

    let fetch = yield changeApplicationToken(user.token, user, newApp)
    
    yield put(setToken(fetch.data.token))
    yield put(changeApp(newApp))

    setTimeout(() => {
      if (globalState.isLoading) {
        put(stopLoading())
        put(setAlert({title: "Ops", text: "Um erro ocorreu ao processar seu pedido, por favor tente novamente ou entre em contato com o suporte.", timed: true, timedAmmount: 5000}))      
      }
    }, 20000)
  } catch (error) {
    console.error(error)

    yield put(stopLoading())
    yield put(setAlert({title: "Ops", text: "Um erro ocorreu ao processar seu pedido, por favor tente novamente ou entre em contato com o suporte.", timed: true, timedAmmount: 5000}))
  }    
}

export function* requestChangeClient(action: ClientChangeActionType) {
  yield put(setLoading())

  try {
    const {client, user} = action.payload

    let fetch = yield changeClient(user, client)
    
    yield put(setToken(fetch.data.token))
    yield put(setClient(client))
    yield put(stopLoading())
    
  } catch (error) {
    console.error(error)

    yield put(stopLoading())
    yield put(setAlert({title: "Ops", text: "Um erro ocorreu ao processar seu pedido, por favor tente novamente ou entre em contato com o suporte.", timed: true, timedAmmount: 5000}))
  }

}