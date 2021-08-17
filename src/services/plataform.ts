import axios from 'axios'
import { store, ApplicationState } from '../store/index'

// TYPES
import { User, Client } from '../store/reducers/auth/types'

let baseApi: any = process.env["REACT_APP_PLATAFORM_API"]
let registerApi: any = process.env["REACT_APP_REGISTER_API"]

export const updateUserProfile = (client_id: string, user: User) => {
  let data = {
    client_id,
    user
  }

  let config = {
    headers: {
      app_identifier: '55pbx',
      client_logged: user.selectedClient._id,
      user_logged: client_id
    }
  }

  return axios.put(baseApi + '/pbx/user/profile/update', data, config)
}

export const updateUserPass = (password: string, new_password: string, user_id: string) => {
  let state: ApplicationState = store.getState()
  let { user } = state.authState

  if(!user) return

  let data = {
    password,
    new_password,
    user_id
  }

  let config = {
    headers: {
      app_identifier: '55pbx',
      client_logged: user.selectedClient._id,
      user_logged: user_id
    }
  }

  return axios.put(registerApi + '/pbx/user/password/change', data, config)
}

export const changeApplicationToken = (token: string, user: User, newApp: string) => {
  if(!token || !user || !newApp) return

  let data = {
    token,
    user,
    newApp
  }

  let config = {
    headers: {
      app_identifier: '55pbx',
      client_logged: user.selectedClient._id,
      user_logged: user._id
    }
  }

  // return axios.put(registerApi + '/pbx/user/password/change', data, config)

  switch (newApp) {
    case 'admin':
      return axios.get('https://run.mocky.io/v3/1ee3e753-e119-44c9-9678-44f3146e5958')

    case 'flow':
      return axios.get('')

    case 'realtime':
      return axios.get('https://run.mocky.io/v3/1ee3e753-e119-44c9-9678-44f3146e5958')

    case 'report':
      return axios.get('https://run.mocky.io/v3/1ee3e753-e119-44c9-9678-44f3146e5958')

    case 'wallboard':
      return axios.get('https://run.mocky.io/v3/1ee3e753-e119-44c9-9678-44f3146e5958')
  
    default:
      break;
  }
}

export const changeClient = (user: User, client: Client) => {
  if(!client || !user) return

  let data = {
    user,
    client
  }

  let config = {
    headers: {
      app_identifier: '55pbx',
      client_logged: user.selectedClient._id,
      user_logged: user._id
    }
  }

  // return axios.put(registerApi + '/pbx/user/password/change', data, config)
  return axios.get('https://run.mocky.io/v3/1ee3e753-e119-44c9-9678-44f3146e5958')
}

export const validateMFA = (user: User, client: Client, twofa: string) => {
  if(!client || !user || !twofa) return

  let data = {
    user,
    client,
    twofa
  }

  let config = {
    headers: {
      app_identifier: '55pbx',
      client_logged: user.selectedClient._id,
      user_logged: user._id
    }
  }

  // return axios.put(registerApi + '/pbx/user/password/change', data, config)
  return axios.get('https://run.mocky.io/v3/1ee3e753-e119-44c9-9678-44f3146e5958')
}