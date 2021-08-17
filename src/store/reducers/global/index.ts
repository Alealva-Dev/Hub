import { ActionTypes, ReducerTypes } from './types';
import { Reducer } from 'redux'

const initialState: ReducerTypes = {
  hasAlert: false,
  alertContent: {title: '', text: ''},
  nextAlert: [],
  isLoading: false,
  slider: false,
  sliderContent: "",
  isNavOpen: false
};

const reducer: Reducer<ReducerTypes> = (state = initialState, action: any) => {
  switch(action.type) {
    case ActionTypes.NEW_ALERT:
      return {...state, alertContent: action.payload.alert, hasAlert: true};

    case ActionTypes.STORE_ALERT:
      return {...state, nextAlert: [ ...state.nextAlert ,action.payload.alert]};

    case ActionTypes.CLEAR_ALERT:
      return {...state, alertContent: {title: '', text: ''}, hasAlert: false};

    case ActionTypes.CLEAR_ALL_ALERTS:
      return {...state, alertContent: {title: '', text: ''}, hasAlert: false,  nextAlert: []};

    case ActionTypes.NEXT_ALERT:
      let newNextAlert: any = [...state.nextAlert]

      if(state.nextAlert.length > 1) {
        newNextAlert = newNextAlert.shift()
      } else {
        newNextAlert = []
      }

      return {...state, alertContent: state.nextAlert[0], nextAlert: [...newNextAlert], hasAlert: true};

    case ActionTypes.OPEN_SLIDER:
      return {...state, slider: true};

    case ActionTypes.CLOSE_SLIDER:
      return {...state, slider: false};

    case ActionTypes.SET_SLIDER_CONTENT:
      return {...state, sliderContent: action.payload};

    case ActionTypes.OPEN_NAV:
      return {...state, isNavOpen: true};

    case ActionTypes.CLOSE_NAV:
      return {...state, isNavOpen: false};

    case ActionTypes.SET_LOADING:
      return {...state, isLoading: true};
      
    case ActionTypes.STOP_LOADING:
      return {...state, isLoading: false};
      
    default: return state;
  }
};

export default reducer