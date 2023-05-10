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
            {/* props */}
            <div>


                <h3>Envio</h3>
                <label>
                    <input type="checkbox" />
                    Desejo Retirar no escritório do Bees
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={desejaReceberEmCasa}
                        onChange={handleDesejaReceberEmCasaChange}
                    />
                    Desejo Receber em Casa
                </label>
            </div>
            {desejaReceberEmCasa && <FormEntrega />}
            <button>Confirmar</button>
        </div>
    )
};

export default MeuCarrinho