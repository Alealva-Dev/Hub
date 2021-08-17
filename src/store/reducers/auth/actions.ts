// TYPES
import { ActionTypes, User, Client } from './types';

export const login = (user: User) => {
  if (!user) return

  return {type: ActionTypes.AUTH_LOGIN, payload: { user }}
}

export const logout = () => {
  return {type: ActionTypes.AUTH_LOGOUT, payload: {}}
}

export const changeApp = (app: string) => {
  return {type: ActionTypes.AUTH_CHANGE_APP, payload: { app }}
}

export const setToken = (token: string) => {
  return {type: ActionTypes.SET_TOKEN, payload: token}
}

export const setClient = (client: Client) => {
  return {type: ActionTypes.SET_CLIENT, payload: client}
}

export const setMFATrue = () => {
  return {type: ActionTypes.SET_MFA_TRUE}
}

export const setMFAFalse = () => {
  return {type: ActionTypes.SET_MFA_FALSE}
}

// SAGA
export const requestUserProfileUpdate = (client_id: string, user: User) => {
  return {type: ActionTypes.REQUEST_UPDATE_USER_PROFILE, payload: {client_id, user}}
}

export const requestUserPassUpdate = (password: string, new_password: string, user_id: string) => {
  return {type: ActionTypes.REQUEST_UPDATE_USER_PASS, payload: {password, new_password, user_id}}
}

export const requestChangeApp = (user: User, newApp: string) => {
  return {type: ActionTypes.REQUEST_CHANGE_APP, payload: {user, newApp}}
}

export const requestChangeClient = (user: User, client: Client) => {
  return {type: ActionTypes.REQUEST_CHANGE_CLIENT, payload: {user, client}}
}