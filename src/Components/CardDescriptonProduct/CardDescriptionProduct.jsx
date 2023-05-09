import React from "react";
import './CardDescriptionProduct.css';

function CardDescriptionProduct() {
    return (
        <div className="descriptionP">
            <div id="photoP">
                <img src="#" alt="Foto do Produto" />
            </div>
            <div id="descricao">
                <h3>{props.tituloP}</h3>
                <line />
                <h4>{props.pollenV}</h4>

                <br />
                <h3>{props.tamanho}</h3>

                <div id="seletor">
                    <ul>
                        <li><button>{props.tamanho1}</button></li>
                        <li><button>{props.tamanho2}</button></li>
                        <li><button>{props.tamanho3}</button></li>
                        <li><button>{props.tamanho4}</button></li>
                        <li><button>{props.tamanho5}</button></li>

                    </ul>

                    <label htmlFor="quantidade">Quantidade:</label>
                    <select id="quantidade">
                        <option value="">Selecione</option>
                        <option value="1">{props.value1}</option>
                        <option value="2">{props.value2}</option>
                        <option value="3">{props.value3}</option>
                        <option value="4">{props.value4}</option>
                        <option value="5">{props.value5}</option>

                    </select>

                    <br />
                    <h3>Envio</h3>
                    <label>
                        <input type="checkbox" />
                        Desejo Retirar no escritório do Bees
                    </label>
                    <label>
                        <input type="checkbox" />
                        Desejo Receber em Casa
                    </label>
                    

                    <button>Confirmar</button>

                </div>

            </div>



        </div>
    );
}

export default CardDescriptionProduct;