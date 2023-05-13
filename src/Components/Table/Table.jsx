import React, { useContext, useEffect } from "react";
import './Table.css';
import storage from "../../Context/Context";

function Table(props) {
    const { orderHistory, getOrderHistory } = useContext(storage);

    useEffect(() => {
        getOrderHistory();
    }, [orderHistory]);

    if (props.page === "minha_conta") {
        return (
            <div>
                <table className='tableCarrinho'>
                    <thead>
                        <tr>
                            <td>Data do Pedido</td>
                            <td>Produtos</td>
                            <td>Total do Pedido</td>
                            <td>Status do Pedido</td>
                        </tr>
                    </thead>
                    <tbody>
                        {orderHistory.map((order) => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.dateOrder}</td>
                                    {order.products
                                        .map((product) => {
                                            return (<tr key={product.id}>
                                                <td>{`${product.name}`}</td> 
                                            </tr>);
                                        })}
                                    <td>{order.total}</td>
                                    <td>{order.status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;