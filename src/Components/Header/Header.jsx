import React from "react";
import './Header.css';

function Header(props) {
    return(
        <header>
            <section className="sectionHeader">
            <img id="logo" src= {props.logo} alt="fotoLogo" />
            <a id="nomeSite" href="./HomePage">{props.name} </a>
            
            <a id="minhaConta" href="./MinhaConta">{props.conta} </a>
            <span className="iconeCarrinho"> {props.icone1} </span>
            <a id="meuCarrinho" href="./MeuCarrinho">{props.carrinho} </a>
            <a id="logout" href="./">{props.logout} </a>
            </section>
        </header>
    );
}

export default Header;