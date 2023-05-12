import React, { useContext, useEffect } from 'react';
import './MinhaConta.css';
import Line from '../../Components/Line/Line';
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
            <div className='table'>
            <thead>
                        <tr>
                            <td>Data do Pedido</td>
                            <td>Status do Pedido</td>
                            <td>Total do Pedido</td>
                            <td>Produtos</td>
                        </tr>
                        <tr>
                            <td>09/05/2023</td>
                            <td>Entregue - Retirada no Bees</td>
                            <td>100 Pólens</td>
                            <td>Camisa Tamanho P</td>
                        </tr>
                        <tr>
                            <td>20/01/2023</td>
                            <td>Entregue - Retirada no Bees</td>
                            <td>50 Pólens</td>
                            <td>Caneca 400ml </td>
                        </tr>
                        <tr>
                            <td>09/05/2023</td>
                            <td>Entregue - Retirada no Bees</td>
                            <td>50 Pólens</td>
                            <td>Garrafa de Inox</td>
                        </tr>
                    </thead>
                    </div>

            

            <p className='tituloTransfira'>
                Não vai usar seus pólens? Transfira para outra pessoa! </p>
            <br />
            <div className='presente'>
                <label htmlFor="emailPresente">Digite o e-mail da pessoa que vai receber os pólens:</label>
                <input type="e-mail" name="" id="emailPresente" className='input' />
                <label htmlFor="quantidadePólens">Quantos pólens deseja enviar?</label>
                <input type="number" name="" id="quantidadePólens" className='input' />
                
               
            </div>
            
            <div>
            <label htmlFor="mensagem">Deixe uma mensagem de carinho!</label>
            <textarea name="mensagem" id="" cols="30" rows="5"></textarea>
            
                <PrimaryButton   btn="Enviar" />
            </div>
        </div>
    )
};


export default MinhaConta;
