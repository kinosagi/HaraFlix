import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

// useState é a forma para criar variáveis de controle
// a função cria um array com a valor da variável (const, lista, objeto, etc)
// e uma função que permite alterar o valor dela

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // Colocar a 'chave' entre [] deixa ela dinâmica para qualquer input
    });
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    // Caso não usasse essa função para extrair os valores de infosDoEvento.target,
    // Seria necessário chamar na função
    // setValue(infosDoEvento.targetget.Attribute('name'), infosDoEvento.target.value);
    setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);

    // console.log('infosDoEvento', infosDoEvento);
    // 'infos do evento' são informações passadas pelo evento 'onChange'
    // 'target' é o algo no qual a função (onchange) está atuando
    // 'target.value' é o valor alterado no alvo da função
    // setValues(infosDoEvento.target.value)
  }

  // useEffect deve chamar uma função e um array
  // o array indica quando que a função deve acontecer
  // Caso o array seja vazio, a função ocorrerá somente uma vez
  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://hara-flix.herokuapp.com/categorias';
    fetch(URL)
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
        {' '}
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          // os '...' são usados para representar todos os itens já existentes
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
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
          Loading...
        </div>
      )}

      {/* <ul> é para uma lista desordenada e <li> são itens de lista */}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
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
