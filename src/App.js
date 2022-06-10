import React from 'react';
import { Provider } from 'react-redux';
import store, {persistor} from './store';
import { ToastContainer } from 'react-toastify';
import GlobalStyled from './styled/globalStyled';
import Routers from './routes/'
import Header from './components/header';
import history from './services/history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  
  return (<>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <HistoryRouter history={history}>
        <Header />
        <Routers />
        <GlobalStyled />
        <ToastContainer autoClose={3000} className="toast-container" />
      </HistoryRouter>
      </PersistGate>
     </Provider>
  </>);
}

export default App;
