import React, { useContext, useEffect } from 'react';
import './MinhaConta.css';
import Line from '../../Components/Line/Line';
import Table from '../../Components/Table/Table';
import storage from '../../Context/Context';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

function MinhaConta() {
    const { pollenBalance, getPollenBalance } = useContext(storage);

    useEffect(() => {
        getPollenBalance();
    }, []);

    return (
        <div className=' mainContainer minha_conta'>
            <h3 className='tituloPolens'>
                {`Você tem ${pollenBalance} pólens acumulados.`}
            </h3>
            <Line />
            <br />
            <p className='tituloPedidos'>
                Veja aqui o seu histórico de pedidos
            </p>
            <br />

            <Table page="minha_conta" />

            <p className='tituloTransfira'>
                Não vai usar seus pólens? Transfira para outra pessoa! </p>
            <br />
            <div className='presente'>
                <label htmlFor="emailPresente">Digite o e-mail da pessoa que vai receber os pólens:</label>
                <input type="e-mail" name="" id="emailPresente" className='input' />
                <label htmlFor="quantidadePólens">Quantos pólens deseja enviar?</label>
                <input type="number" name="" id="quantidadePólens" className='input' />
                <PrimaryButton btn="Enviar"/>
            </div>
        </div>
    )
};

export default MinhaConta