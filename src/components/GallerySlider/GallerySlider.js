import { useState } from 'react';

import mainGallery from '../../assets/images/banner-image-center@2x.jpg';
import leftGallery from '../../assets/images/banner-image-left@2x.jpg';
import rightGallery from '../../assets/images/banner-image-rignt@2x.jpg';
import arrowBut from '../../assets/images/arrow-icon.svg';

const GallerySlider = () => {
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
  );
};

export default GallerySlider;
