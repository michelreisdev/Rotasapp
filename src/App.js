import React from 'react';
import GlobalStyled from './styled/globalStyled';
import Routers from './routes/'
import Header from './components/header';
import history from './services/history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
function App() {
  return (<>
    <HistoryRouter history={history}>
      <Header />
      <Routers />
      <GlobalStyled />
     </HistoryRouter>
  </>);
}

export default App;
