import './Menu.css';

import closeIcon from '../../assets/images/close-icon.svg';

const Menu = ({ closeMenu }) => {
  return (
    <div className="menu">
      <div className="menu-out-side-1">
        <div className="menu-out-side-2">
          <div className="menu-main">
            <button className="menu-close-btn" onClick={closeMenu}>
              <img src={closeIcon} />
            </button>
            <div className="menu-nav">
              <ul>
                <li>
                  <a>BASIC</a>
                </li>
                <li>
                  <a>PATTERN</a>
                </li>
                <li>
                  <a>BE SPOKE</a>
                </li>
                <li>
                  <a>GALLERY</a>
                </li>
                <li>
                  <a>LOOKBOOK</a>
                </li>
              </ul>
            </div>
            <div className="menu-link">
              <ul>
                <li>
                  <a>Intagram</a>
                </li>
                <li>
                  <a>Youtube</a>
                </li>
                <li>
                  <a>Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
