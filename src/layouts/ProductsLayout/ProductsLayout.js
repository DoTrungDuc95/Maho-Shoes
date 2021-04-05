import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
const ProductsLayout = ({ children }) => {
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
        <div className="productsLayout">
            {show && <Menu closeMenu={closeMenu} />}
            <Header openMenu={openMenu} />
            {children}
        </div>
    );
};

export default ProductsLayout;
