import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

// useState é a forma para criar variáveis de controle
// a função cria um array com a valor da variável (const, lista, objeto, etc)
// e uma função que permite alterar o valor dela

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  // useEffect deve chamar uma função e um array
  // o array indica quando que a função deve acontecer
  // Caso o array seja vazio, a função ocorrerá somente uma vez
  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://devsoutinhoflix.herokuapp.com/categorias';
    // E a ju ama variáveis
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Nome da Categoria:
          <input
              type="text"
              value={values.nome}
              name="nome"
              // onChange={function funcaoHandler(infosDoEvento) {
              //   descricao da funcao
              // }}
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Descrição:
          <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>

        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Cor:
          <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>

        </div> */}

        <Button>
          Cadastrar
        </Button>

      </form>

      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      {/* <ul> é para uma lista desordenada e <li> são itens de lista */}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
