import React from 'react';
import GlobalStyled from './styled/globalStyled';
import Login from './pages/login';
import Header from './components/header';

function App() {
  return (<>
      <Header />
      <Login />
      < GlobalStyled />
  </>);
}

export default App;
