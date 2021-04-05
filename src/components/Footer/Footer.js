import './Footer.css';

import you from '../../assets/images/youtube-icon.svg';
import inta from '../../assets/images/instagram-icon.svg';
import face from '../../assets/images/facebook-icon.svg';

const Footer = () => {
  return (
    <div className="footer">
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
