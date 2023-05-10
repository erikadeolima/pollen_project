import React, { useContext, useEffect, useState } from 'react';
import './Homepage.css';
import Banner from '../../Components/Banner/Banner';
import CardPhotoProduct from '../../Components/CardPhotoProduct/CardPhotoProduct';
import storage from '../../Context/Context';

function Homepage() {
    const { getProducts, products } = useContext(storage);
    useEffect(() => {
        getProducts();
    }, [products]);

    return (
        <div>
            <Banner />
            {products.map((product) => (
                <CardPhotoProduct
                    key={product.id}
                    id={product.id} na
                    name={product.name}
                    src={product.src}
                    pollen={product.pollen}
                />))
            }
        </div>
    )
};

export default Homepage