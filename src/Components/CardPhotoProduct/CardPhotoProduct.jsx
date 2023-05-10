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

    const addInCart = () => {
        setUnity(unity + 1);
        console.log(unity);
        setItem({
            id: id,
            name: name,
            src: src,
            pollen: pollen,
            quantity: unity,
        });
    };

    return (
        <div className="CardPhotoProduct">
            <div id="CardPhoto">
                {favorite ?
                    <i
                        className={favorite && "FillHeart"}
                        onClick={() => favoriteProduct()}>
                        {< AiFillHeart />}
                    </i>
                    :
                    <i
                        className={"OutlineHeart"}
                        onClick={() => favoriteProduct()}>
                        {<AiOutlineHeart />}
                    </i>}
                <img src={src} alt={name} />
                <h4>{name}</h4>
                <div>
                    <i>{HiCurrencyDollar}</i>
                    <h5>{pollen}</h5>
                    <button onClick={addInCart}>{< BsFillCartPlusFill />}</button>
                </div>
            </div>
        </div>
    );
}

export default CardPhotoProduct;