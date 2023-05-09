import React, { useContext, useEffect } from 'react';
import './MeuCarrinho.css';
import Line from '../../Components/Line/Line';
import Table from '../../Components/Table/Table';
import storage from '../../Context/Context';

function MeuCarrinho() {
    const { pollenBalance, getPollenBalance } = useContext(storage);

    useEffect(() => {
        getPollenBalance();
    }, [])

    return (
        <div className='MeuCarrinho'>
            <h3 className='tituloPolens'>
                {`Você tem ${pollenBalance} pólens acumulados.`}
            </h3>
            <Line />
            <br />
            <p className='tituloPedidos'>
                Veja aqui o seu histórico de pedidos
            </p>
            <br />

            <Table page="meu_carrinho" />

            <p className='tituloTransfira'>
                Não vai usar seus pólens? Transfira para outra pessoa! </p>
            <br />
            <div className='presente'>
                <label htmlFor="emailPresente">Digite o e-mail da pessoa que vai receber os pólens:</label>
                <input type="e-mail" name="" id="emailPresente" className='input' />

                <label for="quantidadePólens">Quantos pólens deseja enviar?</label>
                <input type="number" name="" id="quantidadePólens" class='input' />
                <button>Enviar</button>


            </div>
        </div>



    )
};

export default MeuCarrinho