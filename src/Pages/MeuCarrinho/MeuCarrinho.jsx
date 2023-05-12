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
        <div className=' mainContainer'>
            <div className='photoAndTxtContainer'>
                <CardProductPhoto />
                <div>
                    <h3 className='ProductName'>Nome do Produto</h3>
                    <Line />
                    <p>Preço</p>
                    <label>Quantidade:</label>
                    <br />
                    <Input />
                    <div className='caixa-selecao'>
                        <h2>Envio</h2>
                        <input type="radio" name="envio" value="retirada" />
                        Desejo Retirar no escritório do Bees
                        <br />
                        <input
                            type="radio"
                            name="envio"
                            value="receber_em_casa"
                            checked={desejaReceberEmCasa}
                            onChange={handleDesejaReceberEmCasaChange}
                        />
                        Desejo Receber em Casa
                    </div>
                </div>
                {desejaReceberEmCasa && <FormEntrega />}
            </div>
        </div>
    )

};

export default MeuCarrinho