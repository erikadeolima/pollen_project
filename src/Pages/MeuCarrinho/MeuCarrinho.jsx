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
            <table className='tableCarrinho'>
                <tr>
                    <td>Data do Pedido</td>
                    <td>Produtos</td>
                    <td> Custo</td>
                    <td>Statos do Pedido</td>
                </tr>
                <tr>
                    <td>20/02/2023</td>
                    <td>Caneca Bees</td>
                    <td>70 Pólens</td>
                    <td>Entregue</td>
                </tr>
                <tr>
                    <td>20/02/2023</td>
                    <td>Caneca Bees</td>
                    <td>70 Pólens</td>
                    <td>Entregue</td>
                </tr>
                <tr>
                    <td>20/02/2023</td>
                    <td>Caneca Bees</td>
                    <td>70 Pólens</td>
                    <td>Entregue</td>
                </tr>
            </table>
            
            <p className='tituloTransfira'>
                Não vai usar seus pólens? Transfira para outra pessoa! </p>
            <br/>
            <div className='presente'>
            <label for="emailPresente">Digite o e-mail da pessoa que vai receber os pólens:</label>
            <input type="e-mail" name="" id="emailPresente" class='input' />

            <label for="quantidadePólens">Quantos pólens deseja enviar?</label>
            <input type="number" name="" id="quantidadePólens" class='input' />
            <button>Enviar</button>
            
            
            </div>
        </div>
        

        
    )
};

export default MeuCarrinho