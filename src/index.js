import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

// Página de erro 404
const Pagina404 = () => <div>Erro 404</div>

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* O 'exact' é usado para coincidir exatamente com a rota, caso contrário
      o Router ignorará os caracteres seguintes e abrirá o mais próximo */}

      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
      
      {/* Caso não haja outra rota é carregado esse último componente */}
      <Route component={Pagina404} />

    </Switch>

  </BrowserRouter>,
  
  // Como será usado o React Router Dom, não é necessário o campo abaixo
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

