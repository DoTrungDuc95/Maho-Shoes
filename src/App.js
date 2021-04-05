import { useState } from 'react';

import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Routes from './pages/routes';

function App() {
  const [show, setShow] = useState(false);

  const closeMenu = () => {
    setShow(false);
    document.body.style.overflow = null;
  };

  const openMenu = () => {
    setShow(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="app">
      {show && <Menu closeMenu={closeMenu} />}
      <Header openMenu={openMenu} />
      <Main />
      <Routes />
    </div>
  );
}

export default App;
