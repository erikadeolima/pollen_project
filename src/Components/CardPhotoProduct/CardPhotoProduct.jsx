import React, { useContext, useEffect, useState } from 'react';
import './CardPhotoProduct.css';
import storage from '../../Context/Context';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { HiCurrencyDollar } from 'react-icons/hi';

function CardPhotoProduct(props) {
    const { getProducts, products } = useContext(storage);

    useState(() => {
        getProducts();
    }, [products])

    return (
        <div className="CardPhotoProduct">
            {products.map((product) => {
                console.log(product);
                return (
                    <div id="CardPhoto" key={product.id}>
                        <img src={product.src} alt={product.titulo} />
                        <i>{<AiOutlineHeart />}</i>
                        <h4>{product.titulo}</h4>
                        <div>
                            <i>{HiCurrencyDollar}</i>
                            <h5>{product.pollens}</h5>
                            <i>{product.carinho}</i>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default CardPhotoProduct;