// TYPES
import { ActionTypes, Alert } from './types';


export const setAlert = (alert: Alert) => {
  return {type: ActionTypes.SET_ALERT, payload: { alert }}
}

export const removeAlert = () => {
  return {type: ActionTypes.REMOVE_ALERT}
}

export const newAlert = (alert: Alert) => {
  return {type: ActionTypes.NEW_ALERT, payload: { alert }}
}

export const storeAlert = (alert: Alert) => {
  return {type: ActionTypes.STORE_ALERT, payload: { alert }}
}

export const clearAlert = () => {
  return {type: ActionTypes.CLEAR_ALERT}
}

export const clearAllAlerts = () => {
  return {type: ActionTypes.CLEAR_ALL_ALERTS}
}

export const nextAlert = () => {
  return {type: ActionTypes.NEXT_ALERT}
}

export const openSlider = () => {
  return {type: ActionTypes.OPEN_SLIDER}
}

export const closeSlider = () => {
  return {type: ActionTypes.CLOSE_SLIDER}
}

export const setSliderContent = (content: string) => {
  return {type: ActionTypes.SET_SLIDER_CONTENT, payload: content}
}

export const openNav = () => {
  return {type: ActionTypes.OPEN_NAV}
}

export const closeNav = () => {
  return {type: ActionTypes.CLOSE_NAV}
}

export const setLoading = () => {
  return {type: ActionTypes.SET_LOADING}
}

export const stopLoading = () => {
  return {type: ActionTypes.STOP_LOADING}
}