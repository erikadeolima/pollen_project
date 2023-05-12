import React from "react";
import Line from '../Line/Line';
import Input from '../Input/Input';
import './CardCartProduct.css';

function CardCartProduct(props) {
  return (
    <div className="cart-product-container">
      <div className="productPhoto">
        <img src={props.src} alt="Foto do Produto" />
      </div>
      <div className="cart-product-info">
        <h3 className='ProductName'>{props.name}</h3>

        <p>Preço Unitário: {props.pollens} pollens</p>
        <label>Quantidade:</label>
        <br />
        <Input quantity={props.quantity} />
        <p>Subtotal: {props.subTotal} pollens</p>
      </div>

    </div>
  );
}

export default CardCartProduct;