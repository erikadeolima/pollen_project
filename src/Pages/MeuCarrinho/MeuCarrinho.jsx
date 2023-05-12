import React, { useState } from 'react';
import './MeuCarrinho.css';
import CardDescriptionProduct from '../../Components/CardDescriptonProduct/CardDescriptionProduct';
import FormEntrega from '../../Components/FormEntrega/FormEntrega';


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
                    <input type="radio" name="envio" value="retirada" />
                    Desejo Retirar no escritório do Bees
                </label>
                <label>
                    <input
                        type="radio"
                        name="envio"
                        value="receber_em_casa"
                        checked={desejaReceberEmCasa}
                        onChange={handleDesejaReceberEmCasaChange}
                    />
                    Desejo Receber em Casa
                </label>

                {desejaReceberEmCasa && <FormEntrega />}
            </div>
            <button className="botao-finalizar">Confirmar</button>
        </div>
    )
};

export default MeuCarrinho