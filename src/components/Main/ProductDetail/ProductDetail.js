import './ProductDetail.css';

import pre from '../../../assets/images/previous-page-icon.svg';
import next from '../../../assets/images/next-page-icon.svg';
import mainImg from '../../../assets/images/main-image@2x.jpg';
import sizeBox from '../../../assets/images/size-box-icon.svg';
import moreBox from '../../../assets/images/more-box.svg';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="productDetail-image">
        <button>
          <img src={pre} />
        </button>
        <div className="productDetail-img">
          <img src={mainImg} />
        </div>
        <button>
          <img src={next} />
        </button>
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
            <img src={pre} />
          </button>
          <h1>BASIC</h1>
          <button>
            <img src={next} />
          </button>
        </div>

        <div className="productDetail-options">
          <button className="productDetail-options-button-active">
            Leather
          </button>
          <button>Lining</button>
          <button>Outsole</button>
        </div>

        <div className="productDetail-color">Color here</div>

        <button className="productDetail-button productDetail-button-more">
          <img src={moreBox} />
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
