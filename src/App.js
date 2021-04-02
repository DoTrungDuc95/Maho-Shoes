import { useState } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

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
      <Footer />
    </div>
  );
}

export default App;
