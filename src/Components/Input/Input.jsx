import React from "react";
import './Input.css';

function Input(placeholder) {
    return(
        <input className="inputForms" placeholder={placeholder.txt}></input>
    );
}

export default Input;