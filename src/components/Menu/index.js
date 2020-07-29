// Criação do componente Menu no react
import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'

// import ButtonLink from './components/ButtonLink';


function Menu() {
    return (
        <nav className="Menu">

            {/* Insere o Logo */}
            <a href="/">
                <img className="Logo" src={Logo} alt="HaraFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>

        </nav>
    );
}

export default Menu;