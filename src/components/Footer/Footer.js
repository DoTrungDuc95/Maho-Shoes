import './Footer.scss';

import you from '../../assets/images/youtube-icon.svg';
import inta from '../../assets/images/instagram-icon.svg';
import face from '../../assets/images/facebook-icon.svg';
import mainGallery from '../../assets/images/banner-image-center@2x.jpg';
import leftGallery from '../../assets/images/banner-image-left@2x.jpg';
import rightGallery from '../../assets/images/banner-image-rignt@2x.jpg';
import arrowBut from '../../assets/images/arrow-icon.svg';
import { useState } from 'react';

const Footer = () => {
  //test
  const imgs = [
    mainGallery,
    rightGallery,
    leftGallery,
    rightGallery,
    rightGallery,
    mainGallery,
  ];
  const length = imgs.length;
  const [current, setCurrent] = useState(0);

  const preImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="footer">
      <div className="footer-gallery">
        <div className="footer-gallery-left">
          <img src={current === 0 ? imgs[length - 1] : imgs[current - 1]} />
        </div>
        <div className="footer-gallery-main">
          <img src={imgs[current]} />
          <button className="footer-arror-pre" onClick={preImg}>
            <img src={arrowBut} />
          </button>
          <button className="footer-arror-next" onClick={nextImg}>
            <img src={arrowBut} />
          </button>
        </div>
        <div className="footer-gallery-right">
          <img src={current === length - 1 ? imgs[0] : imgs[current + 1]} />
        </div>
      </div>
      <div className="footer-login">
        <button>Log in now and experience it.</button>
      </div>
      <p>© 2020 maho shoes. ALL RIGHTS RESERVED</p>
      <div className="footer-nav">
        <button>CONDITIONS</button>
        <button>PRIVACY</button>
        <button>GALLERY</button>
        <button>Q&A</button>
        <button>FAQ</button>
      </div>
      <div className="footer-info">
        <p>
          MAHO SHOES | 대표 XIU LEE | 사업자 등록번호 398-96-00860 |
          학원등록번호 제3291호
        </p>
        <p>메일 : apro_academy@naver.com | 고객센터 : 032-721-7989</p>
        <p>
          주소 : 인천시 연수구 인천타워대로 257, A동 송도아트포레푸르지오시티
          304,305,306,407호
        </p>
      </div>
      <div className="footer-link">
        <button>
          <img src={inta} />
        </button>
        <button>
          <img src={you} />
        </button>
        <button>
          <img src={face} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
