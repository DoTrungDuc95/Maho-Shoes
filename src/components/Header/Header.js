import { useState } from 'react';

import './Header.scss';

import svgIcon from '../../assets/images/menu-icon.svg';

const Header = ({ openMenu }) => {
  const [lang, setLang] = useState('EN');

  const krClick = () => {
    setLang('KR');
  };

  const enClick = () => {
    setLang('EN');
  };

  return (
    <div className="header">
      <button onClick={openMenu}>
        <img src={svgIcon} />
      </button>
      <div className="header-title">
        <h1>MAHO</h1>
        <p>shoes</p>
      </div>
      <div className="header-lang-and-cart">
        <div className="header-btn">
          <button
            className={lang === 'EN' ? 'header-lang-active' : ''}
            onClick={enClick}
          >
            EN
          </button>
          <span>/</span>
          <button
            className={lang === 'KR' ? 'header-lang-active' : ''}
            onClick={krClick}
          >
            KR
          </button>
        </div>
        <div className="header-btn">
          <button>CART</button>
          <div className="header-cart-number">0</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
