// Criação do componente Menu no react
import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'

// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            
            {/* Insere o Logo */}

            <Link to="/">
                <img className="Logo" src={Logo} alt="HaraFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>

            {/* Como se está utilizando o react-router-dom, muda-se a sitaxe
            onde é "a" vira "Link" e "href" vira "to"
            
            <a href="/">
                <img className="Logo" src={Logo} alt="HaraFlix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/cadastro/video">
                Novo vídeo
            </Button> */}

        </nav>
    );
}

export default Menu;