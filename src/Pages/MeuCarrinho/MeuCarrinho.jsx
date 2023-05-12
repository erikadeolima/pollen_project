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
                    <br/>
                    <Input />

                    <h2>Envio</h2>
                    <input type="checkbox" />
                    Desejo Retirar no escritório do Bees
                    <br/>
                    <input
                        type="checkbox"
                        checked={desejaReceberEmCasa}
                        onChange={handleDesejaReceberEmCasaChange}
                    />
                    Desejo Receber em Casa
                </div>
            </div>
            {desejaReceberEmCasa && <FormEntrega />}            
        </div>
    )
};

export default MeuCarrinho