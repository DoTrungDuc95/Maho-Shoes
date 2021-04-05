import { useState } from 'react';

import './ProductDetail.css';

import preImg from '../../../assets/images/previous-page-icon.svg';
import nextImg from '../../../assets/images/next-page-icon.svg';
import preGallery from '../../../assets/images/basic-left-icon.svg';
import nextGallery from '../../../assets/images/basic-right-icon.svg';
import sizeBox from '../../../assets/images/size-box-icon.svg';
import moreBox from '../../../assets/images/more-box.svg';

//test
import black from '../../../assets/images/basic-image-1-1@2x.jpg';
import mainImg from '../../../assets/images/main-image@2x.jpg';
import img1 from '../../../assets/images/ảnh sưu tầm.jpg';
import img2 from '../../../assets/images/Collect Shop (-RBITS-Team) - Đơn số 5.jpg';
import img3 from '../../../assets/images/Gửi ảnh - Cuộc đời của những kẻ tội đồ.jpg';
import GallerySlider from '../../GallerySlider/GallerySlider';

const ProductDetail = () => {
  //test
  const colors = [
    black,
    black,
    black,
    black,
    black,
    black,
    black,
    black,
    black,
  ];

  //test
  const imgs = [mainImg, img1, img2, img3];

  const [currentImg, setCurrentImg] = useState(0);
  const length = imgs.length;

  const preImgClick = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  const nextImgClick = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  return (
    <>
      <div className="productDetail">
        <div className="productDetail-image">
          <button className="productDetail-left" onClick={preImgClick}>
            <img src={preImg} />
          </button>
          <button className="productDetail-right" onClick={nextImgClick}>
            <img src={nextImg} />
          </button>
          <div className="productDetail-img">
            {imgs.map((img, i) => {
              return (
                <div
                  key={i}
                  className={
                    i === currentImg
                      ? 'productDetail-slide productDetail-img-active'
                      : 'productDetail-slide'
                  }
                >
                  {i === currentImg && <img src={img} />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="productDetail-detail">
          <h1 className="productDetail-product-name">Bonnie & Pumps NV</h1>
          <p className="productDetail-description">
            beaker mule pumps in dessert navy
          </p>
          <button className="productDetail-button productDetail-button-size">
            <img src={sizeBox} />
          </button>
          <p className="productDetail-price">75,000 won</p>

          <div className="productDetail-basic">
            <button>
              <img src={preGallery} />
            </button>
            <h1>BASIC</h1>
            <button>
              <img src={nextGallery} />
            </button>
          </div>

          <div className="productDetail-options">
            <button className="productDetail-options-button-active">
              Leather
            </button>
            <button>Lining</button>
            <button>Outsole</button>
          </div>

          <div className="productDetail-color">
            {colors.map((c, i) => (
              <div className="productDetail-color-item" key={i}>
                <img src={c} />
              </div>
            ))}
          </div>

          <button className="productDetail-button productDetail-button-more">
            <img src={moreBox} />
          </button>
        </div>
      </div>
      <GallerySlider />
    </>
  );
};

export default ProductDetail;
