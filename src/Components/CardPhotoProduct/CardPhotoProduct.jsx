import React from "react";
import './CardPhotoProduct.css';

function CardPhotoProduct(props) {
    return(
        <div className="Card">
            <div id="CardPhoto">
                <img src={props.img} alt={props.alt}/>
                <i>{props.icone}</i>
            </div>
            
            <h4>{props.titulo}</h4>
            <i>{props.icone2}</i>
            <h5>{props.pollens}</h5>
            <i>{props.carinho}</i>

        </div>
    );
}

export default CardPhotoProduct;