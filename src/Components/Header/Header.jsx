import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import logo from '../../Assets/Logo/logo-polen.png';
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
    return(
        <header>
            <div>
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo do site. Uma moeda amarela com a letra P e algumas abelhas" />
                </Link>
                <Link to="/" className='removeStyle'>
                    <h1 className='nameSiteHeader'>PollenPoints</h1>
                </Link>
            </div>
            <div className='menu-itens'>
                <Link to="/Sobre" className='removeStyle'>
                    <p>sobre nós</p>
                </Link>
                <Link to="/MinhaConta" className='removeStyle'>
                    <p>minha conta</p>
                </Link>
                <Link to="/MeuCarrinho" className='removeStyle'>
                    <p>meu carrinho</p>
                </Link>
            </div>        
        </header>
    );
}

export default Header;