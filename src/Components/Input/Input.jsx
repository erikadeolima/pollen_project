import React from "react";
import './Input.css';

function Input(quantity) {
    return (
        <input className="inputForms" type="text" disabled={true} value={quantity.quantity}></input>
    );
}

export default Input;