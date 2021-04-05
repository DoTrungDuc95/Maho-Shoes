import React from 'react'
import './ProductCard.scss';
import PropTypes from 'prop-types';
import cartIcon1 from '../../assets/images/products/cart-box.png';

const ProductCard = ({ id, brand, name, price, src }) => {
    const formatPrice = (price) => {
        return `${new Intl.NumberFormat().format(price)} KRW`
    }
    return (
        <div className="productCard">
            <div className="productCard-img">
                <img src={src} alt="product" />
                <div className="overlay" />
            </div>
            <div className="productCard-content">
                <div className="productCard-content__cart">
                    <img src={cartIcon1} alt="cart" />
                </div>
                <div className="productCard-content__brand">
                    <span>{brand}</span>
                </div>
                <div className="productCard-content__name">
                    <span>{name}</span>
                </div>
                <div className="productCard-content__price">
                    <span>{formatPrice(price)}</span>
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    id: PropTypes.string,
    brand: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    src: PropTypes.string,
}
export default ProductCard;
