import React, { useContext, useEffect, useState } from 'react';
import './CardDescriptionProduct.css';
import storage from '../../Context/Context';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { HiCurrencyDollar } from 'react-icons/hi';
import { BsFillCartPlusFill } from 'react-icons/bs';

function CardPhotoProduct({ id, name, src, pollens }) {
    const { newItem, total, cart, setTotal } = useContext(storage);
    const [favorite, setFavorite] = useState(false);
    const [item, setItem] = useState({});
    const [unity, setUnity] = useState(1);

    const favoriteProduct = () => {
        if (!favorite) {
            setFavorite(true);
        } else {
            setFavorite(false);
        };
    };

    useEffect(() => {
        if (item.id) {
            newItem(item);
        }
    }, [item]);

    useEffect(() => {
        if (cart) {
            const totalValue = cart
                .reduce((acc, crr) => (acc + crr.subTotal), 0);
            setTotal(totalValue);
        };
    }, [cart, total, setTotal]);

    const addInCart = () => {
        setUnity(unity + 1);
        setItem({
            id: id,
            name: name,
            src: src,
            pollens: pollens,
            quantity: unity,
            subTotal: pollens * unity
        });
    };

    return (
        <div className="CardPhotoProduct">
            <div className='heartIcon'>
                {favorite ?
                    <i
                        className={"FillHeart"}
                        onClick={() => favoriteProduct()}>
                        {< AiFillHeart />}
                    </i>
                    :
                    <i
                        className={"OutlineHeart"}
                        onClick={() => favoriteProduct()}>
                        {<AiOutlineHeart />}
                    </i>
                }
            </div>
            <div className='descriptionImg'>
                <img src={src} alt={name} />
            </div>
            <div className='descriptionTxt'>
                <p>{name}</p>
                <div className='productShop'>
                    <HiCurrencyDollar className='cardIcon' />
                    <p>{pollens} pollens</p>
                    < BsFillCartPlusFill className='cardIcon addProduct' onClick= {() => alert("Produto enviado para o carrinho!") } />
                    
                </div>
            </div>
        </div>
    );
}

export default CardPhotoProduct;