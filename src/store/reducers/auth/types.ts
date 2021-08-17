// ACTIONS TYPES
export enum ActionTypes {
  REQUEST_UPDATE_USER_PROFILE = "REQUEST_UPDATE_USER_PROFILE",
  REQUEST_UPDATE_USER_PASS = "REQUEST_UPDATE_USER_PASS",
  REQUEST_CHANGE_APP = "REQUEST_CHANGE_APP",
  REQUEST_CHANGE_CLIENT = "REQUEST_CHANGE_CLIENT",
  AUTH_LOGIN = "AUTH_LOGIN",
  AUTH_LOGOUT = "AUTH_LOGOUT",
  AUTH_CHANGE_APP = "AUTH_CHANGE_APP",
  SET_TOKEN = "SET_TOKEN",
  SET_MFA_TRUE = "SET_MFA_TRUE",
  SET_MFA_FALSE = "SET_MFA_FALSE",
  SET_CLIENT = "SET_CLIENT",
  GLOBAL_KILL = "GLOBAL_KILL"
}

// DATA TYPES
export interface Administrators {
  user_id: string,
  phone: string,
  name: string,
}
  

export interface Password {
  active: boolean,
  blockTriesActive: boolean,
  userBlockActive: boolean,
  userBlock: string,
  minLengthActive: boolean,
  passRestrictionActive: boolean,
  historyPassActive: boolean,
  expTimeActive: boolean,
  upper: number,
  lower: number,
  numbers: number,
  special: number,
  blockTries: number
}
  

export interface Client {
  _id: string,
  central_id: number|string,
  sip_server: string,
  name: string,
  document: string, 
  twofa: boolean,
  user_active: boolean,
  administrators: Administrators[],
  password_settings: Password
}

export interface User {
  _id: string,
  super: boolean,
  email: string,
  name: string,
  registered: boolean,
  twofa: boolean,
  clients: Client[],
  token: string,
  selectedClient: Client,
  document?: string,
  gender?: string,
  mobile_phone?: string,
  birth_date?: string
}

// REDUCER STATE
export interface ReducerTypes {
  readonly user: User|null,
  readonly isLogged: boolean,
  readonly application: string
}