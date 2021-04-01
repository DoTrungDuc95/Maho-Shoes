import './Header.css';

import svgIcon from '../../assets/images/menu-icon.svg';

const Header = () => {
  return (
    <div className="header">
      <button>
        <img src={svgIcon} />
      </button>
      <div className="header-title">
        <h1>MAHO</h1>
        <p>shoes</p>
      </div>
      <div className="header-lang-and-cart">
        <div className="header-lang">
          <button>EN</button>
          <span>/</span>
          <button>KR</button>
        </div>
        <div className="header-cart">
          <button>CART</button>
          <div className="header-cart-number">0</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
