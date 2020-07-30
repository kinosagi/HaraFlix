import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

// Parte default para todas as páginas

// Padroniza o estilo
const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;

`;

// Cria a função PageDefault
function PageDefault({children}){
    return(
        <>
            <Menu/>
                <Main>
                    {children}

                </Main>
            <Footer/>
        </>
    );
}

export default PageDefault;

//obs: é possível utilizar a ferramenta 'fragment', substituindo 
//<div> apenas por <>