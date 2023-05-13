import React, { useContext, useEffect } from 'react';
import './MinhaConta.css';
import Line from '../../Components/Line/Line';
import storage from '../../Context/Context';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import InputMd from '../../Components/InputMd/InputMd';










function MinhaConta() {
    
    
    const { pollenBalance, getPollenBalance } = useContext(storage);


    useEffect(() => {
        getPollenBalance();
    }, []);
    
    return (
        <div className='mainContainer minha_conta'>
            <div className='titulo'>
            <h3 className='tituloPolens'>
                {`Você tem ${pollenBalance} pollens acumulados.`}
            </h3>
            </div>
            <Line />
            <br />
            <p className='tituloPedidos'>
                Veja aqui o seu histórico de pedidos
            </p>
            <br />
            <div className='table'>
            <thead>
                    <tr>
                        <td><strong>Data do Pedido</strong></td>
                        <td><strong>Produtos</strong></td>
                        <td><strong>Total do Pedido</strong></td>
                        <td><strong>Status do Pedido</strong></td>
                                               
                    </tr>
                        <tr>
                            <td>09/05/2023</td>
                            <td>Camisa Tamanho P</td>
                            <td>100 Pollens</td>
                            <td>Entregue - Retirada no Bees</td>
                                                  
                        </tr>
                        <tr>
                            <td>20/01/2023</td>
                            <td>Caneca 400ml </td>
                            <td>50 Pollens</td>
                            <td>Entregue - Retirada no Bees</td>
                           
                        </tr>
                        <tr>
                            <td>09/05/2023</td>
                            <td>Garrafa de Inox</td>
                            <td>50 Pollens</td>
                            <td>Entregue - Retirada no Bees</td>
                           
                            
                        </tr>
                    </thead>
                    </div>
        <div></div>
            <div className='transfira'>
            <p className='tituloTransfira'>
                Não vai usar seus pollens? Transfira para outra pessoa! </p>
            <br />
            </div>
            <div className='meuinput'>
            <div className='presente'>
                <label htmlFor="emailPresente">Digite o e-mail da pessoa que vai receber os pollens:</label>
                <InputMd/>
            </div>
                {/* <input type="e-mail" name="" id="emailPresente" className='input' /> */}
            <div className='polensEnviar'>
                <label htmlFor="quantidadePólens">Quantos pollens deseja enviar?</label>
                <InputMd/>
                {/* <input type="number" name="" id="quantidadePólens" className='input' /> */}
            </div>
            </div>
                
            <label htmlFor="mensagem">Deixe uma mensagem de carinho!</label>
            <InputMd/>
            {/* <textarea name="mensagem" id="" cols="30" rows="5"></textarea> */}
            <div className='btn-enviar'>
            <PrimaryButton 
            title="minha_conta"
            btn="Enviar"/>
            </div>
        </div>
    )
};


export default MinhaConta;
