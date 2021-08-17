// ACTIONS TYPES
export enum ActionTypes {
  SET_ALERT = "SET_ALERT",
  REMOVE_ALERT = "REMOVE_ALERT",
  NEW_ALERT = "NEW_ALERT",
  STORE_ALERT = "STORE_ALERT",
  CLEAR_ALERT = "CLEAR_ALERT",
  CLEAR_ALL_ALERTS = "CLEAR_ALL_ALERTS",
  NEXT_ALERT = "NEXT_ALERT",
  OPEN_SLIDER = "OPEN_SLIDER",
  CLOSE_SLIDER = "CLOSE_SLIDER",
  SET_SLIDER_CONTENT = "SET_SLIDER_CONTENT",
  OPEN_NAV = "OPEN_NAV",
  CLOSE_NAV = "CLOSE_NAV",
  STOP_LOADING = "STOP_LOADING",
  SET_LOADING = "SET_LOADING",
}

// DATA TYPES
export interface Alert {
  title: string, 
  text: string,
  img?: string,
  timed?: boolean,
  timedAmmount?: number,
  onAccept?: (e: any) => void,
  acceptLabel?: string,
  onRefuse?: (e: any) => void,
  refuseLabel?: string,
}

// REDUCER STATE
export interface ReducerTypes {
  readonly hasAlert: boolean,
  readonly alertContent: Alert,
  readonly nextAlert: Alert[],
  readonly isLoading: boolean,
  readonly slider: boolean,
  readonly sliderContent: string,
  readonly isNavOpen: boolean,
}