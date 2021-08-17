import Routes from './routes'
import { GlobalStyles } from '55tec_frontend_lib/dist'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, Persistor } from './store'

// UI
import Alert from './UI/Alert'
import Loader from './UI/Loader'

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<div />} persistor={Persistor}>
          <Routes />
          <Alert />
          <Loader />
          <GlobalStyles />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
