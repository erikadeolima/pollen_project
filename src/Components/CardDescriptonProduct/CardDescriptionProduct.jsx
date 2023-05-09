import React from "react";
import './CardDescriptionProduct.css';

function CardDescriptionProduct() {
    return (
        <div className="descriptionP">
            <div id="photoP">
                <img src="#" alt="Foto do Produto" />
            </div>
            <div id="descricao">
                <h3>Camiseta BEEs</h3>
                <line />
                <h4>500 Pollens</h4>

                <br />
                <h3>Tamanhos:</h3>

                <div id="seletor">
                    <ul>
                        <li><button>S</button></li>
                        <li><button>M</button></li>
                        <li><button>L</button></li>
                        <li><button>XL</button></li>
                    </ul>

                    <label htmlFor="quantidade">Quantidade:</label>
                    <select id="quantidade">
                        <option value="">Selecione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

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