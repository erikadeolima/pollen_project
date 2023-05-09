import React from 'react';
import './MeuCarrinho.css';
import Line from '../../Components/Line/Line';

function MeuCarrinho() {
    return(
        <div className='MeuCarrinho'>
            <h3 className='tituloPolens'>
                Você tem 10.000 pólens acumulados.
            </h3>
            
            <Line/>
            <br/>
            <p className='tituloPedidos'>
                Veja aqui o seu histórico de pedidos
            </p>
            <br/>
            

        </div>
        
    )
};

export default MeuCarrinho