import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';

// useState é a forma para criar variáveis de controle
// a função cria um array com a valor da variável (const, lista, objeto, etc) 
// e uma função que permite alterar o valor dela

function CadastroCategoria() {

  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // Colocar a 'chave' entre [] deixa ela dinâmica para qualquer input
    })
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    // Caso não usasse essa função para extrair os valores de infosDoEvento.target, 
    // Seria necessário chamar na função
    // setValue(infosDoEvento.targetget.Attribute('name'), infosDoEvento.target.value);
    setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);

    //   // console.log('infosDoEvento', infosDoEvento);
    //   // 'infos do evento' são informações passadas pelo evento 'onChange'
    //   // 'target' é o algo no qual a função (onchange) está atuando
    //   // 'target.value' é o valor alterado no alvo da função
    //   // setValues(infosDoEvento.target.value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          // os '...' são usados para representar todos os itens já existentes
          ...categorias,
          values
        ]);
        setValues(valoresIniciais)
      }}>

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


        <button>
          Cadastrar
        </button>

      </form>

      {/* <ul> é para uma lista desordenada e <li> são itens de lista */}
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;