import { createStore, applyMiddleware, compose, Store } from "redux";
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import createRootReducer from "./reducers";
import rootSaga from "./reducers/rootSaga";

// TYPES
import { ReducerTypes as AuthReducerTypes } from './reducers/auth/types'
import { ReducerTypes as GlobalReducerTypes } from './reducers/global/types'

export interface ApplicationState {
  authState: AuthReducerTypes,
  globalState: GlobalReducerTypes
}

// PERSISTENCE
const persistConfig = {
    key: 'root',
    storage,
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, createRootReducer())

// SAGA
const sagaMiddleware = createSagaMiddleware()

// STORE
const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware), devTools)  
);

sagaMiddleware.run(rootSaga)

const Persistor = persistStore(store)

export { store, Persistor };
