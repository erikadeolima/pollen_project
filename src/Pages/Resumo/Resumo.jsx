import React from 'react';
import './Resumo.css';



function Resumo() {
    return (
        <div id='Resumo'>
            <h3 className='resumoPedido'>Resumo do Pedido</h3>
            <div className='canecaItem'>
                
                <img src="{imagem}" alt="" id='' />
                <div className='Itens'>
                <p>Itens: Blusa Bees</p>
                <p>Tamanho: P</p>
                <p>Total do Pedido: 500 Pólens</p>
            </div>
            </div>
            
            <div>
                <h3>Endereço para Entrega</h3>
                

            </div>

        </div>
    )
};

export default Resumo;