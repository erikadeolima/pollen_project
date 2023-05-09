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
                <label htmlFor="CEP">CEP</label>
                <input type="number" name="CEP" id="" />
            </div>
            <div className=''>
                <label htmlFor="ruaBairro">Rua e Bairro</label>
                <input type="text" name='ruaBairro' id='' />
                <label htmlFor="numero">Número</label>
                <input type="number" name="numero" id="" />
                <label htmlFor="complemento">Complemento</label>
                <input type="text" name='complemento' id='' />
                <label htmlFor="cidade">Cidade</label>
                <input type="text" name='cidade' id='' />
                <label htmlFor="estado">Estado</label>
                <input type="text" name='estado' id='' />

            </div>

        </div>
    )
};

export default Resumo;