import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

// Parte default para todas as páginas

// Padroniza o estilo
const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `}
`;

// Cria a função PageDefault
function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}

      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;

// obs: é possível utilizar a ferramenta 'fragment', substituindo
// <div> apenas por <>
