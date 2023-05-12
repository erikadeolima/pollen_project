import React, { useContext, useEffect, useState } from 'react';
import './Homepage.css';
import Banner from '../../Components/Banner/Banner';
import CardDescriptionProduct from '../../Components/CardDescriptionProduct/CardDescriptionProduct';
import storage from '../../Context/Context';


function Homepage() {
    const { getProducts, products } = useContext(storage);
    useEffect(() => {
        getProducts();
    }, [products]);

    return (
        <div className='mainContainer'>
            <Banner />
            <section className='homepageProductsContainer'>
                {products.map((product) => (
                    <CardDescriptionProduct
                        key={product.id}
                        id={product.id} na
                        name={product.name}
                        src={product.src}
                        pollens={product.pollens}
                    />))
                }
            </section>
        </div>
    )
};

export default Homepage