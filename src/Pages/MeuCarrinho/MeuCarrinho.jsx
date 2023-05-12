import React, { useState } from 'react';
import './MeuCarrinho.css';

import CardProductPhoto from '../../Components/CardProductPhoto/CardProductPhoto';
import FormEntrega from '../../Components/FormEntrega/FormEntrega';
import Line from '../../Components/Line/Line';
import Input from '../../Components/Input/Input';


function MeuCarrinho() {
    const [desejaReceberEmCasa, setDesejaReceberEmCasa] = useState(false);

    const handleDesejaReceberEmCasaChange = (e) => {
        setDesejaReceberEmCasa(e.target.checked);
    };

    return (
        <div className='MeuCarrinho'>
            <CardDescriptionProduct
            />
            <div className='caixa-selecao'>
                <h3>Envio</h3>
                <label>
                    <input 
                    type="radio" 
                    name="envio" 
                    value="retirada" />
                    Desejo Retirar no escritório do Bees
                    <br/>
                    <input
                        type="radio"
                        name="envio"
                        value="receber_em_casa"
                        checked={desejaReceberEmCasa}
                        onChange={handleDesejaReceberEmCasaChange}
                    />
                    Desejo Receber em Casa
                </div>

                {desejaReceberEmCasa && <FormEntrega />}
            </div>
            <button className="botao-finalizar">Confirmar</button>
        </div>
    );
};

export default MeuCarrinho