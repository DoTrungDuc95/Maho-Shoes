import React from 'react'

import { useState } from 'react';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';


export default function HomePage() {
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
        <div>
            {show && <Menu closeMenu={closeMenu} />}
            <Header openMenu={openMenu} />
            <Main />
            <Footer />
        </div>
    )
}
