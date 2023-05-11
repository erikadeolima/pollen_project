import React from 'react';
import './Resumo.css';

import CardProductPhoto from '../../Components/CardProductPhoto/CardProductPhoto';
import Input from '../../Components/Input/Input';



function Resumo() {
    return (
        <div id='Resumo' className='mainContainer'>
            <h2>Resumo do Pedido</h2>
            <div className='photoResumo'>
                <CardProductPhoto />
                <div>
                    <p>Itens: Blusa Bees</p>
                    <p>Tamanho: P</p>
                    <p>Total do Pedido: 500 Pólens</p>
                </div>
            </div>
            <div>
                <h2>Endereço para Entrega</h2>
                <div className='formsAddress'>
                    <Input
                        txt='CEP'
                    />
                    <br/>
                    <Input
                        txt='Rua e Bairro'
                    />
                    <Input
                        txt='Número'
                    />
                     <Input
                        txt='Complemento'
                    />
                    <Input
                        txt='Cidade'
                    />
                    <Input
                        txt='Estado'
                    />
                </div>
            </div>
        </div>
    )
};

export default Resumo;