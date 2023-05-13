import React from "react";
import './PrimaryButton.css';
import { Link } from "react-router-dom";

function PrimaryButton(props) {
    return(
        <div className="primaryButton">
           <Link><button onClick = {()=> {
            if (props.title==="minha_conta"){
                alert('Enviado com sucesso!')
            }
            if (props.title==="meu_carrinho"){
                alert('Seu pedido estará disponível em até 5 dias.')
            }
            }}>{props.btn}</button></Link>
        </div>
    );
}

export default PrimaryButton;