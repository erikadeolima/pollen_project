import React, { useContext, useEffect, useState } from 'react';
import './CardPhotoProduct.css';
import storage from '../../Context/Context';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { HiCurrencyDollar } from 'react-icons/hi';
import { BsFillCartPlusFill } from 'react-icons/bs';

function CardPhotoProduct({ id, name, src, pollen }) {
    const { newItem } = useContext(storage);
    const [favorite, setFavorite] = useState(false);
    const [item, setItem] = useState({});
    const [unity, setUnity] = useState(0);



    const favoriteProduct = () => {
        if (!favorite) {
            setFavorite(true);
        } else {
            setFavorite(false);
        };
    };

    useEffect(() => {
        if (item.productId) {
            newItem(item);
        }
    }, [item]);

    // const addInCart = () => {
    //     setUnity(unity + 1);
    //     setProduct({
    //         name,
    //         productId: id,
    //         quantity: unity + 1,
    //         unitPrice: price.replace(/\./, ','),
    //         subTotal: parseFloat(price * (unity + 1))
    //             .toFixed(2)
    //             .replace(/\./, ','),
    //     });
    // };

    return (
        <div className="CardPhotoProduct">
            <div id="CardPhoto">
                {favorite ?
                    <i
                        className={favorite}
                        onClick={() => favoriteProduct()}>
                        {< AiFillHeart />}
                    </i>
                    :
                    <i
                        className={favorite}
                        onClick={() => favoriteProduct()}>
                        {<AiOutlineHeart />}
                    </i>}
                <img src={src} alt={name} />
                <h4>{name}</h4>
                <div>
                    <i>{HiCurrencyDollar}</i>
                    <h5>{pollen}</h5>
                    <i>{< BsFillCartPlusFill />}</i>
                </div>
            </div>
            )
            })}
        </div>
    );
}

export default CardPhotoProduct;