import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductsWrapper.scss';
import product1 from '../../assets/images/products/image-1.jpg';
import product2 from '../../assets/images/products/image-2.jpg';
import product3 from '../../assets/images/products/image-3.jpg';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CopyRight from '../../components/CopyRight/CopyRight';

export default function ProductsWrapper() {
    const LIMIT_PRODUCTS = 12;
    const [limit, setLimit] = useState(1)
    const products = [{
        id: "1",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product1
    }, {
        id: "2",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product2
    }, {
        id: "3",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product3
    }, {
        id: "4",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product1
    }, {
        id: "5",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product2
    }, {
        id: "6",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product3
    }, {
        id: "7",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product1
    }, {
        id: "8",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product2
    }, {
        id: "9",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product3
    }, {
        id: "10",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product1
    }, {
        id: "11",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product2
    }, {
        id: "12",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product3
    }, {
        id: "13",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product1
    }, {
        id: "14",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product2
    }, {
        id: "15",
        brand: "NIOD",
        name: "Copper Amino Isolate Lipid 1% CAIL",
        price: 90000,
        src: product3
    }]
    const renderProducts = (products) => {
        const productsNumber = limit * LIMIT_PRODUCTS;
        return [...products].splice(0, productsNumber).map((product, index) => {
            return <Grid key={`${product.id}-${index}`} className="product" item md={4} xs={6}>
                <ProductCard {...product} />
            </Grid>
        })
    }
    const handleLoadMore = () => {
        setLimit(value => value + 1);
    }

    return (
        <div className="productsWrapper">
            <div className="productsWrapper__container">
                <Grid className="products" container xs={12} spacing={3}>
                    {renderProducts(products)}
                </Grid>
                {products.length > (limit * LIMIT_PRODUCTS) && <div className="productsWrapper__more">
                    <div className="load-more" onClick={handleLoadMore}>
                        <span>more</span>
                        <ExpandMoreIcon />
                    </div>
                </div>}
                <div>
                    <CopyRight />
                </div>
            </div>
        </div>
    )
}
