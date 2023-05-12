import React from 'react';
import './Sobre.css';

function Sobre() {
    return(
        <div className='mainContainer'>
            <h2 className='tituloSobre'>
                O que é o Pollen Points?
            </h2>
            <p className='resposta'>
                O Pollen Points é uma forma de demonstrarmos que valorizamos o empenho e a entrega de cada colaborador. Com ele você pode escolher o prêmio que quiser sem sair de casa.
            </p>
            <br />
            <h2 className='tituloSobre'>
                Como acumular pollens? 
            </h2>
            <p className='resposta'>
                Você ganhará pontos semanais no valor de 100 pollens onde poderá acumular e trocar por prêmios no nosso site, através de premiações em treinamentos e atividades. 
            </p>
            <br />
            <h2 className='tituloSobre'>
                Você pode ainda espelhar seus pollens por aí!
            </h2>
            <p className='resposta'>
                Com os seus pólens você poderá encaminhar mensagens para os seus colegas de trabalho e distribuir quantos pólens você quiser, isto lhe dará um retorno de 50 pólens, este é o momento de retribuir a ajuda que recebeu durante a semana!  
            </p>
        </div>
    )
};

export default Sobre