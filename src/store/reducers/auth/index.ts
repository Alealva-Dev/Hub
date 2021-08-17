import { ActionTypes, ReducerTypes } from './types';
import { Reducer } from 'redux'

const initialState: ReducerTypes = {
    user: null,
    isLogged: false,
    application: "admin"
};

const reducer: Reducer<ReducerTypes> = (state = initialState, action: any) => {
  switch(action.type) {
    case ActionTypes.AUTH_LOGIN:
      return {...state, user: action.payload.user, isLogged: true};

    case ActionTypes.AUTH_LOGOUT:
      return {...state, user: null, isLogged: false};

    case ActionTypes.AUTH_CHANGE_APP:
      return {...state, application: action.payload.app};
      
    case ActionTypes.SET_TOKEN:
      let newUser: any = {...state.user}
      newUser.token = action.payload

      return {...state, user: {...newUser}};
      
    case ActionTypes.SET_CLIENT:
      let newClientUser: any = {...state.user}
      newClientUser.selectedClient = action.payload

      console.log(action.payload, newClientUser)
      return {...state, user: {...newClientUser}};
      
    case ActionTypes.GLOBAL_KILL:
      return initialState;

    default: return state;
  }
};

export default reducer