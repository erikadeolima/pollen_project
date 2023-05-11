import React from "react";
import './CardProductPhoto.css';

function CardDescriptionProduct(props) {
    return (
        <div className="productPhoto">
            <img src={props.scr} alt="Foto do Produto" />
        </div>
    );
}

export default CardDescriptionProduct;