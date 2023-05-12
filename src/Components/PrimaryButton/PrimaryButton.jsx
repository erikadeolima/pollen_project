import React from "react";
import './PrimaryButton.css';
import { Link } from "react-router-dom";

function PrimaryButton(props) {
    return(
        <div className="primaryButton">
           <Link><button onclick = {()=> alert('Enviado com sucesso!')}>{props.btn}</button></Link>
        </div>
    );
}

export default PrimaryButton;